export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How do I book a service?",
    answer:
      "Open the RoadHero app, choose the service you need, and a nearby provider will accept your request within minutes.",
  },
  {
    question: "How do providers get paid?",
    answer:
      "Providers are paid securely through the app after each completed job, with fast, reliable weekly payouts.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. Every payment is processed through encrypted, cashless checkout, so your card details are always protected.",
  },
  {
    question: "How does provider verification work?",
    answer:
      "Every provider passes a background check and document verification before they're allowed to accept jobs on RoadHero.",
  },
  {
    question: "Can I schedule a service in advance?",
    answer:
      "Yes, you can schedule a service for a future date and time, or request one on demand for immediate help.",
  },
];
