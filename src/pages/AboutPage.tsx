import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { JourneyNumbersSection } from "@/sections/JourneyNumbersSection";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const aboutFaqKeys = ["item1", "item2", "item3", "item4"];
const aboutFaqNumbers = ["1.", "2.", "3.", "4."];

const aboutFeatureKeys = ["feature1", "feature2", "feature3", "feature4"];

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="bg-slate-950 pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="text-slate-50 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl">
                {t("about.hero.title")}
              </h1>
              <p className="text-slate-300 text-lg leading-8 mt-6">
                {t("about.hero.description")}
              </p>
              <a
                href="/en/exclusive-offers"
                className="inline-block bg-sunset-500 text-white font-semibold mt-8 px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
              >
                {t("about.hero.cta")}
              </a>
            </div>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <img
                src="https://travelgateksa.com/_next/image?url=%2Fassets%2Fplane%20hero.png&w=2048&q=75"
                alt={t("about.hero.imageAlt")}
                className="w-full h-[280px] object-cover md:h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight text-center md:text-4xl">
            {t("about.whyChoose.title")}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-4 md:gap-6">
            {aboutFeatureKeys.map((featureKey) => (
              <div
                key={featureKey}
                className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 text-slate-50 text-center text-sm font-semibold px-4 py-6 md:text-base"
              >
                {t(`about.whyChoose.${featureKey}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight text-center mb-10 md:text-4xl">
            {t("about.faq.title")}
          </h2>
          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl overflow-hidden">
            {aboutFaqKeys.map((itemKey, index) => (
              <div
                key={itemKey}
                className="bg-slate-900 px-5 py-6 md:px-8 md:py-8"
              >
                <h3 className="text-slate-50 text-lg font-bold md:text-xl">
                  <span className="text-sunset-500 mr-2">
                    {aboutFaqNumbers[index]}
                  </span>
                  {t(`about.faq.${itemKey}.title`)}
                </h3>
                <p className="text-slate-300 text-base leading-7 mt-3 md:text-lg md:leading-8">
                  {t(`about.faq.${itemKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneyNumbersSection />
      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
