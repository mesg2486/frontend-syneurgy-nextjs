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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  TResetPasswordSchema,
  resetPasswordSchema,
} from "@/components/forms/auth.schema";
import { AiOutlineReload } from "react-icons/ai";
import authService from "@/services/auth.service";

interface ResetPasswordProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ResetPasswordForm({
  className,
  ...props
}: ResetPasswordProps) {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TResetPasswordSchema
  >({
    mutationFn: authService.resetPassword,
    onSuccess: (response) => {
      toast({
        title: "Password Changed",
        description: "Use your new password for Login",
      });
      return router.push("/auth/login");
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

  async function onSubmit(data: TResetPasswordSchema) {
    // console.log({ data });
    mutate({ ...data });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reset Code</FormLabel>
                <FormControl>
                  <Input
                    className="border-0 border-b border-b-white/60 rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Check your email for a reset code.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border-0 border-b border-b-white/60 rounded-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    className="border-0 border-b border-b-white/60 rounded-none"
                    {...field}
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
              <span>Reset Password</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
