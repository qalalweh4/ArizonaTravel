export type ReasonItemProps = {
  number: string;
  title: string;
  description: string;
  className: string;
};

export const ReasonItem = (props: ReasonItemProps) => {
  return (
    <div className={props.className}>
      <div className="items-start box-border caret-transparent gap-x-4 flex outline-[3px] gap-y-4 no-underline mb-2">
        <span className="box-border caret-transparent text-teal-500 block shrink-0 text-3xl font-bold leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          {props.number}
        </span>
        <h3 className="box-border caret-transparent text-zinc-900 font-bold leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2">
          {props.title}
          <span className="box-border caret-transparent text-teal-500 leading-[25.6px] outline-[3px] no-underline">
            ?
          </span>
        </h3>
      </div>
      <p className="box-border caret-transparent text-stone-500 text-sm leading-[22.75px] outline-[3px] no-underline mb-4 pl-10">
        {props.description}
      </p>
    </div>
  );
};
