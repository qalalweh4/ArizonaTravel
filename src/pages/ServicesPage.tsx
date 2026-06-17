import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const coreServiceKeys = [
  "flightBooking",
  "hotelBooking",
  "cruiseTrips",
  "carRental",
  "travelInsurance",
];

const visaServiceKeys = ["visaAssistance", "schengenVisa"];

const travelerTypeKeys = ["individual", "families", "business"];

const ServiceCardGrid = ({
  items,
  namespace,
  columns = "md:grid-cols-2",
}: {
  items: string[];
  namespace: string;
  columns?: string;
}) => {
  const { t } = useLanguage();

  return (
    <div className={`grid grid-cols-1 gap-5 mt-8 ${columns}`}>
      {items.map((key) => (
        <article
          key={key}
          className="bg-slate-900 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-5"
        >
          <h3 className="text-slate-50 text-xl font-bold">
            {t(`${namespace}.${key}.title`)}
          </h3>
          <p className="text-slate-300 text-sm leading-8 mt-3">
            {t(`${namespace}.${key}.description`)}
          </p>
          <a
            href="/en/contactus"
            className="inline-block mt-5 bg-sunset-500 text-white font-semibold px-4 py-2 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
          >
            {t("services.core.viewService")}
          </a>
        </article>
      ))}
    </div>
  );
};

const ContentSection = ({
  title,
  intro,
  points,
}: {
  title: string;
  intro: string;
  points?: string[];
}) => (
  <section className="bg-slate-950 py-12 md:py-20">
    <div className="max-w-[1200px] mx-auto px-4 md:px-12">
      <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight leading-tight md:text-3xl">
        {title}
      </h2>
      <p className="text-slate-300 text-base leading-8 mt-5">{intro}</p>
      {points ? (
        <ul className="mt-5 space-y-2 list-disc pl-5 text-slate-300 text-base leading-8">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </section>
);

export const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight md:text-5xl max-w-4xl">
            {t("services.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-8 mt-5 md:text-lg md:leading-9 max-w-4xl">
            {t("services.hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/en/packages"
              className="bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
            >
              {t("services.hero.planTrip")}
            </a>
            <a
              href="/en/contactus"
              className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              {t("services.hero.contactExperts")}
            </a>
          </div>
        </div>
      </section>

      <ContentSection
        title={t("services.about.title")}
        intro={t("services.about.intro")}
      />

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("services.core.heading")}
          </h2>
          <p className="text-slate-300 text-base leading-8 mt-5">
            {t("services.core.intro")}
          </p>
          <ServiceCardGrid items={coreServiceKeys} namespace="services.core.items" />
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("services.visa.heading")}
          </h2>
          <p className="text-slate-300 text-base leading-8 mt-5">
            {t("services.visa.intro")}
          </p>
          <ServiceCardGrid items={visaServiceKeys} namespace="services.visa.items" />
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("services.itinerary.heading")}
          </h2>
          <div className="space-y-3 mt-5 text-slate-300 text-base leading-8">
            <p>{t("services.itinerary.paragraph1")}</p>
            <p>{t("services.itinerary.paragraph2")}</p>
            <p>{t("services.itinerary.paragraph3")}</p>
          </div>
        </div>
      </section>

      <ContentSection
        title={t("services.integrated.heading")}
        intro={t("services.integrated.intro")}
        points={[
          t("services.integrated.points.point1"),
          t("services.integrated.points.point2"),
          t("services.integrated.points.point3"),
          t("services.integrated.points.point4"),
          t("services.integrated.points.point5"),
          t("services.integrated.points.point6"),
          t("services.integrated.points.point7"),
          t("services.integrated.points.point8"),
        ]}
      />

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("services.travelerTypes.heading")}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
            {travelerTypeKeys.map((key) => (
              <article
                key={key}
                className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-5"
              >
                <h3 className="text-slate-50 text-xl font-bold">
                  {t(`services.travelerTypes.items.${key}.title`)}
                </h3>
                <p className="text-slate-300 text-sm leading-8 mt-3">
                  {t(`services.travelerTypes.items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        title={t("services.trust.heading")}
        intro={t("services.trust.intro")}
        points={[
          t("services.trust.points.point1"),
          t("services.trust.points.point2"),
          t("services.trust.points.point3"),
          t("services.trust.points.point4"),
          t("services.trust.points.point5"),
          t("services.trust.points.point6"),
        ]}
      />

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12">
          <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 p-6 md:p-8">
            <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
              {t("services.cta.heading")}
            </h2>
            <p className="text-slate-300 text-base leading-8 mt-4">
              {t("services.cta.paragraph")}
            </p>
            <a
              href="/en/contactus"
              className="inline-block mt-6 bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
            >
              {t("services.cta.contactTeam")}
            </a>

            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("services.cta.location.title")}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-7">
                  {t("services.cta.location.address")}
                </p>
              </div>
              <a
                href="tel:+966541272537"
                className="rounded-xl border border-slate-800 p-4 block hover:shadow-soft transition-shadow"
              >
                <h3 className="text-slate-50 font-bold">
                  {t("services.cta.phone.title")}
                </h3>
                <p className="text-slate-300 text-sm mt-2">+966 54 127 2537</p>
              </a>
              <a
                href="mailto:info@arizonatravelsa.com"
                className="rounded-xl border border-slate-800 p-4 block hover:shadow-soft transition-shadow"
              >
                <h3 className="text-slate-50 font-bold">
                  {t("services.cta.email.title")}
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  info@arizonatravelsa.com
                </p>
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
