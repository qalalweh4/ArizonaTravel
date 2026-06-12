export type AccreditationCardProps = {
  variant: string;
  imageAlt?: string;
  imageSrc?: string;
  imageSizes?: string;
  label?: string;
  value?: string;
};

export const AccreditationCard = (props: AccreditationCardProps) => {
  if (props.variant === "iata") {
    return (
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent min-w-[auto] outline-[3px] no-underline rounded-xl items-center flex justify-center min-h-[auto] p-8">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="aspect-[auto_80_/_60] box-border text-transparent max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] no-underline w-20"
        />
      </div>
    );
  }

  if (props.variant === "ministry") {
    return (
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent min-w-[auto] outline-[3px] no-underline rounded-xl min-h-[140px] relative overflow-hidden">
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] absolute no-underline inset-0">
          <div className="box-border caret-transparent h-4/5 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-4/5">
            <img
              alt={props.imageAlt}
              sizes={props.imageSizes}
              src={props.imageSrc}
              className="box-border text-transparent h-full max-w-full object-contain outline-[3px] absolute no-underline w-full inset-0"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent min-w-[auto] outline-[3px] no-underline rounded-xl items-center flex flex-col justify-center min-h-[auto] text-center px-6 py-10">
      <p className="box-border caret-transparent text-zinc-900 font-bold leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2">
        {props.label}
      </p>
      <p className="box-border caret-transparent text-teal-500 font-semibold leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4">
        {props.value}
      </p>
    </div>
  );
};
