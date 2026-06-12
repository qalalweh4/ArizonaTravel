import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link
      aria-label="Travel Gate home"
      to="/en"
      className="items-center box-border caret-transparent text-sky-600 flex shrink-0 text-[19.2px] leading-[30.72px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[25.6px]"
    >
      <div className="box-border caret-transparent shrink-0 text-[19.2px] h-[34px] leading-[30.72px] min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[136px] md:text-base md:h-9 md:leading-[25.6px] md:w-[149px]">
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/Final_Logo1_-_Copy.webp"
          alt="Travel Gate"
          className="aspect-[auto_149_/_36] box-border caret-transparent text-[19.2px] h-full leading-[30.72px] max-w-full object-contain opacity-0 outline-[3px] absolute no-underline w-full inset-0 md:text-base md:leading-[25.6px] md:opacity-100"
        />
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/logo1.png"
          alt=""
          className="aspect-[auto_149_/_36] box-border caret-transparent text-[19.2px] h-full leading-[30.72px] max-w-full object-contain opacity-100 outline-[3px] absolute no-underline w-full inset-0 md:text-base md:leading-[25.6px] md:opacity-0"
        />
      </div>
    </Link>
  );
};
