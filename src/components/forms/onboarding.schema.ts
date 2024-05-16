import { z } from "zod";

export const onboardingHomeSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export const meetingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.string().min(2, {
    message: "Must select a type.",
  }),
  date: z.date(),
});

export const aboutFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  resultPrivacy: z.boolean(),
});

export type TMeetingSchema = z.infer<typeof meetingSchema>;
export type TAboutFormSchema = z.infer<typeof aboutFormSchema>;
export type TOnboardingHomeSchema = z.infer<typeof onboardingHomeSchema>;
