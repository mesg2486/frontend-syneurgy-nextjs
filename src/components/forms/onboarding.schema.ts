import { z } from "zod";

export const onboardingHomeSchema = z.object({
  title: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
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
  privacy: z.boolean(),
});

export type TAboutFormSchema = z.infer<typeof aboutFormSchema>;
export type TOnboardingHomeSchema = z.infer<typeof onboardingHomeSchema>;
