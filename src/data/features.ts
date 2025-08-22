import type { ComponentType, SVGProps } from "react";
import FeatureCollTeam from "../assets/svg/featureCollTeam";
import FeatureDocumentFile from "../assets/svg/featureDocumentFile";
import FeatureDaily from "../assets/svg/featureDaily";

interface FeaturesDataType {
  title: string;
  description: string;
  cover: ComponentType<SVGProps<SVGSVGElement>>;
}

export const featuresData: FeaturesDataType[] = [
  {
    title: "Collaboration Teams",
    description: "Here you can handle projects together with team virtually",
    cover: FeatureCollTeam,
  },
  {
    title: "Cloud Storage",
    description:
      "No need to worry about storage because we provide storage up to 2 TB",
    cover: FeatureDocumentFile,
  },
  {
    title: "Daily Analytics",
    description:
      "We always provide useful information to make it easier for you every day",
    cover: FeatureDaily,
  },
];
