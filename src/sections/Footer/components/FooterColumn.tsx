export type FooterColumnProps = {
  title: string;
  variant: string;
  description: string;
  phoneHref: string;
  phoneText: string;
  emailHref: string;
  emailText: string;
  firstAddress: string;
  secondAddress: string;
  links: {
    href: string;
    text: string;
  }[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <h3 className="box-border caret-transparent text-slate-50 text-lg font-extrabold tracking-tight leading-7 outline-[3px] no-underline mb-5">
        {props.title}
      </h3>
      {props.variant === "about" && (
        <p className="box-border caret-transparent text-slate-300 text-sm leading-relaxed outline-[3px] no-underline mb-4">
          {props.description}
        </p>
      )}
      {props.variant === "contact" && (
        <ul className="box-border caret-transparent flex flex-col list-none outline-[3px] no-underline mb-4 pl-0 gap-x-4 gap-y-4">
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 items-center gap-x-3 flex gap-y-3">
            <i className="box-border caret-transparent text-brand-600 block shrink-0 font-black leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-5 font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-brand-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
            <a
              href={props.phoneHref}
              className="box-border caret-transparent text-slate-300 text-sm font-bold leading-5 outline-[3px] no-underline block min-h-[auto] min-w-[auto]"
            >
              <bdi className="box-border caret-transparent leading-[22.4px] outline-[3px] no-underline">
                {props.phoneText}
              </bdi>
            </a>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 items-center gap-x-3 flex gap-y-3">
            <i className="box-border caret-transparent text-brand-600 block shrink-0 font-black leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-5 font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-brand-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
            <a
              href={props.emailHref}
              className="box-border caret-transparent text-slate-300 text-sm font-bold leading-5 outline-[3px] no-underline block min-h-[auto] min-w-[auto]"
            >
              {props.emailText}
            </a>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 items-start gap-x-3 flex gap-y-3">
            <i className="box-border caret-transparent text-brand-600 block shrink-0 font-black leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-5 mt-0.5 font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-brand-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
            <span className="box-border caret-transparent text-slate-300 block text-sm leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              {props.firstAddress}
            </span>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 items-start gap-x-3 flex gap-y-3">
            <i className="box-border caret-transparent text-brand-600 block shrink-0 font-black leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-5 mt-0.5 font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-brand-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free"></i>
            <span className="box-border caret-transparent text-slate-300 block text-sm leading-5 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              {props.secondAddress}
            </span>
          </li>
        </ul>
      )}
      {props.variant === "links" && (
        <ul className="box-border caret-transparent flex flex-col list-none outline-[3px] no-underline mb-4 pl-0 gap-x-3 gap-y-3">
          {props.links.map((link) => (
            <li
              key={`${link.href}-${link.text}`}
              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5"
            >
              <a
                href={link.href}
                className="box-border caret-transparent text-slate-300 text-sm font-bold leading-5 outline-[3px] no-underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
