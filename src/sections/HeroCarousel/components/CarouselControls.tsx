export type CarouselControlsProps = {
  variant: string;
  ariaLabel: string;
  buttonVariant: string;
  iconSrc: string;
  indicators: string[];
  activeIndicatorIndex: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  if (props.variant === "indicators") {
    return (
      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] absolute gap-y-2 no-underline translate-x-[-50.0%] w-full z-[4] left-0 bottom-2">
        {props.indicators.map((ariaLabel, index) => (
          <button
            key={ariaLabel}
            aria-label={ariaLabel}
            className={
              index.toString() === props.activeIndicatorIndex
                ? "appearance-none bg-orange-400 caret-transparent text-white block h-2 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-2 mx-1 p-0 rounded-[50%] scale-[1.3]"
                : "appearance-none bg-black caret-transparent text-white block h-2 min-h-[auto] min-w-[auto] opacity-20 outline-[3px] text-center no-underline w-2 mx-1 p-0 rounded-[50%]"
            }
          ></button>
        ))}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={props.ariaLabel}
      className={`items-center backdrop-blur-[10px] bg-white/10 shadow-[rgba(0,0,0,0.18)_0px_6px_18px_0px] caret-transparent text-white hidden h-11 justify-center opacity-0 outline-[3px] absolute text-center no-underline transform-none invisible w-11 z-[4] border p-0 rounded-[50%] border-white/20 top-2/4 md:flex md:opacity-100 md:translate-y-[-50.0%] md:visible hover:shadow-[rgba(0,0,0,0.22)_0px_10px_22px_0px] ${props.buttonVariant}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="box-border caret-transparent text-3xl h-[18px] leading-[48px] outline-[3px] no-underline invisible w-[18px] md:visible"
      />
    </button>
  );
};
