import { useLanguage } from "@/i18n/LanguageContext";

export const WorldMapSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 box-border caret-transparent leading-[25.6px] outline-[3px] no-underline overflow-hidden pt-10 pb-6 font-cairo md:pt-20 md:pb-10">
      <div className="box-border caret-transparent outline-[3px] text-center no-underline mb-8 px-4">
        <h2 className="box-border caret-transparent text-teal-500 text-3xl font-bold leading-9 outline-[3px] no-underline mb-4 py-0 md:text-5xl md:leading-[48px] md:pt-[18px] md:pb-2.5">
          {t("worldMapSection.heading")}
        </h2>
        <p className="box-border caret-transparent text-zinc-900 text-base leading-[26px] max-w-xl outline-[3px] no-underline mb-4 mx-auto md:text-lg md:leading-[29.25px]">
          {t("worldMapSection.description")}
        </p>
      </div>
      <div className="items-center box-border caret-transparent flex h-[317px] justify-center max-w-[720px] outline-[3px] relative no-underline w-full mx-auto md:h-[608px]">
        <div className="bg-[radial-gradient(circle_at_50%_45%,rgba(0,186,179,0.22)_0%,rgba(0,186,179,0.06)_40%,rgba(248,248,246,0)_70%)] box-border caret-transparent blur-0 outline-[3px] pointer-events-none absolute no-underline z-0 inset-0"></div>
        <div className="bg-[radial-gradient(circle,rgba(0,186,179,0.06)_1px,rgba(0,0,0,0)_1px)] bg-size-[30px_30px] box-border caret-transparent outline-[3px] pointer-events-none absolute no-underline z-0 inset-0"></div>
        <div className="shadow-[rgba(0,186,179,0.18)_0px_0px_30px_0px] box-border caret-transparent outline-[3px] absolute no-underline translate-x-[-50.0%] translate-y-[-50.0%] z-[1] rounded-[999px] left-2/4 top-2/4">
          <div className="box-border caret-transparent outline-[3px] no-underline">
            <div className="box-border caret-transparent outline-[3px] relative no-underline">
              <div className="box-border caret-transparent outline-[3px] no-underline">
                <div className="box-border caret-transparent h-[317px] outline-[3px] relative no-underline w-screen md:h-[608px] md:w-[720px]">
                  <div className="box-border caret-transparent text-slate-500 hidden text-[10px] leading-4 opacity-70 outline-[3px] pointer-events-none absolute text-center no-underline w-full bottom-[5px] font-sans_serif">
                    {t("worldMapSection.mapControlsHint")}
                  </div>
                  <div className="bg-black/60 box-border caret-transparent text-zinc-100 hidden text-xs left-[-10000px] leading-[normal] max-w-[max(50%,150px)] outline-[3px] pointer-events-none absolute no-underline w-max px-[5px] py-[3px] rounded-[3px] font-sans_serif"></div>
                  <img
                    src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/image-1.png"
                    className="aspect-[auto_720_/_608] box-border caret-transparent h-[608px] max-w-full outline-[3px] no-underline w-[720px]"
                  />
                  <div className="box-border caret-transparent h-[317px] outline-[3px] pointer-events-none absolute no-underline w-screen overflow-hidden top-0 md:h-[608px] md:w-[720px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
