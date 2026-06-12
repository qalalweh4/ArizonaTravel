import { Header } from "@/sections/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Footer } from "@/sections/Footer";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { ConsentModal } from "@/components/ConsentModal";
import { useLanguage } from "@/i18n/LanguageContext";

import { useMemo, useState } from "react";

const contactMethodKeys = [
  {
    titleKey: "contactUs.methods.office.title",
    contentKey: "contactUs.methods.office.content",
  },
  {
    titleKey: "contactUs.methods.call.title",
    contentKey: "contactUs.methods.call.content",
    href: "tel:+966112398888",
  },
  {
    titleKey: "contactUs.methods.email.title",
    contentKey: "contactUs.methods.email.content",
    href: "mailto:info@travelgateksa.com",
  },
  {
    titleKey: "contactUs.methods.hours.title",
    contentKey: "contactUs.methods.hours.content",
  },
];

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  destinationOrService: string;
  message: string;
};

export const ContactUsPage = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<ContactFormState>({
    fullName: "",
    email: "",
    phone: "",
    destinationOrService: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Contact request from ${formState.fullName || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Full name: ${formState.fullName || "-"}`,
        `Email: ${formState.email || "-"}`,
        `Phone: ${formState.phone || "-"}`,
        `Destination or service requested: ${formState.destinationOrService || "-"}`,
        "",
        "Message details:",
        formState.message || "-",
      ].join("\n"),
    );

    return `mailto:info@travelgateksa.com?subject=${subject}&body=${body}`;
  }, [formState]);

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFormState((previous) => ({ ...previous, [field]: value }));
    };

  const handleSubmit = () => {
    const hasMinimumData =
      formState.fullName.trim().length > 0 &&
      formState.phone.trim().length > 0 &&
      formState.message.trim().length > 0;

    if (!hasMinimumData) {
      return;
    }

    window.location.href = mailtoHref;
  };

  return (
    <div className="accent-auto box-border caret-transparent text-neutral-800 block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-cairo">
      <Header />
      <MobileNavigation />
      <FloatingContactButtons />

      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-orange-500" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
          <h1 className="text-white text-3xl font-bold leading-tight md:text-5xl">
            {t("contactUs.hero.title")}
          </h1>
          <p className="text-stone-100 text-base leading-8 mt-5 md:text-xl md:leading-9 max-w-3xl">
            {t("contactUs.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactMethodKeys.map((method) => (
              <article
                key={method.titleKey}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-5 md:p-6"
              >
                <h2 className="text-zinc-900 text-lg font-bold md:text-xl">
                  {t(method.titleKey)}
                </h2>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-orange-500 text-sm font-semibold inline-block mt-3 md:text-base"
                  >
                    {t(method.contentKey)}
                  </a>
                ) : (
                  <p className="text-stone-700 text-sm leading-7 mt-3 md:text-base md:leading-8">
                    {t(method.contentKey)}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mt-8 md:p-8">
            <h3 className="text-zinc-900 text-xl font-bold md:text-2xl">
              {t("contactUs.connect.heading")}
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="tel:+966112398888"
                className="inline-block bg-orange-400 text-white text-sm font-semibold px-6 py-3 rounded-lg"
              >
                {t("contactUs.connect.directCall")}
              </a>
              <a
                href="https://wa.me/966112398888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-zinc-900 text-white text-sm font-semibold px-6 py-3 rounded-lg"
              >
                {t("contactUs.connect.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
                {t("contactUs.form.heading")}
              </h2>
              <p className="text-stone-600 text-base leading-8 mt-4">
                {t("contactUs.form.subheading")}
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <input
                  type="text"
                  placeholder={t("contactUs.form.fullNamePlaceholder")}
                  value={formState.fullName}
                  onChange={handleFieldChange("fullName")}
                  className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-400"
                />
                <input
                  type="email"
                  placeholder={t("contactUs.form.emailPlaceholder")}
                  value={formState.email}
                  onChange={handleFieldChange("email")}
                  className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-400"
                />
                <input
                  type="tel"
                  placeholder={t("contactUs.form.phonePlaceholder")}
                  value={formState.phone}
                  onChange={handleFieldChange("phone")}
                  className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-400"
                />
                <input
                  type="text"
                  placeholder={t("contactUs.form.destinationPlaceholder")}
                  value={formState.destinationOrService}
                  onChange={handleFieldChange("destinationOrService")}
                  className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-400"
                />
                <textarea
                  placeholder={t("contactUs.form.messagePlaceholder")}
                  rows={5}
                  value={formState.message}
                  onChange={handleFieldChange("message")}
                  className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-400"
                />
                <button
                  type="submit"
                  className="inline-block bg-orange-400 text-white text-sm font-semibold px-6 py-3 rounded-lg"
                >
                  {t("contactUs.form.submit")}
                </button>
                <p className="text-stone-500 text-xs leading-6 md:text-sm">
                  {t("contactUs.form.note")}
                </p>
              </form>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-zinc-900 text-2xl font-bold md:text-3xl">
                {t("contactUs.info.heading")}
              </h2>
              <p className="text-stone-600 text-base leading-8 mt-4">
                {t("contactUs.info.subheading")}
              </p>

              <div className="space-y-5 mt-6">
                <div className="bg-stone-50 rounded-xl p-4">
                  <h3 className="text-zinc-900 font-bold">
                    {t("contactUs.info.location.title")}
                  </h3>
                  <p className="text-stone-600 text-sm leading-7 mt-2">
                    {t("contactUs.info.location.firstAddress")}
                  </p>
                  <p className="text-stone-600 text-sm leading-7">
                    {t("contactUs.info.location.secondAddress")}
                  </p>
                </div>
                <div className="bg-stone-50 rounded-xl p-4">
                  <h3 className="text-zinc-900 font-bold">
                    {t("contactUs.info.phone.title")}
                  </h3>
                  <a
                    href="tel:+966112398888"
                    className="text-orange-500 text-sm font-semibold inline-block mt-2"
                  >
                    +966112398888
                  </a>
                </div>
                <div className="bg-stone-50 rounded-xl p-4">
                  <h3 className="text-zinc-900 font-bold">
                    {t("contactUs.info.email.title")}
                  </h3>
                  <a
                    href="mailto:info@travelgateksa.com"
                    className="text-orange-500 text-sm font-semibold inline-block mt-2"
                  >
                    info@travelgateksa.com
                  </a>
                </div>
              </div>

              <div className="bg-stone-100 rounded-2xl h-56 mt-6 flex items-center justify-center text-stone-500 text-sm text-center px-4">
                {t("contactUs.info.mapPlaceholder")}
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
