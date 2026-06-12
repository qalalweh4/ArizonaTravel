export type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline px-6 py-10 rounded-xl">
      <span className="box-border caret-transparent text-teal-500 block text-5xl font-bold leading-[48px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-3 md:text-6xl md:leading-[60px]">
        {props.value}
      </span>
      <span className="box-border caret-transparent text-zinc-900 block text-sm font-semibold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-6">
        {props.label}
      </span>
    </div>
  );
};
