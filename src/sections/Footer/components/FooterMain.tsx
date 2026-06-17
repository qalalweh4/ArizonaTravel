import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";
import { useLanguage } from "@/i18n/LanguageContext";

export const FooterMain = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 box-border caret-transparent outline-[3px] no-underline pt-14 pb-8">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] no-underline mx-auto px-4 md:px-8">
        <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-10 no-underline pb-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <FooterColumn
            title={t("footer.columns.aboutTitle")}
            variant="about"
            description={t("footer.columns.aboutDescription")}
          />
          <FooterColumn
            title={t("footer.columns.contactTitle")}
            variant="contact"
            description=""
            phoneHref="tel://+966541272537"
            phoneText="+966 54 127 2537"
            emailHref="mailto://info@arizonatravelsa.com"
            emailText="info@arizonatravelsa.com"
            firstAddress={t("footer.contactInfo.firstAddress")}
            secondAddress={t("footer.contactInfo.secondAddress")}
            links={[]}
          />
          <FooterColumn
            title={t("footer.columns.linksTitle")}
            variant="links"
            links={[
              { href: "/en", text: t("footer.columns.links.home") },
              { href: "/en/about", text: t("footer.columns.links.about") },
              {
                href: "/en/exclusive-offers",
                text: t("footer.columns.links.exclusiveOffers"),
              },
              {
                href: "/en/packages",
                text: t("footer.columns.links.packages"),
              },
              {
                href: "/en/contact",
                text: t("footer.columns.links.contact"),
              },
            ]}
          />
        </div>
        <hr className="box-border caret-transparent h-0 opacity-25 outline-[3px] no-underline border-slate-800 mt-4 mb-6 border-b-0 border-x-0" />
        <FooterBottom />
      </div>
    </div>
  );
};
