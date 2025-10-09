import DiscoverConvenience from "@/components/DiscoverConvenience";
import RecommendedTopics from "@/components/RecommendedTopics/RecommendedTopics";
import StickyNav from "@/components/StickyNav";
import InsuranceCard from "@/components/InsuranceCard";
import HealthBanner from "@/components/healthBanner";
import JourneyFlow from "@/components/JourneyFlow";
import Carousel from "@/components/imageSlider";
import InsurancePage from "@/components/InsurancePage";
import TipCard from "@/components/tip";
import Accordion from "../components/LifeInAccordion";
import FeaturedArticles from "../components/FeaturedArticles";
import RelatedArticles from "../components/RelatedArticles";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <InsurancePage /> */}
      <InsuranceCard />
      <HealthBanner />
      <JourneyFlow />
      <Carousel />
      <TipCard />
      {/* <StickyNav /> */}
      {/* <RecommendedTopics /> */}
      {/* <DiscoverConvenience /> */}
      <Accordion />
      <FeaturedArticles />
      <RelatedArticles />
    </div>
  );
}
