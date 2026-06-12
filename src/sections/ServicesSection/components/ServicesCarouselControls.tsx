import { useLanguage } from "@/i18n/LanguageContext";

export const ServicesCarouselControls = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent flex justify-end outline-[3px] no-underline mt-7">
      <div className="items-center bg-zinc-100 shadow-[rgba(0,0,0,0.1)_0px_2px_12px_0px] box-border caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 no-underline p-1 rounded-full">
        <button
          aria-label={t("servicesSection.previousService")}
          className="items-center appearance-none bg-transparent box-content caret-transparent flex shrink-0 h-10 justify-center min-h-[auto] min-w-[auto] opacity-[0.32] outline-[3px] no-underline w-10 p-0 rounded-[50%]"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-7.svg"
            alt="Icon"
            className="box-border caret-transparent text-3xl h-[17px] leading-[48px] outline-[3px] no-underline w-[17px]"
          />
        </button>
        <span className="bg-gray-300 box-border caret-transparent block shrink-0 h-[18px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-px mx-[3px]"></span>
        <button
          aria-label={t("servicesSection.nextService")}
          className="items-center appearance-none bg-transparent box-content caret-transparent flex shrink-0 h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-10 p-0 rounded-[50%]"
        >
          <img
            src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent text-3xl h-[17px] leading-[48px] outline-[3px] no-underline w-[17px]"
          />
        </button>
      </div>
    </div>
  );
};
