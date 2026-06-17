import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

type PackageCardData = {
  key: string;
  image: string;
};

const packageCards: PackageCardData[] = [
  {
    key: "europe",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fpoland.jpg&w=2048&q=75",
  },
  {
    key: "eastEurope",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Frussia.jpg&w=2048&q=75",
  },
  {
    key: "arabCountries",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2Fsaudi.jpg&w=2048&q=75",
  },
  {
    key: "eastAsia",
    image:
      "https://travelgateksa.com/_next/image?url=%2Fassets%2FThailand45.jpg&w=2048&q=75",
  },
];

const InfoSection = ({
  title,
  paragraphs,
  points,
  alt = false,
}: {
  title: string;
  paragraphs: string[];
  points?: string[];
  alt?: boolean;
}) => (
  <section className={`${alt ? "bg-slate-900" : "bg-slate-950"} py-12 md:py-20`}>
    <div className="max-w-[1200px] mx-auto px-4 md:px-12">
      <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight leading-tight md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 mt-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-slate-300 text-base leading-8">
            {paragraph}
          </p>
        ))}
      </div>
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

export const PackagesPage = () => {
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
            {t("packages.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-8 mt-5 md:text-lg md:leading-9 max-w-4xl">
            {t("packages.hero.subtitle")}
          </p>
          <a
            href="/en/contactus"
            className="inline-block mt-7 bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
          >
            {t("packages.hero.cta")}
          </a>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("packages.intro.heading")}
          </h2>
          <div className="space-y-4 mt-5">
            <p className="text-slate-300 text-base leading-8">
              {t("packages.intro.paragraph1")}
            </p>
            <p className="text-slate-300 text-base leading-8">
              {t("packages.intro.paragraph2")}
            </p>
            <p className="text-slate-300 text-base leading-8">
              {t("packages.intro.paragraph3")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/en/contactus"
              className="bg-sunset-500 text-white font-semibold px-5 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
            >
              {t("packages.intro.explorePackages")}
            </a>
            <a
              href="/en/contactus"
              className="border-2 border-brand-600 text-brand-600 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-brand-50 transition-colors"
            >
              {t("packages.intro.contactExperts")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("packages.destinations.heading")}
          </h2>
          <p className="text-slate-300 text-base leading-8 mt-5">
            {t("packages.destinations.paragraph1")}
          </p>
          <p className="text-slate-300 text-base leading-8 mt-4">
            {t("packages.destinations.paragraph2")}
          </p>

          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
            {packageCards.map((card) => (
              <article
                key={card.key}
                className="bg-slate-900 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={t(`packages.destinations.cards.${card.key}.title`)}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-slate-50 text-xl font-bold">
                    {t(`packages.destinations.cards.${card.key}.title`)}
                  </h3>
                  <p className="text-slate-300 text-sm leading-7 mt-3">
                    {t(`packages.destinations.cards.${card.key}.description`)}
                  </p>
                  <a
                    href="/en/contactus"
                    className="inline-block mt-5 bg-sunset-500 text-white font-semibold px-4 py-2 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
                  >
                    {t("packages.destinations.bookTrip")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InfoSection
        alt
        title={t("packages.sections.global.title")}
        paragraphs={[
          t("packages.sections.global.paragraph1"),
          t("packages.sections.global.paragraph2"),
          t("packages.sections.global.paragraph3"),
        ]}
        points={[
          t("packages.sections.global.points.point1"),
          t("packages.sections.global.points.point2"),
          t("packages.sections.global.points.point3"),
          t("packages.sections.global.points.point4"),
        ]}
      />

      <InfoSection
        title={t("packages.sections.europe.title")}
        paragraphs={[
          t("packages.sections.europe.paragraph1"),
          t("packages.sections.europe.paragraph2"),
          t("packages.sections.europe.paragraph3"),
        ]}
        points={[
          t("packages.sections.europe.points.point1"),
          t("packages.sections.europe.points.point2"),
          t("packages.sections.europe.points.point3"),
          t("packages.sections.europe.points.point4"),
          t("packages.sections.europe.points.point5"),
        ]}
      />

      <InfoSection
        alt
        title={t("packages.sections.asia.title")}
        paragraphs={[
          t("packages.sections.asia.paragraph1"),
          t("packages.sections.asia.paragraph2"),
          t("packages.sections.asia.paragraph3"),
        ]}
        points={[
          t("packages.sections.asia.points.point1"),
          t("packages.sections.asia.points.point2"),
          t("packages.sections.asia.points.point3"),
          t("packages.sections.asia.points.point4"),
        ]}
      />

      <InfoSection
        title={t("packages.sections.family.title")}
        paragraphs={[
          t("packages.sections.family.paragraph1"),
          t("packages.sections.family.paragraph2"),
          t("packages.sections.family.paragraph3"),
        ]}
        points={[
          t("packages.sections.family.points.point1"),
          t("packages.sections.family.points.point2"),
          t("packages.sections.family.points.point3"),
          t("packages.sections.family.points.point4"),
        ]}
      />

      <InfoSection
        alt
        title={t("packages.sections.honeymoon.title")}
        paragraphs={[
          t("packages.sections.honeymoon.paragraph1"),
          t("packages.sections.honeymoon.paragraph2"),
          t("packages.sections.honeymoon.paragraph3"),
        ]}
        points={[
          t("packages.sections.honeymoon.points.point1"),
          t("packages.sections.honeymoon.points.point2"),
          t("packages.sections.honeymoon.points.point3"),
          t("packages.sections.honeymoon.points.point4"),
        ]}
      />

      <InfoSection
        title={t("packages.sections.luxury.title")}
        paragraphs={[
          t("packages.sections.luxury.paragraph1"),
          t("packages.sections.luxury.paragraph2"),
          t("packages.sections.luxury.paragraph3"),
        ]}
        points={[
          t("packages.sections.luxury.points.point1"),
          t("packages.sections.luxury.points.point2"),
          t("packages.sections.luxury.points.point3"),
          t("packages.sections.luxury.points.point4"),
        ]}
      />

      <InfoSection
        alt
        title={t("packages.sections.group.title")}
        paragraphs={[
          t("packages.sections.group.paragraph1"),
          t("packages.sections.group.paragraph2"),
          t("packages.sections.group.paragraph3"),
        ]}
        points={[
          t("packages.sections.group.points.point1"),
          t("packages.sections.group.points.point2"),
          t("packages.sections.group.points.point3"),
          t("packages.sections.group.points.point4"),
        ]}
      />

      <InfoSection
        title={t("packages.sections.integrated.title")}
        paragraphs={[
          t("packages.sections.integrated.paragraph1"),
          t("packages.sections.integrated.paragraph2"),
          t("packages.sections.integrated.paragraph3"),
        ]}
        points={[
          t("packages.sections.integrated.points.point1"),
          t("packages.sections.integrated.points.point2"),
          t("packages.sections.integrated.points.point3"),
          t("packages.sections.integrated.points.point4"),
          t("packages.sections.integrated.points.point5"),
          t("packages.sections.integrated.points.point6"),
          t("packages.sections.integrated.points.point7"),
        ]}
      />

      <InfoSection
        alt
        title={t("packages.sections.trust.title")}
        paragraphs={[
          t("packages.sections.trust.paragraph1"),
          t("packages.sections.trust.paragraph2"),
          t("packages.sections.trust.paragraph3"),
        ]}
        points={[
          t("packages.sections.trust.points.point1"),
          t("packages.sections.trust.points.point2"),
          t("packages.sections.trust.points.point3"),
          t("packages.sections.trust.points.point4"),
          t("packages.sections.trust.points.point5"),
        ]}
      />

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("packages.cta.heading")}
          </h2>
          <p className="text-slate-300 text-base leading-8 mt-5">
            {t("packages.cta.paragraph1")}
          </p>
          <p className="text-slate-300 text-base leading-8 mt-4">
            {t("packages.cta.paragraph2")}
          </p>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
            <div className="bg-slate-900 rounded-xl shadow-card border border-slate-800 p-4">
              <h3 className="text-slate-50 font-bold">
                {t("packages.cta.location.title")}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-7">
                {t("packages.cta.location.address")}
              </p>
            </div>
            <a
              href="tel:+966541272537"
              className="bg-slate-900 rounded-xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-4 block"
            >
              <h3 className="text-slate-50 font-bold">
                {t("packages.cta.phone.title")}
              </h3>
              <p className="text-slate-300 text-sm mt-2">+966 54 127 2537</p>
            </a>
            <a
              href="mailto:info@arizonatravelsa.com"
              className="bg-slate-900 rounded-xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-4 block"
            >
              <h3 className="text-slate-50 font-bold">
                {t("packages.cta.email.title")}
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                info@arizonatravelsa.com
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <RouteAnnouncer />
      <ConsentModal />
    </div>
  );
};
