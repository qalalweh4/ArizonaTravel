import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const HeaderActions = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <div className="items-center box-border caret-transparent gap-x-0 hidden shrink-0 min-h-0 min-w-0 outline-[3px] gap-y-0 no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="items-center box-border caret-transparent inline-flex min-h-0 min-w-0 outline-[3px] relative no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="items-center bg-transparent bg-[position:0px_0px] caret-transparent text-zinc-900 gap-x-[5.6px] flex text-[13.12px] font-medium leading-[20.992px] min-h-0 min-w-0 outline-[3px] relative gap-y-[5.6px] text-center no-underline border px-[9.6px] py-[5.6px] rounded-l-lg border-black/10 md:min-h-[auto] md:min-w-[auto] md:px-[7.68px] hover:text-emerald-900 hover:border-emerald-900/50"
        >
          <img
            alt=""
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/us.svg"
            className="aspect-[auto_22_/_14] box-border caret-transparent text-zinc-900 max-w-full min-h-0 min-w-0 outline-[3px] no-underline w-[22px] rounded-sm md:min-h-[auto] md:min-w-[auto]"
          />
          <span className="box-border caret-transparent text-zinc-900 block min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
            {t("header.actions.language")}
          </span>
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-1.svg"
            alt=""
            className="box-border caret-transparent text-zinc-900 text-3xl h-3.5 leading-[48px] outline-[3px] no-underline w-3.5"
          />
        </button>
      </div>
      <Link
        to="/en/contactus"
        className="bg-emerald-900 bg-[position:0px_0px] box-border caret-transparent text-white inline text-sm font-semibold leading-[22.4px] min-h-0 min-w-0 outline-[3px] no-underline text-nowrap border-emerald-900 -ml-px px-[17.6px] py-[7.2px] rounded-r-[9.6px] border-2 border-solid md:block md:min-h-[auto] md:min-w-[auto] md:px-[13.6px] hover:bg-emerald-800 hover:border-emerald-800"
      >
        {t("header.actions.contactUs")}
      </Link>
    </div>
  );
};
