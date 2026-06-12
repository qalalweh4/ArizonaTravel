export type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  linkText: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <article className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent flex flex-col shrink-0 justify-between min-h-[280px] min-w-[auto] outline-[3px] snap-start no-underline w-[300px] p-7 rounded-xl md:w-80">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <h3 className="box-border caret-transparent text-zinc-900 text-xl font-bold leading-[27.5px] outline-[3px] no-underline mb-3">
          {props.title}
        </h3>
        <p className="box-border caret-transparent text-orange-400 text-sm font-medium leading-[22.75px] outline-[3px] no-underline mb-4">
          {props.subtitle}
        </p>
        <p className="box-border caret-transparent text-stone-500 text-sm leading-[22.75px] outline-[3px] no-underline mb-4">
          {props.description}
        </p>
      </div>
      <a
        href={props.href}
        className="self-start bg-teal-500 box-border caret-transparent text-white block text-sm font-semibold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-6 px-6 py-2.5 rounded-[3.35544e+07px]"
      >
        {props.linkText}
      </a>
    </article>
  );
};
