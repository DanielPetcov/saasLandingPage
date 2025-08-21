import { Check } from "lucide-react";

export default function BulletCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-2 bg-main rounded-full w-fit">
        <Check size={14} strokeWidth={3} color="#f5f5f5" />
      </div>
      <div className="font-medium">{text}</div>
    </div>
  );
}
