
import React from "react";
import { SimpleMentorshipCarousel } from "./carousel";
import { HowItWorks } from "./HowItWorks";
import { WhyChooseUsMinimal } from "./WhyChooseUs";

export default function SectionHome() {
    return (
        <main>
            <WhyChooseUsMinimal />
            <SimpleMentorshipCarousel />
            <HowItWorks />
        </main>
    );
}