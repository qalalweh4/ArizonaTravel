import { useLanguage } from "@/i18n/LanguageContext";

export const TailorMadePackagesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline overflow-hidden py-6 font-cairo md:py-10">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="items-center box-border caret-transparent gap-x-10 flex flex-col outline-[3px] gap-y-10 no-underline md:gap-x-20 md:flex-row md:gap-y-20">
          <div className="items-center box-border caret-transparent flex shrink justify-center min-h-80 min-w-[auto] outline-[3px] relative no-underline w-full md:shrink-0 md:w-6/12">
            <div className="box-border caret-transparent h-72 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-full md:h-[460px]">
              <img
                alt={t("tailorMadePackagesSection.imageAlt")}
                sizes="50vw"
                src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/135.png"
                className="box-border text-transparent h-full max-w-full object-contain outline-[3px] absolute no-underline w-full inset-0"
              />
            </div>
          </div>
          <div className="box-border caret-transparent flex flex-col shrink justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:shrink-0 md:w-6/12">
            <h2 className="box-border caret-transparent text-zinc-900 text-4xl font-bold leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline mb-6 py-0 md:text-5xl md:leading-[60px] md:pt-[18px] md:pb-2.5">
              {t("tailorMadePackagesSection.heading.part1")}
              <br className="box-border caret-transparent text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]" />
              {t("tailorMadePackagesSection.heading.part2")}
              <span className="box-border caret-transparent text-teal-500 text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]">
                {t("tailorMadePackagesSection.heading.highlight")}
              </span>
            </h2>
            <p className="box-border caret-transparent text-stone-500 leading-[26px] max-w-lg min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-8">
              {t("tailorMadePackagesSection.description")}
            </p>
            <a
              href="https://wa.me/966112398888"
              className="bg-orange-400 box-border caret-transparent text-white block text-sm font-semibold leading-5 max-w-[135px] min-h-[auto] min-w-[auto] outline-[3px] no-underline px-7 py-3 rounded-lg"
            >
              {t("tailorMadePackagesSection.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
