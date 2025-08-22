import { Activity, ChartPie, Command, type LucideIcon } from "lucide-react";

interface PerformanceDataType {
  icon: LucideIcon;
  title: string;
  description: string;
}
export const performanceData: PerformanceDataType[] = [
  {
    icon: Activity,
    title: "Publishing",
    description:
      "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand",
  },
  {
    icon: ChartPie,
    title: "Analytics",
    description: "Analyze your performance and create gorgeous reports",
  },
  {
    icon: Command,
    title: "Publishing",
    description: "Quickly navigate you and engage with your audience",
  },
];
