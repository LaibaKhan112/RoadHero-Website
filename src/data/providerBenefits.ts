export type ProviderBenefitIconName =
  | "flexible-hours"
  | "instant-notifications"
  | "weekly-payouts"
  | "grow-business";

export type ProviderBenefit = {
  title: string;
  icon: ProviderBenefitIconName;
};

export const providerBenefits: ProviderBenefit[] = [
  {
    title: "Flexible Working Hours",
    icon: "flexible-hours",
  },
  {
    title: "Instant Job Notifications",
    icon: "instant-notifications",
  },
  {
    title: "Weekly Payouts",
    icon: "weekly-payouts",
  },
  {
    title: "Grow Your Business",
    icon: "grow-business",
  },
];
