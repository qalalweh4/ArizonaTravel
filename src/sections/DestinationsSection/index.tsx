import { DestinationIntro } from "@/sections/DestinationsSection/components/DestinationIntro";
import { FeaturedDestinationImages } from "@/sections/DestinationsSection/components/FeaturedDestinationImages";
import { DestinationGallery } from "@/sections/DestinationsSection/components/DestinationGallery";

export const DestinationsSection = () => {
  return (
    <section className="bg-slate-900 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-12 font-cairo md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="[align-items:normal] box-border caret-transparent gap-x-8 flex flex-col outline-[3px] gap-y-8 no-underline mb-3 md:items-stretch md:gap-x-10 md:flex-row md:gap-y-10">
          <DestinationIntro />
          <FeaturedDestinationImages />
        </div>
        <DestinationGallery />
      </div>
    </section>
  );
};
