/**
 * Centralized Contact & Social Channels Data
 * Placeholder links can be updated here.
 */
export const socialLinks = [
  {
    name: "Email",
    label: "Direct Inquiries",
    value: "shashwatvatsyayan@gmail.com",
    href: "mailto:shashwatvatsyayan@gmail.com",
    badge: "Primary Contact"
  },
  {
    name: "LinkedIn",
    label: "Professional Network",
    value: "linkedin.com/in/shashwat-vatsyayan",
    href: "https://www.linkedin.com/in/shashwat-vatsyayan-b777743a3",
    badge: "Connect"
  },
  {
    name: "Instagram",
    label: "Visual Narratives & Filmmaking",
    value: "@shashwat_vatsyayan",
    href: "https://instagram.com/shashwat_vatsyayan",
    badge: "Visuals"
  },
  {
    name: "GitHub",
    label: "Code & Open Source",
    value: "github.com/shashwatvatsyayan",
    href: "#",
    badge: "Repositories"
  }
];

if (typeof window !== "undefined") {
  window.socialLinks = socialLinks;
}
