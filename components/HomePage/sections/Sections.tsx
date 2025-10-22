
import React from "react";
import { SimpleMentorshipCarousel } from "./carousel";
import { HowItWorks } from "./HowItWorks";
import { WhyChooseUsMinimal } from "./WhyChooseUs";
import { FindMentorCTA } from "./FindMentorCTA";
import MentorCTA from "./MentorCTA";
import CTASection from "./MentorCTA";
import BusinessMentorshipCTA from "./BusinessMentorshipCTA";

export default function SectionHome() {
    return (
        <main>
            <WhyChooseUsMinimal />
            <SimpleMentorshipCarousel />
            <HowItWorks />
            <FindMentorCTA />
            <BusinessMentorshipCTA />
            <CTASection />
        </main>
    );
}