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
      <div className="bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_25%),linear-gradient(270deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0)_55%)] bg-[position:0%_0%,0%_0%] bg-size-[auto,auto] box-border caret-transparent outline-[3px] absolute no-underline z-[1] inset-0"></div>
      <div className="items-center box-border caret-transparent flex h-full justify-end max-w-[1440px] outline-[3px] relative no-underline z-[2] mx-auto pl-[35.2px] pr-4 pt-[86.4px] pb-[27.2px] md:pl-32 md:pr-[44.8px] md:pt-[93.6px] md:pb-[41.6px]">
        <div className="items-start box-border caret-transparent text-white gap-x-[6.4px] flex flex-col max-w-[262.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[6.4px] text-left no-underline w-full ml-auto md:gap-x-[12.8px] md:max-w-[435.2px] md:gap-y-[12.8px]">
          <h2 className="box-border caret-transparent text-teal-500 text-[28.8px] font-extrabold tracking-[-0.576px] leading-[31.68px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline py-0 md:text-[43.52px] md:tracking-[-0.8704px] md:leading-[47.872px] md:pt-[18px] md:pb-2.5">
            {props.destination}
          </h2>
          {props.lines.map((line) => (
            <p
              key={line}
              className="box-border caret-transparent text-white/90 text-base font-semibold leading-[21.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[21.76px] md:leading-[29.376px]"
            >
              {line}
            </p>
          ))}
          <a
            href={props.bookingHref}
            aria-label={props.bookingAriaLabel}
            className="items-center bg-orange-400 shadow-[rgba(0,0,0,0.25)_0px_12px_28px_0px] box-border caret-transparent flex text-[13.6px] font-bold justify-center leading-[21.76px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-[9.6px] px-[20.8px] py-[8.8px] rounded-[999px] md:text-[14.08px] md:leading-[22.528px] md:mt-[20.48px] md:px-[28.16px] md:py-[12.8px] hover:shadow-[rgba(0,0,0,0.28)_0px_16px_32px_0px]"
          >
            {t("heroCarousel.bookNow")}
          </a>
        </div>
      </div>
    </div>
  );
};
