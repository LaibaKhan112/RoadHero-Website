// Replace these values if the client provides updated confirmed business statistics.

export type StatIconName = "providers" | "customers" | "success-rate" | "support";

export type Stat = {
  value: string;
  label: string;
  icon: StatIconName;
};

export const stats: Stat[] = [
  {
    value: "500+",
    label: "Trusted Providers",
    icon: "providers",
  },
  {
    value: "10K+",
    label: "Happy Customers",
    icon: "customers",
  },
  {
    value: "99%",
    label: "Job Success Rate",
    icon: "success-rate",
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: "support",
  },
];
