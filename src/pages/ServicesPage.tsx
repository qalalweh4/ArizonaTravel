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
          className="bg-stone-50 border border-stone-200 rounded-2xl p-5"
        >
          <h3 className="text-zinc-900 text-xl font-bold">
            {t(`${namespace}.${key}.title`)}
          </h3>
          <p className="text-stone-700 text-sm leading-8 mt-3">
            {t(`${namespace}.${key}.description`)}
          </p>
          <a
            href="/en/contactus"
            className="inline-block mt-5 bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-lg"
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
  <section className="bg-white py-10 md:py-14">
    <div className="max-w-[1200px] mx-auto px-4 md:px-12">
      <h2 className="text-zinc-900 text-2xl font-bold leading-tight md:text-3xl">
        {title}
      </h2>
      <p className="text-stone-700 text-base leading-8 mt-5">{intro}</p>
      {points ? (
        <ul className="mt-5 space-y-2 list-disc pl-5 text-stone-700 text-base leading-8">
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

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-orange-500" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-bold leading-tight md:text-5xl max-w-4xl">
            {t("services.hero.title")}
          </h1>
          <p className="text-stone-100 text-base leading-8 mt-5 md:text-lg md:leading-9 max-w-4xl">
            {t("services.hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/en/packages"
              className="bg-orange-400 text-white text-sm font-semibold px-6 py-3 rounded-lg"
            >
              {t("services.hero.planTrip")}
            </a>
            <a
              href="/en/contactus"
              className="bg-white/95 text-zinc-900 text-sm font-semibold px-6 py-3 rounded-lg"
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

      <section className="bg-stone-50 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("services.core.heading")}
          </h2>
          <p className="text-stone-700 text-base leading-8 mt-5">
            {t("services.core.intro")}
          </p>
          <ServiceCardGrid items={coreServiceKeys} namespace="services.core.items" />
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("services.visa.heading")}
          </h2>
          <p className="text-stone-700 text-base leading-8 mt-5">
            {t("services.visa.intro")}
          </p>
          <ServiceCardGrid items={visaServiceKeys} namespace="services.visa.items" />
        </div>
      </section>

      <section className="bg-stone-50 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("services.itinerary.heading")}
          </h2>
          <div className="space-y-3 mt-5 text-stone-700 text-base leading-8">
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

      <section className="bg-stone-50 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("services.travelerTypes.heading")}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
            {travelerTypeKeys.map((key) => (
              <article
                key={key}
                className="bg-white border border-stone-200 rounded-2xl p-5"
              >
                <h3 className="text-zinc-900 text-xl font-bold">
                  {t(`services.travelerTypes.items.${key}.title`)}
                </h3>
                <p className="text-stone-700 text-sm leading-8 mt-3">
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

      <section className="bg-stone-50 py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
              {t("services.cta.heading")}
            </h2>
            <p className="text-stone-700 text-base leading-8 mt-4">
              {t("services.cta.paragraph")}
            </p>
            <a
              href="/en/contactus"
              className="inline-block mt-6 bg-orange-400 text-white text-sm font-semibold px-6 py-3 rounded-lg"
            >
              {t("services.cta.contactTeam")}
            </a>

            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
              <div className="rounded-xl border border-stone-200 p-4">
                <h3 className="text-zinc-900 font-bold">
                  {t("services.cta.location.title")}
                </h3>
                <p className="text-stone-700 text-sm mt-2 leading-7">
                  {t("services.cta.location.address")}
                </p>
              </div>
              <a
                href="tel:+966112398888"
                className="rounded-xl border border-stone-200 p-4 block"
              >
                <h3 className="text-zinc-900 font-bold">
                  {t("services.cta.phone.title")}
                </h3>
                <p className="text-stone-700 text-sm mt-2">+966112398888</p>
              </a>
              <a
                href="mailto:info@travelgateksa.com"
                className="rounded-xl border border-stone-200 p-4 block"
              >
                <h3 className="text-zinc-900 font-bold">
                  {t("services.cta.email.title")}
                </h3>
                <p className="text-stone-700 text-sm mt-2">
                  info@travelgateksa.com
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
