import { Link } from "react-router-dom";
import logoDark from "../../../assets/Logo/logo3-dark.png";
import logoLight from "../../../assets/Logo/logo3-light.png";
import { useTheme } from "@/contexts/ThemeContext";

export const HeaderLogo = () => {
  const { theme } = useTheme();

  return (
    <Link
      aria-label="Arizona Travel home"
      to="/en"
      className="flex shrink-0 items-center no-underline outline-[3px]"
    >
      <img
        src={theme === "dark" ? logoDark : logoLight}
        alt="Arizona Travel"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
};
