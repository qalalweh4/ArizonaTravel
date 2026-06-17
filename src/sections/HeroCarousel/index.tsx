import { useState } from "react";
import { HeroSlide } from "@/sections/HeroCarousel/components/HeroSlide";
import { CarouselControls } from "@/sections/HeroCarousel/components/CarouselControls";
import { useLanguage } from "@/i18n/LanguageContext";
import bakuImage from "@/assets/images/Baku-Bay-panorama-Azerbaijan.jpg";
import sarajevoImage from "@/assets/images/images.jpeg";

export const HeroCarousel = () => {
  const { t, dir } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      ariaLabel: t("heroCarousel.slide1.ariaLabel"),
      destination: t("heroCarousel.slide1.destination"),
      desktopImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/307.jpg",
      mobileImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/260.jpg",
      lines: [
        t("heroCarousel.slide1.line1"),
        t("heroCarousel.slide1.line2"),
      ],
      bookingHref:
        "https://wa.me/966541272537?text=Hello%20Travel%20Gate%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Georgia.",
      bookingAriaLabel: t("heroCarousel.slide1.bookingAriaLabel"),
    },
    {
      ariaLabel: t("heroCarousel.slide2.ariaLabel"),
      destination: t("heroCarousel.slide2.destination"),
      desktopImageSrc: bakuImage,
      mobileImageSrc: bakuImage,
      lines: [
        t("heroCarousel.slide2.line1"),
        t("heroCarousel.slide2.line2"),
      ],
      bookingHref:
        "https://wa.me/966541272537?text=Hello%20Travel%20Gate%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Azerbaijan.",
      bookingAriaLabel: t("heroCarousel.slide2.bookingAriaLabel"),
    },
    {
      ariaLabel: t("heroCarousel.slide3.ariaLabel"),
      destination: t("heroCarousel.slide3.destination"),
      desktopImageSrc: sarajevoImage,
      mobileImageSrc: sarajevoImage,
      lines: [
        t("heroCarousel.slide3.line1"),
        t("heroCarousel.slide3.line2"),
      ],
      bookingHref:
        "https://wa.me/966541272537?text=Hello%20Travel%20Gate%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Bosnia.",
      bookingAriaLabel: t("heroCarousel.slide3.bookingAriaLabel"),
    },
    {
      ariaLabel: t("heroCarousel.slide4.ariaLabel"),
      destination: t("heroCarousel.slide4.destination"),
      desktopImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/268.jpg",
      mobileImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/263.jpg",
      lines: [
        t("heroCarousel.slide4.line1"),
        t("heroCarousel.slide4.line2"),
      ],
      bookingHref:
        "https://wa.me/966541272537?text=Hello%20Travel%20Gate%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Poland%20%26%20Czech.",
      bookingAriaLabel: t("heroCarousel.slide4.bookingAriaLabel"),
    },
    {
      ariaLabel: t("heroCarousel.slide5.ariaLabel"),
      destination: t("heroCarousel.slide5.destination"),
      desktopImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/131.jpg",
      mobileImageSrc: "https://c.animaapp.com/mq9zlaoimPKAP5/assets/271.jpg",
      lines: [
        t("heroCarousel.slide5.line1"),
        t("heroCarousel.slide5.line2"),
        t("heroCarousel.slide5.line3"),
      ],
      bookingHref:
        "https://wa.me/966541272537?text=Hello%20Travel%20Gate%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Switzerland%20%26%20Austria.",
      bookingAriaLabel: t("heroCarousel.slide5.bookingAriaLabel"),
    },
  ];

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const offsetVw = dir === "rtl" ? activeSlide * 100 : -activeSlide * 100;

  return (
    <section
      aria-label={t("heroCarousel.sectionAriaLabel")}
      className="bg-slate-950 box-border caret-transparent h-[420px] leading-[25.6px] min-h-[420px] outline-[3px] relative no-underline w-full overflow-hidden -mt-20 font-cairo md:h-[630px] md:min-h-[630px]"
    >
      <div className="box-border caret-transparent h-full list-none outline-[3px] relative no-underline z-[1] overflow-hidden mx-auto">
        <div
          className="caret-transparent flex h-full outline-[3px] relative no-underline w-full z-[1] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${offsetVw}vw)` }}
        >
          {slides.map((slide, index) => (
            <HeroSlide key={index} {...slide} />
          ))}
        </div>
      </div>
      <CarouselControls
        variant="arrows"
        ariaLabel={t("heroCarousel.controls.previousSlide")}
        buttonVariant="left-[6.4px] md:left-[19.2px]"
        iconSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-5.svg"
        indicators={[]}
        activeIndicatorIndex=""
        onClick={goToPrevious}
      />
      <CarouselControls
        variant="controls"
        ariaLabel={t("heroCarousel.controls.nextSlide")}
        buttonVariant="right-[6.4px] md:right-[19.2px]"
        iconSrc="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-6.svg"
        indicators={[]}
        activeIndicatorIndex="0"
        onClick={goToNext}
      />
      <CarouselControls
        variant="indicators"
        indicators={[
          t("heroCarousel.controls.goToSlide1"),
          t("heroCarousel.controls.goToSlide2"),
          t("heroCarousel.controls.goToSlide3"),
          t("heroCarousel.controls.goToSlide4"),
          t("heroCarousel.controls.goToSlide5"),
        ]}
        activeIndicatorIndex={activeSlide.toString()}
        onIndicatorSelect={setActiveSlide}
      />
    </section>
  );
};
