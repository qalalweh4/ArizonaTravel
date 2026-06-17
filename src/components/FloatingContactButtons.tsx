export const FloatingContactButtons = () => {
  return (
    <div className="box-border caret-transparent gap-x-2.5 flex flex-col leading-relaxed outline-[3px] fixed gap-y-2.5 no-underline z-[1001] right-5 bottom-5 font-cairo md:gap-x-[15px] md:gap-y-[15px] md:right-10 md:bottom-10">
      <a
        href="tel:+966541272537"
        title="Call us"
        aria-label="Call us"
        className="items-center bg-brand-600 shadow-soft box-border caret-transparent text-white flex text-xl h-[50px] justify-center leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[50px] rounded-full md:text-2xl md:h-[60px] md:leading-loose md:w-[60px] hover:bg-brand-700 transition-colors"
      >
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-3.svg"
          alt="Icon"
          className="caret-transparent text-2xl h-6 leading-loose outline-[3px] no-underline w-6"
        />
      </a>
      <a
        href="https://wa.me/966541272537"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp us"
        aria-label="WhatsApp us"
        className="items-center bg-green-500 shadow-soft box-border caret-transparent text-white flex text-xl h-[50px] justify-center leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[50px] rounded-full md:text-2xl md:h-[60px] md:leading-loose md:w-[60px] hover:bg-green-600 transition-colors"
      >
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-4.svg"
          alt="Icon"
          className="caret-transparent text-2xl h-6 leading-loose outline-[3px] no-underline w-6"
        />
      </a>
    </div>
  );
};
