import { NavLink } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const baseLinkClass =
  "items-center bg-[position:0px_0px] box-border caret-transparent flex justify-between outline-[3px] no-underline w-full py-4 border-b-black/10 border-b";

const activeLinkClass =
  "border-l-sunset-500 border-r-sunset-500 border-t-sunset-500 text-sunset-500 font-bold pl-3 border-l-[3px]";

const inactiveLinkClass =
  "border-l-slate-50 border-r-slate-50 border-t-slate-50 text-slate-50 font-medium hover:text-brand-700 hover:border-l-brand-700 hover:border-r-brand-700 hover:border-t-brand-700";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`;

export const MobileNavigation = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav
      aria-label="Mobile navigation"
      className="bg-slate-950 box-border caret-transparent leading-relaxed outline-[3px] fixed no-underline translate-x-[100.0%] z-[999] overflow-auto p-6 top-[72px] bottom-0 inset-x-0 font-cairo"
    >
      <ul className="box-border caret-transparent flex flex-col list-none outline-[3px] no-underline pl-0">
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en" end className={navLinkClass}>
            {t("header.nav.home")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/about" className={navLinkClass}>
            {t("header.nav.about")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/exclusive-offers" className={navLinkClass}>
            {t("header.nav.exclusiveOffers")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/business" className={navLinkClass}>
            {t("header.nav.business")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/careers" className={navLinkClass}>
            {t("header.nav.careers")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/education" className={navLinkClass}>
            {t("header.nav.education")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/contactus" className={navLinkClass}>
            {t("header.nav.contactUs")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/faqs" className={navLinkClass}>
            {t("header.nav.faqs")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <NavLink to="/en/packages" className={navLinkClass}>
            {t("header.nav.packages")}
          </NavLink>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5">
          <div className="items-center border-b-green-600/90 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent gap-x-3 flex justify-between outline-[3px] gap-y-3 no-underline w-full border-b border-solid">
            <NavLink
              to="/en/services"
              className={({ isActive }) =>
                `items-center bg-[position:0px_0px] border-l-slate-50 border-r-slate-50 border-t-slate-50 box-border caret-transparent flex basis-[0%] grow justify-between min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full py-4 border-b-black/10 border-b ${isActive ? "text-sunset-500 font-bold" : "text-slate-50 font-medium hover:text-brand-700 hover:border-l-brand-700 hover:border-r-brand-700 hover:border-t-brand-700"}`
              }
            >
              {t("header.nav.services")}
            </NavLink>
            <button
              type="button"
              aria-label="Services"
              className="items-center bg-transparent bg-[position:0px_0px] border-l-slate-50 border-r-slate-50 border-t-slate-50 caret-transparent text-slate-50 flex font-medium justify-between min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-full mx-2.5 px-0 py-4 border-b-black/10 border-b md:ml-[140px] md:mr-0 hover:text-brand-700 hover:border-l-brand-700 hover:border-r-brand-700 hover:border-t-brand-700"
            >
              <img
                src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent text-3xl h-[18px] leading-[48px] outline-[3px] no-underline w-[18px]"
              />
            </button>
          </div>
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
        className="bg-sunset-500 box-border caret-transparent text-white block text-[19.2px] font-semibold leading-snug outline-[3px] text-center no-underline mt-6 p-[12.8px] rounded-xl md:text-base md:leading-relaxed transition-colors hover:bg-sunset-600"
      >
        {t("header.nav.contactUs")}
      </NavLink>
    </nav>
  );
};
