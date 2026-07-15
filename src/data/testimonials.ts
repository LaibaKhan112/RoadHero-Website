// Wireframe placeholder quotes — replace with real, confirmed customer and
// provider testimonials before launch.

export type Testimonial = {
  quote: string;
  name: string;
  role: "customer" | "provider";
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "RoadHero saved me when my car broke down late at night. The provider arrived in minutes and got me back on the road!",
    name: "Emily R.",
    role: "customer",
    rating: 5,
  },
  {
    quote:
      "I love being a provider on RoadHero. Great platform, steady jobs and weekly payments!",
    name: "Mike T.",
    role: "provider",
    rating: 5,
  },
];
