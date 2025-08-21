interface PlansDataType {
  title: string;
  about: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  buttonText: string;
  isMain: boolean;
}

export const plansData: PlansDataType[] = [
  {
    title: "Free",
    about: "Have a go  and test your  superpowers",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    buttonText: "Signup for free",
    isMain: false,
  },
  {
    title: "Pro",
    about: "Experiment the power of infinite possibilities",
    price: {
      monthly: 12,
      yearly: 8,
    },
    features: [
      "4 users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    buttonText: "Go to pro",
    isMain: true,
  },
  {
    title: "Business",
    about: "Unveil new superpowers and join the Design Leaque",
    price: {
      monthly: 30,
      yearly: 16,
    },
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception pogram",
      "Collaboration-Soon",
    ],
    buttonText: "Go to Business",
    isMain: false,
  },
];
