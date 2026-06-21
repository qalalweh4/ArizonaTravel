import { useLanguage } from "@/i18n/LanguageContext";

export const FooterBottom = () => {
  const { t } = useLanguage();

  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex flex-col outline-[3px] gap-y-5 no-underline">
      <p className="box-border caret-transparent text-slate-400 text-sm leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline mb-4">
        {t("footer.bottom.copyright")}
      </p>
      <div className="items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 no-underline">
        <a
          href="https://api.whatsapp.com/send?phone=966541272537"
          aria-label="WhatsApp"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-18.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="Instagram"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-19.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="Snapchat"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-20.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="LinkedIn"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-21.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="TikTok"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-22.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
        <a
          href=""
          aria-label="X (Twitter)"
          className="box-border caret-transparent text-brand-600 block text-xl font-bold leading-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-23.svg"
            alt="Icon"
            className="caret-transparent inline-block text-3xl h-[30px] leading-[48px] outline-[3px] no-underline w-[37.5px]"
          />
        </a>
      </div>
    </div>
  );
};
