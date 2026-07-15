export type HowItWorksIconName =
  | "open-roadhero"
  | "choose-service"
  | "provider-accepts"
  | "track-live"
  | "job-completed";

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  icon: HowItWorksIconName;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Open RoadHero",
    description: "Open the app or sign in to get started.",
    icon: "open-roadhero",
  },
  {
    step: 2,
    title: "Choose Service",
    description: "Select the roadside service you need.",
    icon: "choose-service",
  },
  {
    step: 3,
    title: "Provider Accepts",
    description: "A nearby provider accepts your request.",
    icon: "provider-accepts",
  },
  {
    step: 4,
    title: "Track Live",
    description: "Follow the provider's progress on the map.",
    icon: "track-live",
  },
  {
    step: 5,
    title: "Job Completed",
    description: "Complete payment and leave a review.",
    icon: "job-completed",
  },
];
