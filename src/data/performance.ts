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
      "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
  },
  {
    icon: ChartPie,
    title: "Analytics",
    description: "Analyze your performance and create goegeous report",
  },
  {
    icon: Command,
    title: "Publishing",
    description: "Quiuckly navigate you anda engage with your adience",
  },
];
