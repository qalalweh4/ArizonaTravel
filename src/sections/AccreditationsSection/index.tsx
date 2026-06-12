import { AccreditationCard } from "@/sections/AccreditationsSection/components/AccreditationCard";
import { useLanguage } from "@/i18n/LanguageContext";

export const AccreditationsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline pt-6 pb-10 font-cairo md:pt-10 md:pb-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="box-border caret-transparent outline-[3px] no-underline mb-10">
          <p className="box-border caret-transparent text-zinc-900 text-4xl font-bold leading-[45px] outline-[3px] no-underline mb-3 md:text-5xl md:leading-[60px]">
            {t("accreditationsSection.heading.part1")}
            <br className="box-border caret-transparent text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]" />
            {t("accreditationsSection.heading.part2")}
          </p>
          <p className="box-border caret-transparent text-orange-400 font-medium leading-[26px] max-w-sm outline-[3px] no-underline mb-4">
            {t("accreditationsSection.subheading")}
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-5 no-underline md:grid-cols-[repeat(5,minmax(0px,1fr))]">
          <AccreditationCard
            variant="iata"
            imageAlt="IATA"
            imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/116.png"
          />
          <AccreditationCard
            variant="ministry"
            imageAlt="Ministry of Tourism"
            imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/195.png"
            imageSizes="100vw"
          />
          <AccreditationCard
            variant="default"
            label={t("accreditationsSection.cards.licenseCategory.label")}
            value={t("accreditationsSection.cards.licenseCategory.value")}
          />
          <AccreditationCard
            variant="default"
            label={t("accreditationsSection.cards.licenseNumber.label")}
            value={t("accreditationsSection.cards.licenseNumber.value")}
          />
          <AccreditationCard
            variant="default"
            label={t("accreditationsSection.cards.taxId.label")}
            value={t("accreditationsSection.cards.taxId.value")}
          />
        </div>
      </div>
    </section>
  );
};
