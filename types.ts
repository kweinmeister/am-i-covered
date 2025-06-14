
import React from 'react';

export enum PolicyType {
  AUTO = "Auto",
  HOME = "Home",
  RENTERS = "Renters",
  PET = "Pet", // New entry
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  deductibleInfo: string;
  nextSteps: string[];
}

export interface Policy {
  type: PolicyType;
  displayName: string;
  icon: (props: IconProps) => React.ReactNode;
  scenarios: Scenario[];
}

export interface IconProps {
  className?: string;
}

export interface SelectOption<T = string> {
  value: T;
  label: string;
  icon?: (props: IconProps) => React.ReactNode;
}
