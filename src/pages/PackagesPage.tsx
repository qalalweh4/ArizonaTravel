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
}: {
  title: string;
  paragraphs: string[];
  points?: string[];
}) => (
  <section className="bg-white py-10 md:py-14">
    <div className="max-w-[1200px] mx-auto px-4 md:px-12">
      <h2 className="text-zinc-900 text-2xl font-bold leading-tight md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 mt-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-stone-700 text-base leading-8">
            {paragraph}
          </p>
        ))}
      </div>
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

export const PackagesPage = () => {
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
            {t("packages.hero.title")}
          </h1>
          <p className="text-stone-100 text-base leading-8 mt-5 md:text-lg md:leading-9 max-w-4xl">
            {t("packages.hero.subtitle")}
          </p>
          <a
            href="/en/contactus"
            className="inline-block mt-7 bg-orange-400 text-white text-sm font-semibold px-6 py-3 rounded-lg"
          >
            {t("packages.hero.cta")}
          </a>
        </div>
      </section>

      <section className="bg-stone-50 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("packages.intro.heading")}
          </h2>
          <div className="space-y-4 mt-5">
            <p className="text-stone-700 text-base leading-8">
              {t("packages.intro.paragraph1")}
            </p>
            <p className="text-stone-700 text-base leading-8">
              {t("packages.intro.paragraph2")}
            </p>
            <p className="text-stone-700 text-base leading-8">
              {t("packages.intro.paragraph3")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/en/contactus"
              className="bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-lg"
            >
              {t("packages.intro.explorePackages")}
            </a>
            <a
              href="/en/contactus"
              className="bg-white border border-stone-300 text-zinc-900 text-sm font-semibold px-5 py-3 rounded-lg"
            >
              {t("packages.intro.contactExperts")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("packages.destinations.heading")}
          </h2>
          <p className="text-stone-700 text-base leading-8 mt-5">
            {t("packages.destinations.paragraph1")}
          </p>
          <p className="text-stone-700 text-base leading-8 mt-4">
            {t("packages.destinations.paragraph2")}
          </p>

          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
            {packageCards.map((card) => (
              <article
                key={card.key}
                className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={t(`packages.destinations.cards.${card.key}.title`)}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-zinc-900 text-xl font-bold">
                    {t(`packages.destinations.cards.${card.key}.title`)}
                  </h3>
                  <p className="text-stone-700 text-sm leading-7 mt-3">
                    {t(`packages.destinations.cards.${card.key}.description`)}
                  </p>
                  <a
                    href="/en/contactus"
                    className="inline-block mt-5 bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-lg"
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

      <section className="bg-stone-50 py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
            {t("packages.cta.heading")}
          </h2>
          <p className="text-stone-700 text-base leading-8 mt-5">
            {t("packages.cta.paragraph1")}
          </p>
          <p className="text-stone-700 text-base leading-8 mt-4">
            {t("packages.cta.paragraph2")}
          </p>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <h3 className="text-zinc-900 font-bold">
                {t("packages.cta.location.title")}
              </h3>
              <p className="text-stone-700 text-sm mt-2 leading-7">
                {t("packages.cta.location.address")}
              </p>
            </div>
            <a
              href="tel:+966112398888"
              className="bg-white border border-stone-200 rounded-xl p-4 block"
            >
              <h3 className="text-zinc-900 font-bold">
                {t("packages.cta.phone.title")}
              </h3>
              <p className="text-stone-700 text-sm mt-2">+966112398888</p>
            </a>
            <a
              href="mailto:info@travelgateksa.com"
              className="bg-white border border-stone-200 rounded-xl p-4 block"
            >
              <h3 className="text-zinc-900 font-bold">
                {t("packages.cta.email.title")}
              </h3>
              <p className="text-stone-700 text-sm mt-2">
                info@travelgateksa.com
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
