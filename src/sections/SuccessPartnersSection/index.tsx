import { MobilePartnersList } from "@/sections/SuccessPartnersSection/components/MobilePartnersList";
import { DesktopPartnersList } from "@/sections/SuccessPartnersSection/components/DesktopPartnersList";
import { useLanguage } from "@/i18n/LanguageContext";

export const SuccessPartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline overflow-hidden py-6 font-cairo md:py-10">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <h2 className="box-border caret-transparent text-zinc-900 text-2xl font-bold leading-8 outline-[3px] text-center no-underline mb-10 py-0 md:text-3xl md:leading-9 md:pt-[18px] md:pb-2.5">
          {t("successPartnersSection.heading")}
        </h2>
      </div>
      <MobilePartnersList />
      <DesktopPartnersList />
    </section>
  );
};
