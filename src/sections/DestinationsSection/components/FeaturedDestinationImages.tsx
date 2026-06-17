import { useLanguage } from "@/i18n/LanguageContext";

export const FeaturedDestinationImages = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent gap-x-2 flex basis-[0%] grow h-[280px] min-h-[auto] outline-[3px] gap-y-2 no-underline">
      <a
        aria-label={t("destinationsSection.gallery.maldives")}
        href="/en/exclusive-offers?country=maldives"
        className="box-border caret-transparent text-brand-600 block basis-[0%] grow text-[19.2px] leading-[30.72px] min-h-[auto] outline-[3px] relative no-underline overflow-hidden rounded-xl md:text-base md:leading-[25.6px]"
      >
        <img
          alt="Scenic Panorama"
          sizes="(max-width: 1024px) 50vw, 30vw"
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/97.jpg"
          className="box-border text-transparent text-[19.2px] h-full leading-[30.72px] max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0 md:text-base md:leading-[25.6px]"
        />
      </a>
      <a
        aria-label={t("destinationsSection.gallery.thailand")}
        href="/en/exclusive-offers?country=thailand"
        className="box-border caret-transparent text-brand-600 block basis-[0%] grow text-[19.2px] leading-[30.72px] min-h-[auto] outline-[3px] relative no-underline overflow-hidden rounded-xl md:text-base md:leading-[25.6px]"
      >
        <img
          alt="Travel Destination"
          sizes="(max-width: 1024px) 50vw, 30vw"
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/124.png"
          className="box-border text-transparent text-[19.2px] h-full leading-[30.72px] max-w-full object-cover outline-[3px] absolute no-underline w-full inset-0 md:text-base md:leading-[25.6px]"
        />
      </a>
    </div>
  );
};
