export type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  linkText: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <article className="bg-slate-900 shadow-card border border-slate-800 hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200 box-border caret-transparent flex flex-col shrink-0 justify-between min-h-[280px] min-w-[auto] outline-[3px] snap-start no-underline w-[300px] p-7 rounded-2xl md:w-80">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <h3 className="box-border caret-transparent text-slate-50 text-xl font-extrabold tracking-tight leading-[27.5px] outline-[3px] no-underline mb-3">
          {props.title}
        </h3>
        <p className="box-border caret-transparent text-sunset-500 text-sm font-medium leading-[22.75px] outline-[3px] no-underline mb-4">
          {props.subtitle}
        </p>
        <p className="box-border caret-transparent text-slate-300 text-sm leading-[22.75px] outline-[3px] no-underline mb-4">
          {props.description}
        </p>
      </div>
      <a
        href={props.href}
        className="self-start bg-brand-600 box-border caret-transparent text-white block text-sm font-semibold leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-6 px-6 py-2.5 rounded-lg transition-colors hover:bg-brand-700"
      >
        {props.linkText}
      </a>
    </article>
  );
};
