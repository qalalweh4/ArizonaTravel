export type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="items-center bg-slate-950 shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline px-6 py-10 rounded-2xl">
      <span className="box-border caret-transparent text-brand-600 block text-5xl font-extrabold leading-[48px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-3 md:text-6xl md:leading-[60px]">
        {props.value}
      </span>
      <span className="box-border caret-transparent text-slate-50 block text-sm font-semibold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-6">
        {props.label}
      </span>
    </div>
  );
};
