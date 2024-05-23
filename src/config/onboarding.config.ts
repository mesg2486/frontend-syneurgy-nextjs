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

export const onboardingQuestions = [
  {
    step: 1,
    name: "goals",
    question: "What are your team’s overall goals?",
    answers: [
      { label: "Decision making", value: "decision-making" },
      { label: "Ideation – innovating, creating", value: "ideation" },
      { label: "Problem solving", value: "problem-solving" },
      {
        label: "Brainstorming – finding creative solutions to various problems",
        value: "brainstorming",
      },
      { label: "Other (fill in)", value: "other" },
    ],
  },
  {
    step: 2,
    name: "engagementLevel",
    question:
      "Do you feel your team is engaged and focused during your meetings/work sessions?",
    answers: [
      { label: "Very Frequently", value: "very-frequently" },
      { label: "Frequently", value: "frequently" },
      { label: "Occasionally", value: "occasionally" },
      { label: "Rarely", value: "rarely" },
      { label: "Very Rarely", value: "very-rarely" },
      { label: "Never", value: "never" },
    ],
  },
  {
    step: 3,
    name: "teamInSync",
    question: "Is your team in sync currently?",
    answers: [
      {
        label:
          "More than I would like (for example, too much alignment, group think)",
        value: "more-than-i-would-like",
      },
      { label: "About right", value: "about-right" },
      {
        label:
          "Less than I would like (for example, too much divergence and friction)",
        value: "less-than-i-would-like",
      },
    ],
  },
  {
    step: 4,
    name: "syncHistory",
    question:
      "Has your team sync been increasing or decreasing, or staying the same over the past 3 months?",
    answers: [
      { label: "Increasing", value: "increasing" },
      { label: "Staying the same", value: "staying-the-same" },
      { label: "Decreasing", value: "decreasing" },
    ],
  },
];

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
  {
    title: "About You",
    type: "quote",
    description: "We want to meet you.",
    step: "7",
    thumbnail: "/assets/steve-jobs.png",
    quote: {
      name: "Steve Jobs",
      role: "CEO and Founder of Apple",
      content:
        "Great things in business are never done by one person, they're done by a team of people.",
    },
  },
  {
    title: "Invite your team",
    type: "quote",
    description: "We want to meet you.",
    step: "4",
    thumbnail: "/assets/steve-jobs.png",
    quote: {
      name: "Steve Jobs",
      role: "CEO and Founder of Apple",
      content:
        "Great things in business are never done by one person, they're done by a team of people.",
    },
  },
  {
    title: "About your team",
    type: "quote",
    description: "We want to meet you.",
    step: "5",
    thumbnail: "/assets/steve-jobs.png",
    quote: {
      name: "Steve Jobs",
      role: "CEO and Founder of Apple",
      content:
        "Great things in business are never done by one person, they're done by a team of people.",
    },
  },
];
