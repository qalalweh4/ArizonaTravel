import { FooterContactSection } from "@/sections/Footer/components/FooterContactSection";
import { FooterMain } from "@/sections/Footer/components/FooterMain";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline font-cairo">
      <FooterContactSection />
      <FooterMain />
    </footer>
  );
};
