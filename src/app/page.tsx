import NavBar  from "@/components/navbar/navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import VideoSection from "@/components/VideoSection/VideoSection";
import VideoConstant from "@/Const/VideoConstant";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import ScreenshotSection from "@/components/ScreenshotSection/ScreenshotSection";
import GameSection from "@/components/GameSection/GameSection";
import SocialAndFooterSection from "@/components/SocialAndFooterSection/SocialAndFooterSection";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <VideoSection videoId={VideoConstant.videoId} autoplay={VideoConstant.autoplay} controls={VideoConstant.control} />
      <FeaturesSection />
      <ScreenshotSection />
      <GameSection />
      <SocialAndFooterSection />
    </main>
  );
}
