import { useLanguage } from "@/i18n/LanguageContext";

export type TourCardProps = {
  title: string;
  imageAlt: string;
  imageSrc: string;
  price: string;
  callAriaLabel: string;
  callHref: string;
  whatsappHref: string;
  buttonText: string;
};

export const TourCard = (props: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <article className="bg-white shadow-[rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent flex flex-col min-h-[auto] outline-[3px] no-underline overflow-hidden rounded-2xl">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline pt-2 px-2">
        <img
          alt={props.imageAlt}
          sizes="(max-width: 900px) 400px, (max-width: 1280px) 30vw, 430px"
          src={props.imageSrc}
          className="aspect-square box-border text-transparent max-w-full object-cover outline-[3px] no-underline w-full rounded-xl"
        />
      </div>
      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] no-underline pt-3 pb-5 px-4">
        <h3 className="box-border caret-transparent text-zinc-900 font-bold leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-1">
          {props.title}
        </h3>
        <p className="box-border caret-transparent text-stone-500 text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {t("topToursSection.startFrom")}
          <span className="box-border caret-transparent text-teal-500 font-semibold leading-[22.4px] outline-[3px] no-underline">
            {props.price}
          </span>
        </p>
        <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline mt-4">
          <a
            href={props.callHref}
            aria-label={props.callAriaLabel}
            className="items-center bg-orange-400 box-border caret-transparent text-sky-600 flex shrink-0 text-[19.2px] h-11 justify-center leading-[30.72px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-11 rounded-[50%] md:text-base md:leading-[25.6px]"
          >
            <img
              src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent text-3xl h-[18px] leading-[48px] outline-[3px] no-underline w-[18px]"
            />
          </a>
          <a
            href={props.whatsappHref}
            className="bg-teal-500 box-border caret-transparent text-white block basis-[0%] grow text-sm font-semibold leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline py-3 rounded-full"
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </article>
  );
};
