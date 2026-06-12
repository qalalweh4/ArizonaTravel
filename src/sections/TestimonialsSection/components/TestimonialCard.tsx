export type TestimonialCardProps = {
  title: string;
  testimonial: string;
  authorName: string;
  reviewLabel: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline p-6 rounded-xl">
      <h3 className="box-border caret-transparent text-zinc-900 font-bold leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2">
        {props.title}
      </h3>
      <p className="box-border caret-transparent text-stone-500 basis-[0%] grow text-sm leading-[22.75px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4">
        {props.testimonial}
      </p>
      <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline mt-2">
        <div className="items-center bg-teal-500 box-border caret-transparent flex shrink-0 h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-10 rounded-[3.35544e+07px]">
          <i className="box-border caret-transparent text-white block text-xs font-black leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[15px] font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <p className="box-border caret-transparent text-zinc-900 text-sm font-bold leading-[17.5px] outline-[3px] no-underline mb-4">
            {props.authorName}
          </p>
          <p className="box-border caret-transparent text-stone-500 text-xs leading-[15px] outline-[3px] no-underline mb-4">
            {props.reviewLabel}
          </p>
        </div>
      </div>
    </div>
  );
};
