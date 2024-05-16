import { UPDATE_USER_ABOUT } from "@/components/forms/AboutForm";
import { TAboutFormSchema } from "@/components/forms/onboarding.schema";
import { toast } from "@/components/ui/use-toast";
import { gql } from "@/services/clients/graphql.client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TUseUpdateUserProps {
  successMsg?: string;
  errorMsg?: string;
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export default function useUpdateUser({
  successMsg,
  errorMsg,
  progress,
  setProgress,
}: TUseUpdateUserProps) {
  const queryClient = useQueryClient();

  return useMutation<any, any, TAboutFormSchema>({
    mutationFn: async (variables: any) =>
      gql.request(UPDATE_USER_ABOUT, variables),
    onSuccess: (data) => {
      console.log(data, "user updated data");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast({
        title: successMsg || "Details Updated",
      });
      setProgress(String(Number(progress) + 1));
    },
    onError: () => {
      toast({
        title: errorMsg || "Error",
        description: "An error occurred while updating the details.",
      });
    },
  });
}
