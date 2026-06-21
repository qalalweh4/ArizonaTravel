import { useLanguage } from "@/i18n/LanguageContext";

export const FooterMapAndContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline w-auto md:w-[55%]">
      <iframe
        src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s24.693673,46.671189!6i16!3m1!1sar!5m1!1sar"
        title="Arizona Travel SA main location"
        className="box-border caret-transparent h-[200px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full"
      ></iframe>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline border-slate-800 py-6 border-b border-solid md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-sunset-500 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-sunset-500 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-slate-50 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.location")}
          </span>
          <span className="box-border caret-transparent text-slate-300 block text-xs leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.firstAddress")}
          </span>
        </div>
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-sunset-500 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-sunset-500 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-slate-50 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.phone")}
          </span>
          <a
            href="tel://+966541272537"
            className="box-border caret-transparent text-slate-300 block text-xs font-bold leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
          >
            <bdi className="box-border caret-transparent leading-[19.2px] outline-[3px] no-underline">
              +966 54 127 2537
            </bdi>
          </a>
        </div>
        <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline">
          <i className="box-border caret-transparent text-sunset-500 block text-2xl font-black leading-8 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-sunset-500 before:text-2xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-8 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
          <span className="box-border caret-transparent text-slate-50 block text-sm font-bold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {t("footer.contactInfo.email")}
          </span>
          <a
            href="mailto://info@arizonatravelsa.com"
            className="box-border caret-transparent text-slate-300 block text-xs font-bold leading-4 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
          >
            info@arizonatravelsa.com
          </a>
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-6 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 no-underline pt-2">
        <a
          href="https://api.whatsapp.com/send?phone=966541272537"
          aria-label="WhatsApp"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-10.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="Instagram"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-11.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="Snapchat"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-12.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="LinkedIn"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-13.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="TikTok"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-14.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="X (Twitter)"
          className="box-border caret-transparent text-slate-50 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
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
