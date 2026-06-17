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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-4xl font-extrabold tracking-tight leading-tight md:text-6xl">
            {t("careers.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-7 mt-4 md:text-2xl md:leading-9">
            {t("careers.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <p className="text-slate-300 text-base leading-8 md:text-lg max-w-4xl">
            {t("careers.intro")}
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-5 md:gap-7">
            {jobKeys.map((jobKey) => (
              <article
                key={jobKey}
                className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-6 md:p-8"
              >
                <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
                  {t(`careers.jobs.${jobKey}.title`)}
                </h2>
                <p className="text-slate-400 text-sm mt-2 md:text-base">
                  {t(`careers.jobs.${jobKey}.location`)}
                </p>
                <p className="text-sunset-500 text-sm font-semibold mt-2 md:text-base">
                  {t(`careers.jobs.${jobKey}.type`)}
                </p>
                <p className="text-slate-300 text-base leading-7 mt-4 md:text-lg md:leading-8">
                  {t(`careers.jobs.${jobKey}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h3 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("careers.cta.title")}
          </h3>
          <p className="text-slate-300 text-base leading-7 mt-4 md:text-lg">
            {t("careers.cta.description")}
          </p>
          <a
            href="mailto:info@arizonatravelsa.com"
            className="inline-block bg-sunset-500 text-white font-semibold mt-6 px-7 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
          >
            info@arizonatravelsa.com
          </a>
        </div>
      </section>

      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
