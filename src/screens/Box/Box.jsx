import React from "react";
import ArkansasVotingApp from "../../ArkansasVotingApp";
import {
  BasicInfoCard,
  CTACard,
  StatCard,
  FeatureCard,
  ResourceCard,
  IssueSolutionCard,
  TimelineCard,
  FAQCard,
  TestimonialCard,
  TeamMemberCard,
  ProgressCard,
  CountyInfoCard
} from "../../CardComponents";

export const Box = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ArkansasVotingApp />
    </div>
  );
}; 