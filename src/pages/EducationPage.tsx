import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

type Destination = {
  key: string;
  image: string;
  href: string;
};

type Service = {
  key: string;
  hasCta?: boolean;
  ctaHref?: string;
};

const destinations: Destination[] = [
  {
    key: "item1",
    image: "https://flagcdn.com/w1280/gb.png",
    href: "/en/education/uk",
  },
  {
    key: "item2",
    image: "https://flagcdn.com/w1280/de.png",
    href: "/en/education/germany",
  },
  {
    key: "item3",
    image: "https://flagcdn.com/w1280/au.png",
    href: "/en/education/australia",
  },
  {
    key: "item4",
    image: "https://flagcdn.com/w1280/us.png",
    href: "/en/education/usa",
  },
  {
    key: "item5",
    image: "https://flagcdn.com/w1280/ca.png",
    href: "/en/education/canada",
  },
];

const saudiDocumentKeys = ["item1", "item2", "item3", "item4", "item5", "item6"];

const nonSaudiDocumentKeys = ["item1", "item2", "item3", "item4", "item5", "item6"];

const services: Service[] = [
  { key: "service1" },
  { key: "service2" },
  { key: "service3" },
  {
    key: "service4",
    hasCta: true,
    ctaHref: "https://api.whatsapp.com/send?phone=966541272537",
  },
];

export const EducationPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight md:text-5xl">
              {t("education.hero.title")}
            </h1>
            <p className="text-white/80 text-base leading-7 mt-5 md:text-xl md:leading-9">
              {t("education.hero.description")}
            </p>
            <a
              href="#education-services"
              className="inline-block bg-sunset-500 text-white font-semibold mt-8 px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
            >
              {t("education.hero.cta")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight text-center md:text-4xl">
            {t("education.destinations.title")}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {destinations.map((destination) => (
              <article
                key={destination.key}
                className="bg-slate-900 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <img
                  src={destination.image}
                  alt={t(`education.destinations.${destination.key}`)}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-slate-50 text-lg font-bold">
                    {t(`education.destinations.${destination.key}`)}
                  </h3>
                  <a
                    href={destination.href}
                    className="inline-block text-brand-600 text-sm font-semibold mt-3"
                  >
                    {t("education.destinations.cta")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight text-center md:text-4xl">
            {t("education.documents.title")}
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-8">
            <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-6 md:p-8">
              <h3 className="text-slate-50 text-2xl font-bold">
                {t("education.documents.saudis.title")}
              </h3>
              <ul className="list-disc text-slate-300 text-base leading-8 mt-4 pl-5">
                {saudiDocumentKeys.map((itemKey) => (
                  <li key={itemKey}>
                    {t(`education.documents.saudis.${itemKey}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-6 md:p-8">
              <h3 className="text-slate-50 text-2xl font-bold">
                {t("education.documents.nonSaudis.title")}
              </h3>
              <ul className="list-disc text-slate-300 text-base leading-8 mt-4 pl-5">
                {nonSaudiDocumentKeys.map((itemKey) => (
                  <li key={itemKey}>
                    {t(`education.documents.nonSaudis.${itemKey}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education-services" className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight text-center md:text-4xl">
            {t("education.services.title")}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.key}
                className="bg-slate-900 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-6 md:p-8"
              >
                <h3 className="text-slate-50 text-2xl font-bold">
                  {t(`education.services.${service.key}.title`)}
                </h3>
                <p className="text-slate-300 text-base leading-8 mt-4">
                  {t(`education.services.${service.key}.description`)}
                </p>
                {service.hasCta && service.ctaHref ? (
                  <a
                    href={service.ctaHref}
                    className="inline-block bg-sunset-500 text-white font-semibold mt-6 px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
                  >
                    {t(`education.services.${service.key}.cta`)}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 p-6 md:p-10">
            <h2 className="text-slate-50 text-3xl font-extrabold tracking-tight md:text-4xl">
              {t("education.contact.title")}
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3 md:gap-6">
              <div className="bg-slate-900 rounded-xl p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("education.contact.location.title")}
                </h3>
                <p className="text-slate-300 text-sm leading-7 mt-2">
                  {t("education.contact.location.line1")}
                </p>
                <p className="text-slate-300 text-sm leading-7">
                  {t("education.contact.location.line2")}
                </p>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("education.contact.phone.title")}
                </h3>
                <a
                  href="tel:+966541272537"
                  className="text-brand-600 text-sm font-semibold inline-block mt-2"
                >
                  +966 54 127 2537
                </a>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("education.contact.email.title")}
                </h3>
                <a
                  href="mailto:info@arizonatravelsa.com"
                  className="text-brand-600 text-sm font-semibold inline-block mt-2"
                >
                  info@arizonatravelsa.com
                </a>
              </div>
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
