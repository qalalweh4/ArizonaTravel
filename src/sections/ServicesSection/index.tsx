import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { ServicesCarouselControls } from "@/sections/ServicesSection/components/ServicesCarouselControls";
import { useLanguage } from "@/i18n/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline py-12 font-cairo md:py-20">
      <div className="box-border caret-transparent max-w-[1440px] outline-[3px] no-underline mx-auto px-4 md:px-12">
        <div className="box-border caret-transparent outline-[3px] no-underline mb-10">
          <h2 className="box-border caret-transparent text-slate-50 text-3xl font-extrabold tracking-tight leading-[37.5px] outline-[3px] text-center no-underline mb-2 py-0 md:text-4xl md:leading-[45px] md:pt-[18px] md:pb-2.5">
            {t("servicesSection.heading")}
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-6 flex outline-[3px] gap-y-6 scroll-smooth no-underline overflow-auto pb-2">
          <ServiceCard
            title={t("servicesSection.card1.title")}
            subtitle={t("servicesSection.card1.subtitle")}
            description={t("servicesSection.card1.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card2.title")}
            subtitle={t("servicesSection.card2.subtitle")}
            description={t("servicesSection.card2.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card3.title")}
            subtitle={t("servicesSection.card3.subtitle")}
            description={t("servicesSection.card3.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card4.title")}
            subtitle={t("servicesSection.card4.subtitle")}
            description={t("servicesSection.card4.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card5.title")}
            subtitle={t("servicesSection.card5.subtitle")}
            description={t("servicesSection.card5.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card6.title")}
            subtitle={t("servicesSection.card6.subtitle")}
            description={t("servicesSection.card6.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
          <ServiceCard
            title={t("servicesSection.card7.title")}
            subtitle={t("servicesSection.card7.subtitle")}
            description={t("servicesSection.card7.description")}
            href="/en/about"
            linkText={t("servicesSection.linkText")}
          />
        </div>
        <ServicesCarouselControls />
      </div>
    </section>
  );
};
