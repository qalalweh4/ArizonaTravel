import { useLanguage } from "@/i18n/LanguageContext";

export const DestinationIntro = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent block basis-full flex-row shrink-0 justify-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline md:flex md:basis-[38%] md:flex-col md:justify-center">
      <h2 className="box-border caret-transparent text-zinc-900 text-[28px] font-bold leading-[33.6px] min-h-0 min-w-0 outline-[3px] text-center no-underline mb-5 py-0 md:text-[38.4px] md:leading-[46.08px] md:min-h-[auto] md:min-w-[auto] md:pt-[18px] md:pb-2.5">
        {t("destinationsSection.heading.part1")}
        <span className="box-border caret-transparent text-emerald-900 text-[28px] leading-[44.8px] outline-[3px] no-underline md:text-[38.4px] md:leading-[61.44px]">
          {t("destinationsSection.heading.highlight")}
        </span>
        <br className="box-border caret-transparent text-[28px] leading-[44.8px] outline-[3px] no-underline md:text-[38.4px] md:leading-[61.44px]" />
        {t("destinationsSection.heading.part2")}
      </h2>
      <p className="box-border caret-transparent text-stone-500 leading-7 max-w-[416px] min-h-0 min-w-0 outline-[3px] no-underline mb-8 md:min-h-[auto] md:min-w-[auto]">
        {t("destinationsSection.description")}
      </p>
      <a
        href="https://wa.me/966112398888"
        className="bg-orange-400 box-border caret-transparent text-white inline-block text-sm font-semibold leading-5 max-w-[135px] min-h-0 min-w-0 outline-[3px] no-underline px-7 py-3 rounded-lg md:block md:min-h-[auto] md:min-w-[auto]"
      >
        {t("destinationsSection.bookNow")}
      </a>
    </div>
  );
};
