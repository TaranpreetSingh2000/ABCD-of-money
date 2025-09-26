"use client";
import DiscoverConvenience from "@/components/DiscoverConvenience";
import RecommendedTopics from "@/components/RecommendedTopics/RecommendedTopics";
import StickyNav from "@/components/StickyNav";
import FooterCard from "./FooterCard/page";
import InsuranceCard from "@/components/InsuranceCard";
import HealthBanner from "@/components/healthBanner";
import JourneyFlow from "@/components/JourneyFlow";
import Carousel from "@/components/imageSlider";
import InsurancePage from "@/components/InsurancePage";
import TipCard from "@/components/tip";

export default function Home() {
  return (
    <>
      <InsurancePage />
      <InsuranceCard />
      <HealthBanner />
      <JourneyFlow />
      <Carousel />
      <TipCard />
      <StickyNav />
      <RecommendedTopics />
      <DiscoverConvenience />
      <FooterCard />
      {/* <div className="max-w-[1440px] mx-auto">
        <div className="h-screen bg-[#F4EDD7]"></div>
        <div className="h-screen bg-[#F4EDD7]"></div>
      </div> */}
    </>
  );
}
