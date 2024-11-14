"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "@/components/forms/auth.schema";
import { AiOutlineReload } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useToast } from "../ui/use-toast";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { toast } = useToast();

  const search = useSearchParams();

  useEffect(() => {
    const error = search?.get("error");
    console.log({ error });

    if (!error) return;
    setTimeout(() => {
      toast({
        title: "Error",
        description:
          error === "CredentialsSignin" ? "Invalid Credentials" : error,
      });
    });
    console.log(error === "CredentialsSignin" ? "Invalid Credentials" : error);
  }, [toast, search]);

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      username: "",
    },
  });

  async function onSubmit(data: TLoginSchema) {
    setIsPending(true);
    await signIn("credentials", {
      ...data,
      callbackUrl: location.origin + "/dashboard",
      redirect: true,
    });
    setIsPending(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-white/60"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                      {...field}
                    />
                    <button
                      onClick={() => setShowPassword((v) => !v)}
                      type="button"
                      className="absolute right-2 top-5"
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
          <div className="flex items-center justify-between pt-4">
            <Link
              href="/auth/forgot-password"
              className="text-sm whitespace-nowrap text-primary"
            >
              Forgot Password
            </Link>
            <Button
              type="submit"
              className="bg-white rounded-full hover:bg-white/90"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <span>Pending</span>
                  <AiOutlineReload className="animate-spin" />
                </span>
              ) : (
                <span>Login</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
