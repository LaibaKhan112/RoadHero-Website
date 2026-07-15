export type NavItem = {
  label: string;
  id: string;
  variant?: "button";
};

export const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Become a Provider", id: "providers" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Download App", id: "download", variant: "button" },
];

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", id: "home" },
      { label: "Services", id: "services" },
      { label: "How It Works", id: "how-it-works" },
      { label: "Become a Provider", id: "providers" },
      { label: "About Us", id: "about" },
      { label: "Contact", id: "contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", id: "faq" },
      { label: "Contact Us", id: "contact" },
    ],
  },
];
