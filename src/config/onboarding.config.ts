export interface OnboardingStep {
  title: string;
  description: string;
  type: "quote" | "para";
  thumbnail: string;
  step: string;
  para?: string;
  quote?: {
    name: string;
    role: string;
    content: string;
  };
}

export const onboarding: OnboardingStep[] = [
  {
    title: "Welcome. Let's start working together.",
    type: "quote",
    description: "Create your first team.",
    step: "1",
    thumbnail: "/assets/marc-benioff.png",
    quote: {
      name: "Marc Benioff",
      role: "CEO and Founder of Salesforce",
      content:
        "The best teams play together like a family who trust one another to have their back",
    },
  },
  {
    title: "Upload your meeting",
    type: "para",
    description: "Upload your meeting to get started.",
    step: "2",
    thumbnail: "/assets/union.png",
    para: "Research on interpersonal synchrony among team members is associated with more trust, cooperation, coordination, empathy, team performance, and collaboration.",
  },
  {
    title: "About You",
    type: "quote",
    description: "We want to meet you.",
    step: "3",
    thumbnail: "/assets/steve-jobs.png",
    quote: {
      name: "Steve Jobs",
      role: "CEO and Founder of Apple",
      content:
        "Great things in business are never done by one person, they're done by a team of people.",
    },
  },
];
