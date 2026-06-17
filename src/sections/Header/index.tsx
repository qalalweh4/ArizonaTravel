import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Header = () => {
  return (
    <header
      aria-label="Main navigation"
      className="bg-slate-950 bg-left-top border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 shadow-soft box-border caret-transparent h-[72px] leading-[25.6px] outline-[3px] fixed no-underline z-[1000] border-b-slate-800 border-b top-0 inset-x-0 font-cairo md:border-b-slate-800"
    >
      <div className="items-center box-border caret-transparent gap-x-4 flex h-full justify-between max-w-[1440px] outline-[3px] gap-y-4 no-underline mx-auto px-6 md:gap-x-2 md:gap-y-2 md:px-4">
        <HeaderLogo />
        <DesktopNavigation />
        <HeaderActions />
        <MobileMenuButton />
      </div>
    </header>
  );
};
