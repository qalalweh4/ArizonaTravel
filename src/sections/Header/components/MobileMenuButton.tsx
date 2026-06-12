export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Open menu"
      className="items-center bg-transparent bg-[position:0px_0px] caret-transparent text-white gap-x-[5px] flex flex-col h-11 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] text-center no-underline w-11 mx-2.5 p-1 rounded-lg md:hidden md:min-h-0 md:min-w-0 md:ml-[140px] md:mr-0"
    >
      <span className="bg-zinc-900 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm md:bg-white md:min-h-0 md:min-w-0 hover:bg-white"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm md:bg-white md:min-h-0 md:min-w-0 hover:bg-white"></span>
      <span className="bg-zinc-900 box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] rounded-sm md:bg-white md:min-h-0 md:min-w-0 hover:bg-white"></span>
    </button>
  );
};
