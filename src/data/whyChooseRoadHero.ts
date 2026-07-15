export type TrustFeatureIconName =
  | "fast-response"
  | "trusted-providers"
  | "real-time-tracking"
  | "secure-payments"
  | "support";

export type TrustFeature = {
  title: string;
  description: string;
  icon: TrustFeatureIconName;
};

export const trustFeatures: TrustFeature[] = [
  {
    title: "Fast Response",
    description: "We connect you with nearby support quickly.",
    icon: "fast-response",
  },
  {
    title: "Trusted Providers",
    description: "Providers can be reviewed and verified before service.",
    icon: "trusted-providers",
  },
  {
    title: "Real-time Tracking",
    description: "Follow service progress directly in the app.",
    icon: "real-time-tracking",
  },
  {
    title: "Secure Payments",
    description: "Payment options are designed to be simple and protected.",
    icon: "secure-payments",
  },
  {
    title: "24/7 Support",
    description: "Roadside help information is available whenever needed.",
    icon: "support",
  },
];
