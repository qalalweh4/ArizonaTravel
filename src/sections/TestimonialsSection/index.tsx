import { TestimonialColumn } from "@/sections/TestimonialsSection/components/TestimonialColumn";
import { useLanguage } from "@/i18n/LanguageContext";

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-10 font-cairo md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="items-center box-border caret-transparent flex flex-col outline-[3px] text-center no-underline mb-12">
          <div className="items-center bg-teal-500 box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-12 mb-5 rounded-lg">
            <i className="box-border caret-transparent text-white block text-xl font-black leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[25px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          </div>
          <h2 className="box-border caret-transparent text-zinc-900 text-3xl font-bold leading-9 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-3 py-0 md:text-4xl md:leading-10 md:pt-[18px] md:pb-2.5">
            {t("testimonialsSection.heading")}
          </h2>
          <p className="box-border caret-transparent text-orange-400 font-medium leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4">
            {t("testimonialsSection.subheading")}
          </p>
        </div>
        <div className="[align-items:normal] box-border caret-transparent gap-x-5 flex flex-col flex-wrap outline-[3px] gap-y-5 no-underline md:items-start md:flex-row md:flex-nowrap">
          <TestimonialColumn
            testimonials={[
              {
                title: t("testimonialsSection.testimonial1.title"),
                testimonial: t("testimonialsSection.testimonial1.quote"),
                authorName: t("testimonialsSection.testimonial1.author"),
                reviewLabel: t("testimonialsSection.testimonial1.reviewLabel"),
              },
              {
                title: t("testimonialsSection.testimonial2.title"),
                testimonial: t("testimonialsSection.testimonial2.quote"),
                authorName: t("testimonialsSection.testimonial2.author"),
                reviewLabel: t("testimonialsSection.testimonial2.reviewLabel"),
              },
            ]}
          />
          <TestimonialColumn
            className="pt-0 md:pt-10"
            testimonials={[
              {
                title: t("testimonialsSection.testimonial3.title"),
                testimonial: t("testimonialsSection.testimonial3.quote"),
                authorName: t("testimonialsSection.testimonial3.author"),
                reviewLabel: t("testimonialsSection.testimonial3.reviewLabel"),
              },
              {
                title: t("testimonialsSection.testimonial4.title"),
                testimonial: t("testimonialsSection.testimonial4.quote"),
                authorName: t("testimonialsSection.testimonial4.author"),
                reviewLabel: t("testimonialsSection.testimonial4.reviewLabel"),
              },
            ]}
          />
          <TestimonialColumn
            className="box-border caret-transparent gap-x-5 flex flex-col shrink min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 no-underline w-full md:shrink-0 md:w-[33.333%]"
            testimonials={[
              {
                title: t("testimonialsSection.testimonial5.title"),
                testimonial: t("testimonialsSection.testimonial5.quote"),
                authorName: t("testimonialsSection.testimonial5.author"),
                reviewLabel: t("testimonialsSection.testimonial5.reviewLabel"),
              },
              {
                title: t("testimonialsSection.testimonial6.title"),
                testimonial: t("testimonialsSection.testimonial6.quote"),
                authorName: t("testimonialsSection.testimonial6.author"),
                reviewLabel: t("testimonialsSection.testimonial6.reviewLabel"),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
