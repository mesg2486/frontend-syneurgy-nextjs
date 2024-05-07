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
  TRegisterSchema,
  registerSchema,
} from "@/components/forms/auth.schema";
import { AiOutlineReload } from "react-icons/ai";
import authService from "@/services/auth.service";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeSlash } from "react-icons/hi2";

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RegisterForm({
  className,
  ...props
}: RegisterFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation<
    any,
    any,
    TRegisterSchema
  >({
    mutationFn: authService.register,
    onSuccess: (response) => {
      toast({
        title: "Account Created",
        description: "Your account was created successfully.",
      });
      return router.push("/auth/verification");
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

  async function onSubmit(data: TRegisterSchema) {
    // console.log({ data });
    mutate({ ...data });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-white/60"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
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
              <FormItem className="relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-0 border-b border-b-white/60 rounded-none"
                      {...field}
                    />
                    <button
                      onClick={() => setShowPassword((v) => !v)}
                      type="button"
                      className="absolute right-2 top-9"
                    >
                      {showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
                    </button>
                  </>
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
            name="terms"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4">
                  <FormControl>
                    <Input
                      type="checkbox"
                      className="border-0 h-6 w-6 border-b border-b-white/60 rounded-none"
                      {...field}
                      value={String(field.value)}
                    />
                  </FormControl>
                  <FormLabel className="text-primary-content">
                    <p className="text-xs">
                      By clicking Create account, I agree that I have read and
                      accepted the{" "}
                      <Link href={"#"} className="text-primary">
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link href={"#"} className="text-primary">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </FormLabel>
                </div>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-white hover:bg-white/90"
            >
              {isPending ? (
                <span className="flex gap-2 items-center">
                  <span>Pending</span>
                  <AiOutlineReload className="animate-spin" />
                </span>
              ) : (
                <span>Sign Up</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
