export type AppShowcaseVariant = "customer" | "provider";

export type AppShowcasePanel = {
  id: string;
  variant: AppShowcaseVariant;
  eyebrow: string;
  heading: string;
  description: string;
  features: string[];
};

export const appShowcasePanels: AppShowcasePanel[] = [
  {
    id: "customer-app",
    variant: "customer",
    eyebrow: "Customer App",
    heading: "Everything you need, at your fingertips.",
    description:
      "Book trusted roadside help in minutes and track your provider every step of the way.",
    features: [
      "Easy Booking",
      "Live Tracking",
      "Multiple Payment Options",
      "Real-time Notifications",
      "Rate & Review",
    ],
  },
  {
    id: "provider-app",
    variant: "provider",
    eyebrow: "Provider App",
    heading: "More jobs. More earnings. More growth.",
    description:
      "Manage service requests, track your earnings, and grow your roadside business on the go.",
    features: [
      "Live Service Requests",
      "Earnings Overview",
      "Job History",
      "Navigation Support",
      "Profile Management",
    ],
  },
];
