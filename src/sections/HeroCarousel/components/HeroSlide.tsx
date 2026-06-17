import { useLanguage } from "@/i18n/LanguageContext";

export type HeroSlideProps = {
  ariaLabel: string;
  destination: string;
  desktopImageSrc: string;
  mobileImageSrc: string;
  lines: string[];
  bookingHref: string;
  bookingAriaLabel: string;
};

export const HeroSlide = (props: HeroSlideProps) => {
  const { t } = useLanguage();

  return (
    <div
      aria-label={props.ariaLabel}
      role="group"
      className="box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-screen"
    >
      <div className="box-border caret-transparent outline-[3px] absolute no-underline z-0 inset-0">
        <img
          alt={props.destination}
          sizes="(max-width: 767px) 1px, 100vw"
          src={props.desktopImageSrc}
          className="box-border text-transparent hidden h-full max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0 md:block"
        />
        <img
          alt={props.destination}
          sizes="(max-width: 767px) 100vw, 1px"
          src={props.mobileImageSrc}
          className="box-border text-transparent block h-full max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0 md:hidden"
        />
      </div>
      <div className="bg-[linear-gradient(rgba(15,23,42,0.8)_0%,rgba(15,23,42,0)_25%),linear-gradient(270deg,rgba(15,23,42,0.45)_0%,rgba(15,23,42,0.1)_35%,rgba(15,23,42,0)_55%)] bg-[position:0%_0%,0%_0%] bg-size-[auto,auto] box-border caret-transparent outline-[3px] absolute no-underline z-[1] inset-0"></div>
      <div className="items-center box-border caret-transparent flex h-full justify-end max-w-[1440px] outline-[3px] relative no-underline z-[2] mx-auto pl-9 pr-4 pt-20 pb-7 md:pl-32 md:pr-12 md:pt-24 md:pb-10">
        <div className="items-start box-border caret-transparent text-white gap-x-2 flex flex-col max-w-[262.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-left no-underline w-full ml-auto md:gap-x-3 md:max-w-md md:gap-y-3">
          <h2 className="box-border caret-transparent text-sunset-400 text-3xl font-extrabold tracking-tight leading-tight min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline py-0 md:text-5xl md:pt-[18px] md:pb-2.5">
            {props.destination}
          </h2>
          {props.lines.map((line) => (
            <p
              key={line}
              className="box-border caret-transparent text-white/90 text-base font-semibold leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-xl md:leading-[29.376px]"
            >
              {line}
            </p>
          ))}
          <a
            href={props.bookingHref}
            aria-label={props.bookingAriaLabel}
            className="items-center bg-sunset-500 shadow-soft box-border caret-transparent text-white flex text-sm font-bold justify-center leading-[21.76px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-2 px-5 py-2 rounded-lg transition-colors md:text-base md:mt-5 md:px-7 md:py-3 hover:bg-sunset-600 hover:shadow-card"
          >
            {t("heroCarousel.bookNow")}
          </a>
        </div>
      </div>
    </div>
  );
};
