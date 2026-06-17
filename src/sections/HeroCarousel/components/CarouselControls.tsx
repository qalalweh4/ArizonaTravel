export type CarouselControlsProps = {
  variant: string;
  ariaLabel?: string;
  buttonVariant?: string;
  iconSrc?: string;
  indicators: string[];
  activeIndicatorIndex: string;
  onClick?: () => void;
  onIndicatorSelect?: (index: number) => void;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  if (props.variant === "indicators") {
    return (
      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] absolute gap-y-2 no-underline translate-x-[-50.0%] w-full z-[4] left-0 bottom-2">
        {props.indicators.map((ariaLabel, index) => (
          <button
            key={ariaLabel}
            type="button"
            aria-label={ariaLabel}
            onClick={() => props.onIndicatorSelect?.(index)}
            className={
              index.toString() === props.activeIndicatorIndex
                ? "appearance-none bg-sunset-500 caret-transparent text-white block h-2 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-2 mx-1 p-0 rounded-full scale-[1.3]"
                : "appearance-none bg-black caret-transparent text-white block h-2 min-h-[auto] min-w-[auto] opacity-20 outline-[3px] text-center no-underline w-2 mx-1 p-0 rounded-full"
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
      onClick={props.onClick}
      className={`items-center backdrop-blur-[10px] bg-white/10 shadow-soft caret-transparent text-white flex h-11 justify-center outline-[3px] absolute text-center no-underline w-11 z-[4] border p-0 rounded-full border-white/20 top-2/4 -translate-y-1/2 hover:shadow-card ${props.buttonVariant}`}
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="box-border caret-transparent text-3xl h-[18px] leading-[48px] outline-[3px] no-underline w-[18px]"
      />
    </button>
  );
};
