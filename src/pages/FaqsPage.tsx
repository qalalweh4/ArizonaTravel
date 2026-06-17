import { useState } from "react";
import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

const faqItemKeys = [
  "faqs.items.question1",
  "faqs.items.question2",
  "faqs.items.question3",
  "faqs.items.question4",
  "faqs.items.question5",
  "faqs.items.question6",
  "faqs.items.question7",
  "faqs.items.question8",
];

export const FaqsPage = () => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sunset-500/30 blur-3xl" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight md:text-5xl">
            {t("faqs.hero.title")}
          </h1>
          <p className="text-white/80 text-base leading-8 mt-5 md:text-xl md:leading-9 max-w-3xl">
            {t("faqs.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12">
          <div className="space-y-4">
            {faqItemKeys.map((itemKey, index) => {
              const isOpen = openItem === index;

              return (
                <article
                  key={itemKey}
                  className={`border rounded-2xl overflow-hidden transition-colors ${
                    isOpen
                      ? "border-sunset-500 bg-slate-800"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-slate-50 text-base font-bold md:text-lg">
                      {t(`${itemKey}.q`)}
                    </span>
                    <span className="text-sunset-500 text-xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <p className="text-slate-300 text-sm leading-8 md:text-base">
                        {t(`${itemKey}.a`)}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12">
          <div className="bg-slate-950 rounded-2xl shadow-card border border-slate-800 p-6 md:p-8">
            <h2 className="text-slate-50 text-2xl font-extrabold tracking-tight md:text-3xl">
              {t("faqs.contact.heading")}
            </h2>
            <p className="text-slate-300 text-base leading-8 mt-4">
              {t("faqs.contact.subheading")}
            </p>

            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
              <a
                href="tel:+966541272537"
                className="rounded-xl bg-slate-900 px-5 py-4 text-slate-50 font-semibold hover:bg-slate-800 transition-colors"
              >
                +966 54 127 2537
              </a>
              <a
                href="mailto:info@arizonatravelsa.com"
                className="rounded-xl bg-slate-900 px-5 py-4 text-slate-50 font-semibold hover:bg-slate-800 transition-colors"
              >
                info@arizonatravelsa.com
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("faqs.contact.about.title")}
                </h3>
                <p className="text-slate-300 text-sm leading-7 mt-2">
                  {t("faqs.contact.about.description")}
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 p-4">
                <h3 className="text-slate-50 font-bold">
                  {t("faqs.contact.links.title")}
                </h3>
                <div className="mt-2 space-y-2 text-sm">
                  <a
                    href="/en/about"
                    className="block text-brand-600 font-semibold"
                  >
                    {t("faqs.contact.links.about")}
                  </a>
                  <a
                    href="/en/exclusive-offers"
                    className="block text-brand-600 font-semibold"
                  >
                    {t("faqs.contact.links.exclusiveOffers")}
                  </a>
                  <a
                    href="/en/contactus"
                    className="block text-brand-600 font-semibold"
                  >
                    {t("faqs.contact.links.contact")}
                  </a>
                </div>
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
