import { FooterContactSection } from "@/sections/Footer/components/FooterContactSection";
import { FooterMain } from "@/sections/Footer/components/FooterMain";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 box-border caret-transparent leading-relaxed outline-[3px] no-underline font-cairo">
      <FooterContactSection />
      <FooterMain />
    </footer>
  );
};
