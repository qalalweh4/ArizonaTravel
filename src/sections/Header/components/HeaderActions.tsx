import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const HeaderActions = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="items-center box-border caret-transparent gap-x-2 hidden shrink-0 min-h-0 min-w-0 outline-[3px] gap-y-0 no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-800 text-slate-50 bg-transparent transition-colors hover:border-brand-500 hover:text-brand-500"
      >
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
      <div className="items-center box-border caret-transparent inline-flex min-h-0 min-w-0 outline-[3px] relative no-underline md:flex md:min-h-[auto] md:min-w-[auto]">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="items-center bg-transparent bg-[position:0px_0px] caret-transparent text-slate-50 gap-x-[5.6px] flex text-[13.12px] font-medium leading-[20.992px] min-h-0 min-w-0 outline-[3px] relative gap-y-[5.6px] text-center no-underline border px-[9.6px] py-[5.6px] rounded-l-lg border-slate-800 md:min-h-[auto] md:min-w-[auto] md:px-[7.68px] hover:text-brand-700 hover:border-brand-700/50"
        >
          <img
            alt=""
            src={
              language === "ar"
                ? "https://flagcdn.com/sa.svg"
                : "https://c.animaapp.com/mq9zlaoimPKAP5/assets/us.svg"
            }
            className="aspect-[auto_22_/_14] box-border caret-transparent text-slate-50 max-w-full min-h-0 min-w-0 outline-[3px] no-underline w-[22px] rounded-sm md:min-h-[auto] md:min-w-[auto]"
          />
          <span className="box-border caret-transparent text-slate-50 block min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
            {t("header.actions.language")}
          </span>
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-1.svg"
            alt=""
            className="box-border caret-transparent text-slate-50 text-3xl h-3.5 leading-[48px] outline-[3px] no-underline w-3.5"
          />
        </button>
      </div>
      <Link
        to="/en/contactus"
        className="bg-sunset-500 bg-[position:0px_0px] box-border caret-transparent text-white inline text-sm font-semibold leading-[22.4px] min-h-0 min-w-0 outline-[3px] no-underline text-nowrap border-sunset-500 -ml-px px-[17.6px] py-[7.2px] rounded-r-[9.6px] border-2 border-solid md:block md:min-h-[auto] md:min-w-[auto] md:px-[13.6px] transition-colors hover:bg-sunset-600 hover:border-sunset-600"
      >
        {t("header.actions.contactUs")}
      </Link>
    </div>
  );
};
