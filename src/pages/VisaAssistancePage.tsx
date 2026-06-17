import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

type VisaType = {
  key: string;
  route: string;
  flag: string;
};

const visaTypes: VisaType[] = [
  {
    key: "chinese",
    route: "/en/services/visa-assistance/chineesevisa",
    flag: "🇨🇳",
  },
  {
    key: "schengen",
    route: "/en/services/visa-assistance/schengen-visa",
    flag: "🇪🇺",
  },
  {
    key: "turkish",
    route: "/en/services/visa-assistance/turkishvisa",
    flag: "🇹🇷",
  },
  {
    key: "russian",
    route: "/en/services/visa-assistance/russianvisa",
    flag: "🇷🇺",
  },
  {
    key: "canadian",
    route: "/en/services/visa-assistance/canadianvisa",
    flag: "🇨🇦",
  },
  {
    key: "american",
    route: "/en/services/visa-assistance/americanvisa",
    flag: "🇺🇸",
  },
  {
    key: "british",
    route: "/en/services/visa-assistance/britishvisa",
    flag: "🇬🇧",
  },
];

const Section = ({
  title,
  paragraphs,
  points,
  bgClassName = "bg-slate-950",
}: {
  title: string;
  paragraphs: string[];
  points?: string[];
  bgClassName?: string;
}) => (
  <section className={`${bgClassName} py-12 md:py-20`}>
    <div className="max-w-[1200px] mx-auto px-4 md:px-12">
      <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      <div className="space-y-4 mt-5 text-slate-300 text-base leading-8">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
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

export const VisaAssistancePage = () => {
  const { t } = useLanguage();

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight md:text-5xl max-w-4xl">
            {t("visaAssistance.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-8 mt-5 md:text-lg md:leading-9 max-w-4xl">
            {t("visaAssistance.hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#visa-types"
              className="bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
            >
              {t("visaAssistance.hero.applyVisa")}
            </a>
            <a
              href="/en/contactus"
              className="border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              {t("visaAssistance.hero.contactExperts")}
            </a>
          </div>
        </div>
      </section>

      <section id="visa-types" className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
            {t("visaAssistance.visaTypes.heading")}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {visaTypes.map((visaType) => (
              <article
                key={visaType.key}
                className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-slate-50 text-xl font-bold">
                    {t(`visaAssistance.visaTypes.items.${visaType.key}.title`)}
                  </h3>
                  <a
                    href={visaType.route}
                    className="inline-block mt-4 bg-sunset-500 text-white font-semibold px-4 py-2 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
                  >
                    {t("visaAssistance.visaTypes.applyNow")}
                  </a>
                </div>
                <span className="text-4xl" aria-hidden="true">
                  {visaType.flag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        title={t("visaAssistance.sections.simplified.title")}
        paragraphs={[
          t("visaAssistance.sections.simplified.paragraph1"),
          t("visaAssistance.sections.simplified.paragraph2"),
          t("visaAssistance.sections.simplified.paragraph3"),
          t("visaAssistance.sections.simplified.paragraph4"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.international.title")}
        bgClassName="bg-slate-900"
        paragraphs={[
          t("visaAssistance.sections.international.paragraph1"),
          t("visaAssistance.sections.international.paragraph2"),
          t("visaAssistance.sections.international.paragraph3"),
        ]}
        points={[
          t("visaAssistance.sections.international.points.point1"),
          t("visaAssistance.sections.international.points.point2"),
          t("visaAssistance.sections.international.points.point3"),
          t("visaAssistance.sections.international.points.point4"),
          t("visaAssistance.sections.international.points.point5"),
          t("visaAssistance.sections.international.points.point6"),
          t("visaAssistance.sections.international.points.point7"),
          t("visaAssistance.sections.international.points.point8"),
          t("visaAssistance.sections.international.points.point9"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.byType.title")}
        paragraphs={[
          t("visaAssistance.sections.byType.paragraph1"),
          t("visaAssistance.sections.byType.paragraph2"),
        ]}
        points={[
          t("visaAssistance.sections.byType.points.point1"),
          t("visaAssistance.sections.byType.points.point2"),
          t("visaAssistance.sections.byType.points.point3"),
          t("visaAssistance.sections.byType.points.point4"),
          t("visaAssistance.sections.byType.points.point5"),
          t("visaAssistance.sections.byType.points.point6"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.support.title")}
        bgClassName="bg-slate-900"
        paragraphs={[
          t("visaAssistance.sections.support.paragraph1"),
          t("visaAssistance.sections.support.paragraph2"),
        ]}
        points={[
          t("visaAssistance.sections.support.points.point1"),
          t("visaAssistance.sections.support.points.point2"),
          t("visaAssistance.sections.support.points.point3"),
          t("visaAssistance.sections.support.points.point4"),
          t("visaAssistance.sections.support.points.point5"),
          t("visaAssistance.sections.support.points.point6"),
          t("visaAssistance.sections.support.points.point7"),
          t("visaAssistance.sections.support.points.point8"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.schengen.title")}
        paragraphs={[
          t("visaAssistance.sections.schengen.paragraph1"),
          t("visaAssistance.sections.schengen.paragraph2"),
          t("visaAssistance.sections.schengen.paragraph3"),
        ]}
        points={[
          t("visaAssistance.sections.schengen.points.point1"),
          t("visaAssistance.sections.schengen.points.point2"),
          t("visaAssistance.sections.schengen.points.point3"),
          t("visaAssistance.sections.schengen.points.point4"),
          t("visaAssistance.sections.schengen.points.point5"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.integrated.title")}
        bgClassName="bg-slate-900"
        paragraphs={[
          t("visaAssistance.sections.integrated.paragraph1"),
          t("visaAssistance.sections.integrated.paragraph2"),
        ]}
        points={[
          t("visaAssistance.sections.integrated.points.point1"),
          t("visaAssistance.sections.integrated.points.point2"),
          t("visaAssistance.sections.integrated.points.point3"),
          t("visaAssistance.sections.integrated.points.point4"),
        ]}
      />

      <Section
        title={t("visaAssistance.sections.trust.title")}
        paragraphs={[
          t("visaAssistance.sections.trust.paragraph1"),
          t("visaAssistance.sections.trust.paragraph2"),
        ]}
        points={[
          t("visaAssistance.sections.trust.points.point1"),
          t("visaAssistance.sections.trust.points.point2"),
          t("visaAssistance.sections.trust.points.point3"),
          t("visaAssistance.sections.trust.points.point4"),
          t("visaAssistance.sections.trust.points.point5"),
        ]}
      />

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12">
          <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 p-6 md:p-8">
            <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
              {t("visaAssistance.cta.heading")}
            </h2>
            <p className="text-slate-300 text-base leading-8 mt-4">
              {t("visaAssistance.cta.paragraph1")}
            </p>
            <p className="text-slate-300 text-base leading-8 mt-3">
              {t("visaAssistance.cta.paragraph2")}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#visa-types"
                className="bg-sunset-500 text-white font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-sunset-600 transition-colors text-sm"
              >
                {t("visaAssistance.cta.applyVisa")}
              </a>
              <a
                href="/en/contactus"
                className="border-2 border-brand-600 text-brand-600 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors"
              >
                {t("visaAssistance.cta.contactExperts")}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-7 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 shadow-soft p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("visaAssistance.cta.location.title")}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-7">
                  {t("visaAssistance.cta.location.address")}
                </p>
              </div>
              <a
                href="tel:+966541272537"
                className="rounded-xl border border-slate-800 shadow-soft hover:shadow-card transition-shadow p-4 block"
              >
                <h3 className="text-slate-50 font-bold">
                  {t("visaAssistance.cta.phone.title")}
                </h3>
                <p className="text-slate-300 text-sm mt-2">+966 54 127 2537</p>
              </a>
              <a
                href="mailto:info@arizonatravelsa.com"
                className="rounded-xl border border-slate-800 shadow-soft hover:shadow-card transition-shadow p-4 block"
              >
                <h3 className="text-slate-50 font-bold">
                  {t("visaAssistance.cta.email.title")}
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
