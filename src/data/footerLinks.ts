interface FooterDataType {
  title: string;
  links?: {
    link: string;
    title: string;
  }[];
}

export const footerData: FooterDataType[] = [
  {
    title: "Support",
    links: [
      {
        link: "#",
        title: "Help center",
      },
      {
        link: "#",
        title: "Account information",
      },
      {
        link: "#",
        title: "About",
      },
      {
        link: "#",
        title: "Contact us",
      },
    ],
  },
  {
    title: "Help and Solution",
    links: [
      {
        link: "#",
        title: "Talk to support",
      },
      {
        link: "#",
        title: "Support docs",
      },
      {
        link: "#",
        title: "System status",
      },
      {
        link: "#",
        title: "Covid response",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        link: "#",
        title: "Update",
      },
      {
        link: "#",
        title: "Security",
      },
      {
        link: "#",
        title: "Beta test",
      },
      {
        link: "#",
        title: "Pricing product",
      },
    ],
  },
];
