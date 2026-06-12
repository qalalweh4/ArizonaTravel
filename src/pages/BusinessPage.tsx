import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { JourneyNumbersSection } from "@/sections/JourneyNumbersSection";
import { SuccessPartnersSection } from "@/sections/SuccessPartnersSection";
import { AccreditationsSection } from "@/sections/AccreditationsSection";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const businessFeatureKeys = ["feature1", "feature2", "feature3", "feature4"];

const businessFaqKeys = ["item1", "item2", "item3", "item4"];
const businessFaqNumbers = ["1.", "2.", "3.", "4."];

const idealForKeys = ["item1", "item2", "item3", "item4", "item5"];

export const BusinessPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://travelgateksa.com/_next/image?url=%2Fassets%2FBusiness%20Hero.jpg&w=2048&q=75"
            alt={t("business.hero.imageAlt")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-900/60" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl font-bold leading-tight md:text-5xl">
              {t("business.hero.title")}
            </h1>
            <p className="text-stone-100 text-base leading-7 mt-5 md:text-xl md:leading-9">
              {t("business.hero.description")}
            </p>
            <a
              href="/en/contactus"
              className="inline-block bg-orange-400 text-white text-sm font-semibold mt-8 px-6 py-3 rounded-lg"
            >
              {t("business.hero.cta")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-3xl font-bold text-center md:text-4xl">
            {t("business.whyChoose.title")}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-4 md:gap-6">
            {businessFeatureKeys.map((featureKey) => (
              <div
                key={featureKey}
                className="bg-stone-50 border border-stone-200 text-zinc-900 text-center text-sm font-semibold px-4 py-6 rounded-xl md:text-base"
              >
                {t(`business.whyChoose.${featureKey}`)}
              </div>
            ))}
          </div>

          <div className="divide-y divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden mt-10 md:mt-12">
            {businessFaqKeys.map((itemKey, index) => (
              <div
                key={itemKey}
                className="bg-white px-5 py-6 md:px-8 md:py-8"
              >
                <h3 className="text-zinc-900 text-lg font-bold md:text-xl">
                  <span className="text-orange-400 mr-2">
                    {businessFaqNumbers[index]}
                  </span>
                  {t(`business.whyChoose.faq.${itemKey}.title`)}
                </h3>
                <p className="text-stone-600 text-base leading-7 mt-3 md:text-lg md:leading-8">
                  {t(`business.whyChoose.faq.${itemKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-3xl font-bold text-center md:text-4xl">
            {t("business.idealFor.title")}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-5 md:gap-6">
            {idealForKeys.map((itemKey) => (
              <div
                key={itemKey}
                className="bg-white border border-stone-200 rounded-xl text-zinc-900 text-center text-sm font-semibold px-4 py-6 md:text-base"
              >
                {t(`business.idealFor.${itemKey}`)}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/en/contactus"
              className="inline-block bg-zinc-900 text-white text-sm font-semibold px-6 py-3 rounded-lg"
            >
              {t("business.idealFor.cta")}
            </a>
          </div>
        </div>
      </section>

      <JourneyNumbersSection />
      <SuccessPartnersSection />
      <AccreditationsSection />
      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
