import {LucideIcon} from "lucide-react";

export interface IFeatureItem {
    name: string;
    description: string;
    icon: LucideIcon;
}

export interface IFeatureProps {
    features: IFeatureItem[];
}
