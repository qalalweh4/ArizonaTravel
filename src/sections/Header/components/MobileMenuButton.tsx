type Props = { isOpen: boolean; onClick: () => void };

export const MobileMenuButton = ({ isOpen, onClick }: Props) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="items-center bg-transparent bg-[position:0px_0px] caret-transparent text-white gap-x-[5px] flex flex-col h-11 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] text-center no-underline w-11 mx-2.5 p-1 rounded-lg md:hidden md:min-h-0 md:min-w-0 md:ml-[140px] md:mr-0"
    >
      <span className="bg-slate-50 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm transition-all duration-200" style={{ transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
      <span className="bg-slate-50 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm transition-all duration-200" style={{ opacity: isOpen ? 0 : 1 }}></span>
      <span className="bg-slate-50 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm transition-all duration-200" style={{ transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
    </button>
  );
};
