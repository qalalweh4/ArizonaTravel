export type FeatureItemProps = {
  iconVariant: string;
  label: string;
};

export const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline">
      <i
        className={`box-border caret-transparent text-teal-500 block text-xl leading-7 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-6 font-font_awesome_7_free before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:text-xl before:not-italic before:normal-nums before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_7_free ${props.iconVariant}`}
      ></i>
      <span className="box-border caret-transparent text-zinc-900 block font-medium leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        {props.label}
      </span>
    </div>
  );
};
