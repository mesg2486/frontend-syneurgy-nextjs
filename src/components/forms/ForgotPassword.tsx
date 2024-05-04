"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  TForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/components/forms/auth.schema";
import { AiOutlineReload } from "react-icons/ai";
import authService from "@/services/auth.service";

interface ForgotPasswordProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ForgotPasswordForm({
  className,
  ...props
}: ForgotPasswordProps) {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TForgotPasswordSchema
  >({
    mutationFn: authService.forgotPassword,
    onSuccess: (response) => {
      toast({
        title: "Email sent",
        description: "We sent you a reset code in your mailbox.",
      });
      return router.push("/auth/reset-password");
    },
    onError: (error) => {
      return toast({
        title: "Error",
        description:
          error?.response?.data?.error?.message ||
          "An error occurred while creating account.",
      });
    },
  });

  async function onSubmit(data: TForgotPasswordSchema) {
    // console.log({ data });
    mutate({ ...data });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-0 border-b border-b-white/60 rounded-none"
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full !rounded-full hover:bg-white"
          >
            {isPending ? (
              <span className="flex gap-2 items-center">
                <span>Pending</span>
                <AiOutlineReload className="animate-spin" />
              </span>
            ) : (
              <span>Send Code</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
