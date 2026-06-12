import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { HeroCarousel } from "@/sections/HeroCarousel";
import { ServicesSection } from "@/sections/ServicesSection";
import { DestinationsSection } from "@/sections/DestinationsSection";
import { TopToursSection } from "@/sections/TopToursSection";
import { TailorMadePackagesSection } from "@/sections/TailorMadePackagesSection";
import { JourneyNumbersSection } from "@/sections/JourneyNumbersSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { WorldMapSection } from "@/sections/WorldMapSection";
import { SuccessPartnersSection } from "@/sections/SuccessPartnersSection";
import { BusinessSolutionsSection } from "@/sections/BusinessSolutionsSection";
import { AccreditationsSection } from "@/sections/AccreditationsSection";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";

export const HomePage = () => {
  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <div className="box-border caret-transparent hidden leading-[25.6px] outline-[3px] no-underline font-cairo"></div>
      <div className="bg-orange-400 box-border caret-transparent h-[3px] leading-[25.6px] outline-[3px] pointer-events-none fixed no-underline origin-[0%_50%] w-full z-[2147483647] scale-x-[0.0199876] left-0 top-0 font-cairo md:scale-x-0"></div>
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />
      <HeroCarousel />
      <div className="bg-[position:0px_0px] box-border caret-transparent hidden h-[360px] leading-[25.6px] outline-[3px] relative no-underline w-full overflow-hidden font-cairo md:h-[701px]">
        <div className="box-border caret-transparent flex h-[270px] justify-center max-h-[750px] min-h-60 outline-[3px] relative no-underline w-full left-0 top-0 md:h-[750px] md:min-h-[400px]">
          <img
            alt="Travel Gate Agency - Best travel and tourism offers in Saudi Arabia"
            sizes="100vw"
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/165.jpg"
            className="bg-[position:0px_0px] box-border text-transparent brightness-[0.8] h-full max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0"
          />
        </div>
      </div>
      <ServicesSection />
      <DestinationsSection />
      <TopToursSection />
      <TailorMadePackagesSection />
      <JourneyNumbersSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <WorldMapSection />
      <SuccessPartnersSection />
      <BusinessSolutionsSection />
      <AccreditationsSection />
      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
