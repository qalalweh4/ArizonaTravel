import { TourCard } from "@/sections/TopToursSection/components/TourCard";
import { useLanguage } from "@/i18n/LanguageContext";

export const TopToursSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-12 font-cairo md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <h2 className="box-border caret-transparent text-slate-50 text-3xl font-extrabold tracking-tight leading-tight outline-[3px] text-center no-underline mb-10 py-0 md:text-4xl md:pt-[18px] md:pb-2.5">
          {t("topToursSection.heading.part1")}
          <br className="box-border caret-transparent text-[28px] leading-[44.8px] outline-[3px] no-underline md:text-[38.4px] md:leading-[61.44px]" />
          {t("topToursSection.heading.part2")}
        </h2>
        <div className="box-border caret-transparent outline-[3px] no-underline overflow-auto pb-2">
          <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] min-w-[900px] outline-[3px] gap-y-6 no-underline w-full">
            <TourCard
              title={t("topToursSection.tour1.title")}
              imageAlt={t("topToursSection.tour1.imageAlt")}
              imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/180.jpg"
              price="6495SAR"
              callAriaLabel={t("topToursSection.tour1.callAriaLabel")}
              callHref="tel://+966541272537"
              whatsappHref="https://wa.me/966541272537"
              buttonText={t("topToursSection.bookNow")}
            />
            <TourCard
              title={t("topToursSection.tour2.title")}
              imageAlt={t("topToursSection.tour2.imageAlt")}
              imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/259.jpg"
              price="4650SAR"
              callAriaLabel={t("topToursSection.tour2.callAriaLabel")}
              callHref="tel://+966541272537"
              whatsappHref="https://wa.me/966541272537"
              buttonText={t("topToursSection.bookNow")}
            />
            <TourCard
              title={t("topToursSection.tour3.title")}
              imageAlt={t("topToursSection.tour3.imageAlt")}
              imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/202.jpg"
              price="5395SAR"
              callAriaLabel={t("topToursSection.tour3.callAriaLabel")}
              callHref="tel://+966541272537"
              whatsappHref="https://wa.me/966541272537"
              buttonText={t("topToursSection.bookNow")}
            />
            <TourCard
              title={t("topToursSection.tour4.title")}
              imageAlt={t("topToursSection.tour4.imageAlt")}
              imageSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/188.jpg"
              price="3595SAR"
              callAriaLabel={t("topToursSection.tour4.callAriaLabel")}
              callHref="tel://+966541272537"
              whatsappHref="https://wa.me/966541272537"
              buttonText={t("topToursSection.bookNow")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
