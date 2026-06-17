import { NavLink } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const baseLinkClass =
  "items-center bg-[position:0px_0px] box-border caret-transparent flex justify-between outline-[3px] no-underline w-full py-4 border-b-black/10 border-b";

const activeLinkClass =
  "border-l-sunset-500 border-r-sunset-500 border-t-sunset-500 text-sunset-500 font-bold pl-3 border-l-[3px]";

const inactiveLinkClass =
  "border-l-slate-50 border-r-slate-50 border-t-slate-50 text-slate-50 font-medium hover:text-brand-700 hover:border-l-brand-700 hover:border-r-brand-700 hover:border-t-brand-700";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`;

type Props = { isOpen: boolean; onClose: () => void };

export const MobileNavigation = ({ isOpen, onClose }: Props) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      aria-label="Mobile navigation"
      className={`bg-slate-950 box-border caret-transparent leading-relaxed outline-[3px] fixed no-underline z-[999] overflow-auto p-6 top-[72px] bottom-0 inset-x-0 font-cairo transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="box-border caret-transparent flex flex-col list-none outline-[3px] no-underline pl-0">
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en" end onClick={onClose} className={navLinkClass}>
            {t("header.nav.home")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/about" onClick={onClose} className={navLinkClass}>
            {t("header.nav.about")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/exclusive-offers" onClick={onClose} className={navLinkClass}>
            {t("header.nav.exclusiveOffers")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/business" onClick={onClose} className={navLinkClass}>
            {t("header.nav.business")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/careers" onClick={onClose} className={navLinkClass}>
            {t("header.nav.careers")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/education" onClick={onClose} className={navLinkClass}>
            {t("header.nav.education")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/contactus" onClick={onClose} className={navLinkClass}>
            {t("header.nav.contactUs")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/faqs" onClick={onClose} className={navLinkClass}>
            {t("header.nav.faqs")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/packages" onClick={onClose} className={navLinkClass}>
            {t("header.nav.packages")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink
            to="/en/services"
            onClick={onClose}
            className={({ isActive }) =>
              `items-center bg-[position:0px_0px] box-border caret-transparent flex justify-between outline-[3px] no-underline w-full py-4 border-b-black/10 border-b ${isActive ? "border-l-sunset-500 border-r-sunset-500 border-t-sunset-500 text-sunset-500 font-bold pl-3 border-l-[3px]" : "border-l-slate-50 border-r-slate-50 border-t-slate-50 text-slate-50 font-medium hover:text-brand-700"}`
            }
          >
            {t("header.nav.services")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 pl-4">
          <NavLink
            to="/en/services/visa-assistance"
            onClick={onClose}
            className={({ isActive }) =>
              `items-center flex gap-x-2 outline-[3px] no-underline w-full py-3 border-b-black/10 border-b text-sm ${isActive ? "text-sunset-500 font-bold" : "text-slate-300 hover:text-brand-500"}`
            }
          >
            <span className="text-brand-500">↳</span>
            {t("header.nav.visaAssistance")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="items-center bg-transparent border-l-slate-50 border-r-slate-50 border-t-slate-50 caret-transparent text-slate-50 gap-x-3 flex font-medium justify-start outline-[3px] no-underline w-full px-0 py-4 border-b-black/10 border-b hover:text-brand-500"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <button
            type="button"
            onClick={toggleLanguage}
            className="items-center bg-transparent bg-[position:0px_0px] border-l-slate-50 border-r-slate-50 border-t-slate-50 caret-transparent text-slate-50 gap-x-2 flex font-medium justify-start outline-[3px] gap-y-2 text-center no-underline w-full mx-2.5 px-0 py-4 border-b-black/10 border-b md:ml-[140px] md:mr-0 hover:text-brand-700 hover:border-l-brand-700 hover:border-r-brand-700 hover:border-t-brand-700"
          >
            <img
              alt="Language"
              src={
                language === "ar"
                  ? "https://flagcdn.com/sa.svg"
                  : "https://c.animaapp.com/mq9zlaoimPKAP5/assets/us.svg"
              }
              className="aspect-[auto_22_/_14] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm"
            />
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              {language === "en" ? "English" : "العربية"}
            </span>
          </button>
        </li>
      </ul>
      <NavLink
        to="/en/contactus"
        onClick={onClose}
        className="bg-sunset-500 box-border caret-transparent text-white block text-[19.2px] font-semibold leading-snug outline-[3px] text-center no-underline mt-6 p-[12.8px] rounded-xl md:text-base md:leading-relaxed transition-colors hover:bg-sunset-600"
      >
        {t("header.nav.contactUs")}
      </NavLink>
    </nav>
  );
};
