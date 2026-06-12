import { useLanguage } from "@/i18n/LanguageContext";

export const FooterMapAndContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline w-auto md:w-[55%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14493.032316847084!2d46.764865!3d24.752339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01bcf28c3651%3A0x4d8ad2468e991297!2z2KrYsdmB2YQg2KzZitiqINmE2YTYs9mB2LEg2YjYp9mE2LPZitin2K3YqQ!5e0!3m2!1sar!2seg!4v1712885149435!5m2!1sar!2seg"
        title="TravelGate main location"
        className="box-border caret-transparent h-[200px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full"
      ></iframe>
      <iframe
        title="TravelGate branch location"
        className="box-border caret-transparent h-[200px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full"
      ></iframe>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline border-[lab(91.6229_-0.159115_-2.26791)] py-6 border-b border-solid md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-orange-400 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-orange-400 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-zinc-900 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.location")}
          </span>
          <span className="box-border caret-transparent text-stone-500 block text-xs leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.firstAddress")}
          </span>
        </div>
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-orange-400 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-orange-400 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-zinc-900 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.phone")}
          </span>
          <a
            href="tel://+966112398888"
            className="box-border caret-transparent text-stone-500 block text-xs font-bold leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
          >
            <bdi className="box-border caret-transparent leading-[19.2px] outline-[3px] no-underline">
              +966112398888
            </bdi>
          </a>
        </div>
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-orange-400 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-orange-400 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-zinc-900 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.email")}
          </span>
          <a
            href="mailto://info@travelgateksa.com"
            className="box-border caret-transparent text-stone-500 block text-xs font-bold leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
          >
            info@travelgateksa.com
          </a>
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-6 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 no-underline pt-2">
        <a
          href="https://api.whatsapp.com/send?phone=966112398888"
          aria-label="WhatsApp"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-10.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href="https://www.instagram.com/travelgate.ksa/"
          aria-label="Instagram"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-11.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href="https://www.snapchat.com/add/travelgateksa"
          aria-label="Snapchat"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-12.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/travelgateksa/"
          aria-label="LinkedIn"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-13.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href="https://www.tiktok.com/@travelgate.ksa"
          aria-label="TikTok"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-14.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href="https://x.com/travelgateksa"
          aria-label="X (Twitter)"
          className="box-border caret-transparent text-zinc-900 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-15.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
      </div>
    </div>
  );
};
