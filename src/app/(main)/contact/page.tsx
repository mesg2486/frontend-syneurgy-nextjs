import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#F7F7FD] pt-16 ">
      <div className="container flex flex-col items-center justify-center space-y-10 py-20">
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-8xl font-semibold mb-6">
            We’d love to hear from you
          </h2>
          <p className="opacity-80 font-medium text-xl">
            Complete this form and we will contact you.{" "}
          </p>
        </div>
        <div className="p-8 mx-auto w-full text-black  rounded-md">
          <h2 className="text-4xl mb-10 font-semibold">Get In Touch</h2>
          <form>
            <div className="mt-4 w-full">
              <Label htmlFor="Company">Fullname</Label>
              <Input
                id="fullName"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                className="mt-3"
              />
            </div>
            <div className="mt-4 w-full">
              <Label htmlFor="Company">Email</Label>
              <Input
                id="Email"
                type="email"
                autoCapitalize="none"
                autoCorrect="off"
                className="mt-3"
              />
            </div>
            <div className="mt-4 w-full">
              <Label htmlFor="Company">Phone</Label>
              <Input
                id="Phone"
                type="tel"
                autoCapitalize="none"
                autoCorrect="off"
                className="mt-3 "
              />
            </div>
            <div className="mt-4 w-full">
              <Label htmlFor="Company">Message</Label>
              <Textarea className="mt-3 " rows={4} />
            </div>
            <Button
              size="lg"
              className="w-full mt-4 bg-black text-white hover:bg-black hover:opacity-90"
            >
              Lets talk
            </Button>
          </form>
        </div>
        <Separator orientation="horizontal" />
        <div className="mt-8 space-y-4">
          <p className=" text-2xl font-medium">Syneurgy, Inc.</p>
          <p className="text-xl font-light">9701 Wilshire Blvd.</p>
          <p className="text-xl font-light">Tenth Floor</p>
          <p className="text-xl font-medium">USA</p>
          <p className="text-xl font-medium">Beverly Hills, CA 90212</p>
        </div>
      </div>
    </div>
  );
}
