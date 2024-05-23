import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#F7F7FD] pt-16 ">
      <div className="container  grid sm:grid-cols-2 justify-center py-20">
        <div className=" mx-auto w-full">
          <h2 className="text-4xl font-semibold">We’d love to hear from you</h2>
          <p className="opacity-80 font-medium">
            Complete this form and we will contact you.{" "}
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-medium text-sky-500 mb-4">Contact Us</h2>
            <p className="font-medium">Syneurgy, Inc.</p>
            <p className="font-medium">9701 Wilshire Blvd.</p>
            <p className="font-medium">Tenth Floor</p>
            <p className="font-medium">Beverly Hills, CA 90212</p>
            <p className="font-medium">USA</p>
          </div>
        </div>
        <div className="p-8 mx-auto w-full bg-white text-black  rounded-md">
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
      </div>
    </div>
  );
}
