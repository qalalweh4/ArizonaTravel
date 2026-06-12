import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const jobKeys = ["job1", "job2", "job3", "job4"];

export const CareersPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-700" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-4xl font-bold leading-tight md:text-6xl">
            {t("careers.hero.title")}
          </h1>
          <p className="text-stone-100 text-base leading-7 mt-4 md:text-2xl md:leading-9">
            {t("careers.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <p className="text-stone-600 text-base leading-8 md:text-lg max-w-4xl">
            {t("careers.intro")}
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-5 md:gap-7">
            {jobKeys.map((jobKey) => (
              <article
                key={jobKey}
                className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8"
              >
                <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
                  {t(`careers.jobs.${jobKey}.title`)}
                </h2>
                <p className="text-stone-500 text-sm mt-2 md:text-base">
                  {t(`careers.jobs.${jobKey}.location`)}
                </p>
                <p className="text-orange-500 text-sm font-semibold mt-2 md:text-base">
                  {t(`careers.jobs.${jobKey}.type`)}
                </p>
                <p className="text-stone-700 text-base leading-7 mt-4 md:text-lg md:leading-8">
                  {t(`careers.jobs.${jobKey}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h3 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("careers.cta.title")}
          </h3>
          <p className="text-stone-600 text-base leading-7 mt-4 md:text-lg">
            {t("careers.cta.description")}
          </p>
          <a
            href="mailto:info@travelgateksa.com"
            className="inline-block bg-orange-400 text-white text-sm font-semibold mt-6 px-7 py-3 rounded-lg"
          >
            info@travelgateksa.com
          </a>
        </div>
      </section>

      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
