"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { onboardingQuestions } from "@/config/onboarding.config";
import { AiOutlineReload } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { gql } from "@/services/clients/graphql.client";
import { graphql } from "@/services/gql";
import useUpdateUser from "@/hooks/useUpdateUserStep";
import { useOnboardingData } from "@/contexts/onboarding.context";
import { useRouter } from "next/navigation";

const QuestionsFormSchema = z.object(
  Object.fromEntries(
    onboardingQuestions.map((obj) => [
      obj.name,
      z.enum(
        onboardingQuestions
          ?.find((q) => q.name === obj.name)
          ?.answers.map((a) => a.value) as any,
      ),
    ]),
  ),
);

const UPDATE_TEAM_QUESTIONNAIRE = graphql(`
  mutation updateTeamQuestionairre(
    $goals: String
    $id: ID!
    $syncHistory: String
    $teamInSync: String
    $engagementLevel: String
  ) {
    team: updateTeam(
      input: {
        goals: $goals
        id: $id
        syncHistory: $syncHistory
        teamInSync: $teamInSync
        engagementLevel: $engagementLevel
      }
    ) {
      id
    }
  }
`);

type TQuestionsFormSchemaType = z.infer<typeof QuestionsFormSchema>;

interface IFormProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function OnboardingQuestions({
  progress,
  setProgress,
}: IFormProps) {
  const [step, setStep] = useState(1);
  const { user } = useOnboardingData();
  const queryClient = useQueryClient();

  const router = useRouter();
  const { mutate: updateUser } = useUpdateUser({
    progress,
    setProgress,
  });

  const form = useForm<TQuestionsFormSchemaType>({
    resolver: zodResolver(QuestionsFormSchema),
  });

  const { mutate, isPending } = useMutation<any, any, TQuestionsFormSchemaType>(
    {
      mutationFn: async (variables: any) =>
        gql.request(UPDATE_TEAM_QUESTIONNAIRE, variables),
      onSuccess: async (response) => {
        updateUser({
          id: user.firstTeam,
          sub: user.sub,
          step: "6",
          onboarded: true,
        } as any);
        await queryClient.invalidateQueries({ queryKey: ["user"] });
        router.push("/");
      },
      onError: (error) => {
        return toast({
          title: "Error",
          description: "An error occurred while creating team.",
        });
      },
    },
  );

  async function onSubmit(data: z.infer<typeof QuestionsFormSchema>) {
    mutate({
      id: user.firstTeam,
      ...data,
    } as any);
  }

  const handleNext = async () => {
    const isValid = await form.trigger(
      onboardingQuestions.find((i) => i.step === step)?.name,
    );
    isValid ? setStep((v) => (step < 4 ? ++v : 4)) : null;
  };

  const handleSetStep = async (i: number) => {
    const isValid = await form.trigger(
      onboardingQuestions.find((i) => i.step === step)?.name,
    );
    isValid ? setStep(i) : null;
  };

  return (
    <div className="pt-8 flex-1">
      <div className="absolute right-0 top-0 flex gap-0.5">
        {Array.from(Array(4).keys()).map((i) => (
          <div
            key={i}
            onClick={() => handleSetStep(i + 1)}
            className={`h-1.5 w-1.5 rounded-full cursor-pointer ${i + 1 <= step ? (i + 1 == step ? "bg-white/80" : "bg-primary") : "bg-white/20"}`}
          ></div>
        ))}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-6 h-full flex flex-col text-white/60"
        >
          <div className="flex-1">
            {onboardingQuestions.map((i) => (
              <div
                key={i.step}
                className={i.step === step ? "block" : "hidden"}
              >
                <FormField
                  control={form.control}
                  name={i.name}
                  render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormLabel className="text-white/90">
                        {i.question}
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-3"
                        >
                          {i.answers.map((i) => (
                            <FormItem
                              key={i.value}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  className="border-white"
                                  value={i.value}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-white/60">
                                {i.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {step > 1 && (
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent hover:bg-transparent border-white/30 px-4"
                onClick={() => setStep((v) => (step > 1 ? --v : 1))}
              >
                <HiOutlineArrowLongLeft />
              </Button>
            )}
            <Button
              type={step < 4 ? "button" : "submit"}
              size="lg"
              onClick={handleNext}
              className="rounded-full w-full felx
               bg-white hover:bg-white/90"
            >
              {isPending ? (
                <span className="flex gap-2 items-center">
                  <span>Pending</span>
                  <AiOutlineReload className="animate-spin" />
                </span>
              ) : (
                <span className="flex gap-2 items-center">
                  <span>{step < 4 ? "Next Question" : "Submit"}</span>
                  <HiOutlineArrowLongRight />
                </span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
