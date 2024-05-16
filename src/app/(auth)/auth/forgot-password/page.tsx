import ForgotPasswordForm from "@/components/forms/ForgotPassword";
import Link from "next/link";
import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-dvh h-full bg-secondary">
      <div className="min-h-dvh h-full flex flex-col md:flex-row items-center justify-center gap-x-6 lg:gap-x-20 container">
        <div className="md:flex-1"></div>
        <div className="md:flex justify-center hidden items-center absolute left-0 top-0 bottom-0 right-1/2">
          <img
            src="/login-illustration.png"
            className="h-auto w-full"
            alt="syneurgy-login"
          />
        </div>
        <div className="md:flex-1 flex justify-center w-full max-w-sm md:max-w-none items-center md:min-h-dvh h-full md:py-32">
          <div className="flex w-full flex-col p-8 md:p-12 lg:p-16 justify-between rounded-3xl text-white bg-[rgba(38,46,64)]">
            <div>
              <div className="flex flex-col items-start mb-3">
                <Link
                  href={"/"}
                  className="flex flex-row items-center pb-3 cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pr-2 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.15718 0.386739C8.10516 -0.128913 9.24989 -0.128913 10.1979 0.386739L15.6936 3.37615C16.7176 3.93315 17.355 5.0055 17.355 6.17117V11.8288C17.355 12.9945 16.7176 14.0669 15.6936 14.6238L10.1979 17.6133C9.24989 18.1289 8.10516 18.1289 7.15718 17.6133L1.66141 14.6238C0.637428 14.0669 0 12.9945 0 11.8288L0 6.17117C0 5.0055 0.637427 3.93315 1.66141 3.37615L7.15718 0.386739Z"
                      fill="#FBFAFC"
                    ></path>
                    <circle
                      cx="8.67826"
                      cy="8.814"
                      r="3.30521"
                      fill="#1B212F"
                    ></circle>
                  </svg>
                  <p className="font-bold text-lg">Syneurgy</p>
                </Link>
                <h1 className="font-regular pt-8 text-2xl pb-3">
                  Forgot Password?
                </h1>
                <div className="mb-12 font-medium text-sm flex flex-row">
                  <p className="pr-1 text-md">New user?</p>
                  <Link href="/auth/register">
                    <span className="text-primary">Create an account</span>
                  </Link>
                </div>
              </div>
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
