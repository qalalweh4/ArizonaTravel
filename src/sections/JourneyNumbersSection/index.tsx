import { StatCard } from "@/sections/JourneyNumbersSection/components/StatCard";
import { useLanguage } from "@/i18n/LanguageContext";

export const JourneyNumbersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-12 font-cairo md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="[align-items:normal] box-border caret-transparent gap-x-12 flex flex-col outline-[3px] gap-y-12 no-underline md:items-center md:gap-x-20 md:flex-row md:gap-y-20">
          <div className="box-border caret-transparent flex flex-col shrink min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:shrink-0 md:w-[45%]">
            <p className="box-border caret-transparent text-slate-50 font-extrabold tracking-tight text-4xl leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4 md:text-5xl md:leading-[60px]">
              {t("journeyNumbersSection.headingPrefix")}
              <br className="box-border caret-transparent text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]" />
              <span className="box-border caret-transparent text-brand-600 text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]">
                {t("journeyNumbersSection.headingHighlight")}
              </span>
            </p>
            <p className="box-border caret-transparent text-slate-600 leading-[26px] max-w-md min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-8">
              {t("journeyNumbersSection.description")}
            </p>
            <a
              href="https://wa.me/966541272537"
              className="bg-sunset-500 box-border caret-transparent text-white font-semibold block text-sm leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-fit px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors"
            >
              {t("journeyNumbersSection.cta")}
            </a>
          </div>
          <div className="box-border caret-transparent gap-x-4 grid shrink grid-cols-[repeat(2,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline w-full md:shrink-0 md:w-[55%]">
            <StatCard value={t("journeyNumbersSection.stat1.value")} label={t("journeyNumbersSection.stat1.label")} />
            <StatCard value={t("journeyNumbersSection.stat2.value")} label={t("journeyNumbersSection.stat2.label")} />
            <StatCard value={t("journeyNumbersSection.stat3.value")} label={t("journeyNumbersSection.stat3.label")} />
            <StatCard value={t("journeyNumbersSection.stat4.value")} label={t("journeyNumbersSection.stat4.label")} />
          </div>
        </div>
      </div>
    </section>
  );
};
