import { FeatureItem } from "@/sections/WhyChooseSection/components/FeatureItem";
import { ReasonItem } from "@/sections/WhyChooseSection/components/ReasonItem";
import { useLanguage } from "@/i18n/LanguageContext";

export const WhyChooseSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline pt-6 pb-10 font-cairo md:pt-10 md:pb-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="[align-items:normal] box-border caret-transparent gap-x-12 flex flex-col outline-[3px] gap-y-12 no-underline md:items-start md:gap-x-20 md:flex-row md:gap-y-20">
          <div className="box-border caret-transparent shrink min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:shrink-0 md:w-[42%]">
            <p className="box-border caret-transparent text-zinc-900 text-4xl font-bold leading-[45px] outline-[3px] no-underline mb-8 md:text-5xl md:leading-[60px]">
              {t("whyChooseSection.headingPrefix")}
              <br className="box-border caret-transparent text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]" />
              <span className="box-border caret-transparent text-teal-500 text-4xl leading-[57.6px] outline-[3px] no-underline md:text-5xl md:leading-[76.8px]">
                {t("whyChooseSection.headingHighlight")}
              </span>
            </p>
            <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-6 no-underline">
              <FeatureItem
                iconVariant="font-black before:font-black"
                label={t("whyChooseSection.feature1")}
              />
              <FeatureItem
                iconVariant="font-black before:font-black"
                label={t("whyChooseSection.feature2")}
              />
              <FeatureItem
                iconVariant="font-black before:font-black"
                label={t("whyChooseSection.feature3")}
              />
              <FeatureItem
                iconVariant="before:font-normal"
                label={t("whyChooseSection.feature4")}
              />
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-0 flex flex-col shrink min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 no-underline w-full md:shrink-0 md:w-[58%]">
            <ReasonItem
              number={t("whyChooseSection.reason1.number")}
              title={t("whyChooseSection.reason1.title")}
              description={t("whyChooseSection.reason1.description")}
              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline border-[lab(91.6229_-0.159115_-2.26791)] py-6 border-b border-solid"
            />
            <ReasonItem
              number={t("whyChooseSection.reason2.number")}
              title={t("whyChooseSection.reason2.title")}
              description={t("whyChooseSection.reason2.description")}
              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline border-[lab(91.6229_-0.159115_-2.26791)] py-6 border-b border-solid"
            />
            <ReasonItem
              number={t("whyChooseSection.reason3.number")}
              title={t("whyChooseSection.reason3.title")}
              description={t("whyChooseSection.reason3.description")}
              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline border-[lab(91.6229_-0.159115_-2.26791)] py-6 border-b border-solid"
            />
            <ReasonItem
              number={t("whyChooseSection.reason4.number")}
              title={t("whyChooseSection.reason4.title")}
              description={t("whyChooseSection.reason4.description")}
              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline py-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
