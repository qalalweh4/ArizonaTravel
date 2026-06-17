import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const baseLinkClass =
  "items-center bg-[position:0px_0px] box-border caret-transparent gap-x-1 flex text-sm leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-1 no-underline text-nowrap px-[10.4px] py-[6.4px] rounded-lg md:text-[13.12px] md:leading-[20.992px] md:min-h-[auto] md:min-w-[auto] md:px-[7.68px] hover:text-brand-700 hover:bg-slate-800";

const activeLinkClass =
  "relative bg-sunset-50 text-sunset-500 font-bold md:bg-sunset-50 md:bg-left-top after:accent-auto after:bg-sunset-500 after:box-border after:caret-transparent after:text-sunset-500 after:block after:text-sm after:not-italic after:normal-nums after:font-bold after:h-0.5 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:rounded-full after:border-separate after:bottom-[3.2px] after:inset-x-[10.4px] after:font-cairo after:md:text-[13.12px] after:md:leading-[20.992px]";

const inactiveLinkClass = "text-slate-50 font-medium";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`;

export const DesktopNavigation = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav
      aria-label="Desktop navigation"
      className="items-center box-border caret-transparent flex grow justify-center min-h-[auto] outline-[3px] no-underline"
    >
      <ul className="items-center box-border caret-transparent gap-x-[6.4px] hidden justify-start list-none max-w-full min-h-0 min-w-0 outline-[3px] gap-y-[6.4px] no-underline w-max pl-0 md:gap-x-[2.4px] md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-[2.4px]">
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en" end className={navLinkClass}>
            {t("header.nav.home")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/about" className={navLinkClass}>
            {t("header.nav.about")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/exclusive-offers" className={navLinkClass}>
            {t("header.nav.exclusiveOffers")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/business" className={navLinkClass}>
            {t("header.nav.business")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/careers" className={navLinkClass}>
            {t("header.nav.careers")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/education" className={navLinkClass}>
            {t("header.nav.education")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/contactus" className={navLinkClass}>
            {t("header.nav.contactUs")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/faqs" className={navLinkClass}>
            {t("header.nav.faqs")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
          <NavLink to="/en/packages" className={navLinkClass}>
            {t("header.nav.packages")}
          </NavLink>
        </li>
        <li className="items-center box-border caret-transparent flex shrink-0 min-h-0 min-w-0 outline-[3px] relative no-underline md:min-h-[auto] md:min-w-[auto]">
          <div className="items-center box-border caret-transparent gap-x-[1.6px] flex min-h-0 min-w-0 outline-[3px] gap-y-[1.6px] no-underline md:min-h-[auto] md:min-w-[auto]">
            <NavLink to="/en/services" className={navLinkClass}>
              {t("header.nav.services")}
            </NavLink>
            <button
              type="button"
              aria-label="Services submenu"
              aria-expanded={servicesOpen}
              aria-controls="services-submenu"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="items-center bg-transparent bg-[position:0px_0px] caret-transparent text-slate-50 gap-x-1 flex text-sm font-medium leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-1 text-center no-underline text-nowrap p-[5.6px] rounded-lg md:text-[13.12px] md:leading-[20.992px] md:min-h-[auto] md:min-w-[auto] hover:text-brand-700 hover:bg-slate-800"
            >
              <img
                src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-1.svg"
                alt="Toggle services menu"
                className={`box-border caret-transparent text-slate-50 text-3xl h-3.5 leading-[48px] outline-[3px] no-underline text-nowrap w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          {servicesOpen ? (
            <div
              id="services-submenu"
              className="absolute top-full left-0 mt-2 min-w-[180px] bg-slate-900 border border-slate-800 rounded-xl shadow-card p-2 z-50"
            >
              <NavLink
                to="/en/services/visa-assistance"
                className="block text-slate-50 text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {t("header.nav.visaAssistance")}
              </NavLink>
            </div>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};
