export type ServiceIconName =
  | "car-wash"
  | "oil-change"
  | "tire-change"
  | "battery-jump-start"
  | "fuel-delivery"
  | "lockout-assistance"
  | "towing"
  | "more-services";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
  href?: string;
};

export const services: Service[] = [
  {
    title: "Car Wash",
    description: "Convenient vehicle cleaning support.",
    icon: "car-wash",
  },
  {
    title: "Oil Change",
    description: "Routine oil service assistance.",
    icon: "oil-change",
  },
  {
    title: "Tire Change",
    description: "Help with flat or damaged tires.",
    icon: "tire-change",
  },
  {
    title: "Battery Jump Start",
    description: "Quick support for a dead battery.",
    icon: "battery-jump-start",
  },
  {
    title: "Fuel Delivery",
    description: "Emergency fuel brought to your location.",
    icon: "fuel-delivery",
  },
  {
    title: "Lockout Assistance",
    description: "Help when you are locked out.",
    icon: "lockout-assistance",
  },
  {
    title: "Towing",
    description: "Vehicle towing to a safe destination.",
    icon: "towing",
  },
  {
    title: "More Services",
    description: "Additional roadside assistance options.",
    icon: "more-services",
    href: "#contact",
  },
];
