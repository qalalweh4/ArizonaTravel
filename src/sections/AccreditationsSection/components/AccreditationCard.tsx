export type AccreditationCardProps = {
  variant: string;
  imageAlt?: string;
  imageSrc?: string;
  label?: string;
  value?: string;
};

export const AccreditationCard = (props: AccreditationCardProps) => {
  if (props.variant === "iata") {
    return (
      <div className="bg-slate-900 shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 box-border caret-transparent min-w-[auto] outline-[3px] no-underline rounded-2xl items-center flex justify-center min-h-[auto] p-8">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="aspect-[auto_80_/_60] box-border text-transparent max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] no-underline w-20"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 box-border caret-transparent min-w-[auto] outline-[3px] no-underline rounded-2xl items-center flex flex-col justify-center min-h-[auto] text-center px-6 py-10">
      <p className="box-border caret-transparent text-slate-50 font-bold leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2">
        {props.label}
      </p>
      <p className="box-border caret-transparent text-brand-600 font-semibold leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4">
        {props.value}
      </p>
    </div>
  );
};
