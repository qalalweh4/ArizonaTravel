export const FloatingContactButtons = () => {
  return (
    <div className="box-border caret-transparent gap-x-2.5 flex flex-col leading-[25.6px] outline-[3px] fixed gap-y-2.5 no-underline z-[1001] right-5 bottom-5 font-cairo md:gap-x-[15px] md:gap-y-[15px] md:right-10 md:bottom-10">
      <div
        title="Call us"
        aria-label="Call us"
        className="items-center bg-teal-600 shadow-[rgb(153,153,153)_2px_2px_3px_0px] box-border caret-transparent text-white flex text-xl h-[50px] justify-center leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[50px] rounded-[50px] md:text-2xl md:h-[60px] md:leading-[38.4px] md:w-[60px] hover:bg-sky-700"
      >
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-3.svg"
          alt="Icon"
          className="caret-transparent text-2xl h-6 leading-[38.4px] outline-[3px] no-underline w-6"
        />
      </div>
      <div
        title="WhatsApp us"
        aria-label="WhatsApp us"
        className="items-center bg-green-500 shadow-[rgb(153,153,153)_2px_2px_3px_0px] box-border caret-transparent text-white flex text-xl h-[50px] justify-center leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[50px] rounded-[50px] md:text-2xl md:h-[60px] md:leading-[38.4px] md:w-[60px] hover:bg-teal-600"
      >
        <img
          src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-4.svg"
          alt="Icon"
          className="caret-transparent text-2xl h-6 leading-[38.4px] outline-[3px] no-underline w-6"
        />
      </div>
    </div>
  );
};
