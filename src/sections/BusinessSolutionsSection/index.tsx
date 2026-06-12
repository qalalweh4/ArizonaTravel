import { useLanguage } from "@/i18n/LanguageContext";

export const BusinessSolutionsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-6 font-cairo md:py-10">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="box-border caret-transparent min-h-[500px] outline-[3px] relative no-underline overflow-hidden rounded-2xl">
          <img
            alt={t("businessSolutionsSection.imageAlt")}
            sizes="(max-width: 1280px) 100vw, 1280px"
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/261.jpg"
            className="box-border text-transparent h-full max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0"
          />
          <div className="bg-stone-950/60 box-border caret-transparent outline-[3px] absolute no-underline inset-0"></div>
          <div className="box-border caret-transparent flex flex-col justify-end outline-[3px] absolute no-underline z-10 p-4 inset-0 md:p-7">
            <div className="box-border caret-transparent max-w-2xl min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <h2 className="box-border caret-transparent text-white text-3xl font-bold leading-[37.5px] outline-[3px] text-center no-underline mb-4 py-0 md:text-5xl md:leading-[60px] md:pt-[18px] md:pb-2.5">
                {t("businessSolutionsSection.heading")}
              </h2>
              <p className="box-border caret-transparent text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] leading-[26px] max-w-xl outline-[3px] no-underline mb-7">
                {t("businessSolutionsSection.description")}
              </p>
              <a
                href="https://wa.me/966112398888"
                className="bg-teal-500 box-border caret-transparent text-white inline-block text-sm font-semibold leading-5 outline-[3px] no-underline px-6 py-3 rounded-lg"
              >
                {t("businessSolutionsSection.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
