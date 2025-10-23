export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = typeof NAV_ITEMS[number];