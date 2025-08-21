import ActionButton from "../components/buttons/actionButton";
import FeatureCard from "../components/random/featureCard";
import { featuresData } from "../data/features";

export default function FeaturesSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-8 py-14 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        <div className="font-semibold text-3xl text-center lg:text-5xl lg:text-left lg:col-span-1">
          Our Features you cab get
        </div>
        <div className="font-medium text-[#A6A6A6] text-center lg:text-lg lg:text-left lg:col-span-1">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your project easily
        </div>
        <div className="flex flex-col gap-16 items-center lg:flex-row lg:col-span-3 lg:row-start-2 lg:row-end-3">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              Cover={feature.cover}
            />
          ))}
        </div>
        <div className="w-full h-fit flex justify-center lg:col-span-1">
          <ActionButton
            className="lg:text-xl lg:px-7 lg:py-4"
            text="Get Started"
          />
        </div>
      </div>
    </div>
  );
}
