import { FooterMapAndContactInfo } from "@/sections/Footer/components/FooterMapAndContactInfo";
import { ContactFormSection } from "@/sections/Footer/components/ContactFormSection";

export const FooterContactSection = () => {
  return (
    <div className="bg-slate-950 box-border caret-transparent outline-[3px] no-underline py-14">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] no-underline mx-auto px-4 md:px-8">
        <div className="box-border caret-transparent gap-x-12 flex flex-col outline-[3px] gap-y-12 no-underline md:flex-row">
          <FooterMapAndContactInfo />
          <ContactFormSection />
        </div>
      </div>
    </div>
  );
};
