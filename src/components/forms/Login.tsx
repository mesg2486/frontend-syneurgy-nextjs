"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const search = useSearchParams();
  const error = search?.get("error");

  useEffect(() => {
    if (!error) return;
    toast({
      title: "Error",
      description:
        error === "CredentialsSignin" ? "Invalid Credentials" : error,
    });
    return () => {};
  }, [error]);

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
      callbackUrl: location.origin,
      redirect: true,
    });
    setIsPending(false);
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
                <FormLabel>Username or Email</FormLabel>
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
                <FormLabel>Password</FormLabel>
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
          <div className="flex pt-4 justify-between items-center">
            <Link
              href="/auth/forgot-password"
              className="whitespace-nowrap text-sm text-primary"
            >
              Forgot Password
            </Link>
            <Button type="submit" className="!rounded-full hover:bg-white">
              {isPending ? (
                <span className="flex gap-2 items-center">
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
