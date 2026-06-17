import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const contactMethodKeys = [
  {
    titleKey: "contactUs.methods.office.title",
    contentKey: "contactUs.methods.office.content",
  },
  {
    titleKey: "contactUs.methods.call.title",
    contentKey: "contactUs.methods.call.content",
    href: "tel:+966541272537",
  },
  {
    titleKey: "contactUs.methods.email.title",
    contentKey: "contactUs.methods.email.content",
    href: "mailto:info@arizonatravelsa.com",
  },
  {
    titleKey: "contactUs.methods.hours.title",
    contentKey: "contactUs.methods.hours.content",
  },
];

export const ContactUsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight md:text-5xl">
            {t("contactUs.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-8 mt-5 md:text-xl md:leading-9 max-w-3xl">
            {t("contactUs.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactMethodKeys.map((method) => (
              <article
                key={method.titleKey}
                className="bg-slate-900 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-5 md:p-6"
              >
                <h2 className="text-slate-50 text-lg font-bold md:text-xl">
                  {t(method.titleKey)}
                </h2>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-brand-600 text-sm font-semibold inline-block mt-3 md:text-base"
                  >
                    {t(method.contentKey)}
                  </a>
                ) : (
                  <p className="text-slate-300 text-sm leading-7 mt-3 md:text-base md:leading-8">
                    {t(method.contentKey)}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8 md:p-8">
            <h3 className="text-slate-50 text-xl font-bold md:text-2xl">
              {t("contactUs.connect.heading")}
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="tel:+966541272537"
                className="inline-block bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
              >
                {t("contactUs.connect.directCall")}
              </a>
              <a
                href="https://wa.me/966541272537"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                {t("contactUs.connect.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
