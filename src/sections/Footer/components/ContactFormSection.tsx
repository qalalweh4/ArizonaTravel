import { useLanguage } from "@/i18n/LanguageContext";

export const ContactFormSection = () => {
  const { t } = useLanguage();

  return (
    <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <h2 className="box-border caret-transparent text-slate-50 text-2xl font-extrabold tracking-tight leading-8 outline-[3px] text-center no-underline mb-2 py-0 md:text-3xl md:leading-9 md:pt-[18px] md:pb-2.5">
        {t("footer.contactForm.heading")}
      </h2>
      <p className="box-border caret-transparent text-slate-300 text-sm leading-snug outline-[3px] no-underline mb-8">
        {t("footer.contactForm.subheading")}
      </p>
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <div className="box-border caret-transparent leading-[normal] outline-[3px] no-underline font-helvetica_neue">
          <div className="box-border caret-transparent leading-[25.6px] outline-[3px] no-underline font-cairo">
            <div className="bg-slate-900 border border-slate-800 border-b-brand-600 box-border caret-transparent max-w-[700px] min-h-[250px] outline-[3px] relative no-underline mx-auto border-b-[5px] border-solid rounded-2xl shadow-card">
              <div className="box-border caret-transparent outline-[3px] no-underline p-2.5"></div>
              <div className="box-border caret-transparent outline-[3px] no-underline px-[18px] py-3.5 md:px-[31px]">
                <form className="box-border caret-transparent outline-[3px] no-underline">
                  <div className="box-border caret-transparent outline-[3px] no-underline">
                    <div className="box-border caret-transparent outline-[3px] no-underline mb-[15px]">
                      <div className="box-border caret-transparent outline-[3px] no-underline">
                        <div className="box-border caret-transparent outline-[3px] no-underline">
                          <div className="box-border caret-transparent outline-[3px] relative no-underline w-full mb-[5px]">
                            <input
                              name="name"
                              type="string"
                              placeholder=" "
                              className="peer bg-black/0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))] box-border caret-transparent text-slate-50 h-[52px] tracking-[-0.3px] leading-[normal] outline-[3px] no-underline w-full border pl-2.5 pr-[35px] pt-[17px] pb-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-slate-700 font-helvetica_neue focus:border-brand-500"
                            />
                            <label className="box-border caret-transparent text-slate-400 block text-[15px] leading-[17px] opacity-80 outline-[3px] pointer-events-none absolute no-underline text-ellipsis text-nowrap translate-y-[-50.0%] overflow-hidden pl-[11px] pr-[35px] left-0 right-[5px] top-2/4 font-helvetica_neue transition-opacity peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                              {t("footer.contactForm.nameLabel")}
                              <span className="box-border caret-transparent text-red-600 leading-6 outline-[3px] no-underline text-nowrap font-cairo">
                                *
                              </span>
                            </label>
                            <div
                              role="alert"
                              className="bg-red-500 box-border caret-transparent text-white hidden text-[13px] leading-[normal] outline-[3px] absolute no-underline z-10 pl-[22px] pr-1 py-0.5 rounded-r-sm rounded-b-sm left-3 font-helvetica_neue before:accent-auto before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuMDE2IDEyLjkxMi02Ljg4LTExLjQ1OGMtLjUzLS44OC0xLjc5My0uODgtMi4zMTEgMEwuOTQ1IDEyLjkxMmMtLjU0LjkwMi4xMTMgMi4wNDEgMS4xNjIgMi4wNDFoMTMuNzU4YTEuMzQ3IDEuMzQ3IDAgMCAwIDEuMTUtMi4wNDF6TTcuOTk0IDUuNDQ2YS45MS45MSAwIDAgMSAuOTEzLS45MTNoLjEyNGEuOTEuOTEgMCAwIDEgLjkxNC45MTN2My40MTdhLjkxLjkxIDAgMCAxLS45MTQuOTE0aC0uMTI0YS45MS45MSAwIDAgMS0uOTEzLS45MTR6bTIuMTMxIDYuNjMxYzAgLjYzMi0uNTE4IDEuMTUtMS4xNSAxLjE1cy0xLjE1LS41MTgtMS4xNS0xLjE1LjUxOC0xLjE1IDEuMTUtMS4xNSAxLjE1LjUxOSAxLjE1IDEuMTUiLz48L3N2Zz4=)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-[13px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[15px] before:border-separate before:left-[3px] before:top-[3px] before:font-helvetica_neue after:accent-auto after:border-b-red-500 after:border-l-red-500 after:box-border after:caret-transparent after:text-white after:block after:text-[13px] after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-r-transparent after:border-t-transparent after:border-separate after:border-[3px] after:border-solid after:left-0 after:bottom-full after:font-helvetica_neue"
                            >
                              {t("footer.contactForm.requiredField")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent outline-[3px] no-underline mb-[15px]">
                      <div className="box-border caret-transparent outline-[3px] no-underline">
                        <div className="box-border caret-transparent outline-[3px] no-underline">
                          <div className="box-border caret-transparent outline-[3px] relative no-underline w-full mb-[5px]">
                            <input
                              name="phone"
                              type="tel"
                              placeholder=" "
                              className="peer bg-black/0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))] box-border caret-transparent text-slate-50 h-[52px] tracking-[-0.3px] leading-[normal] outline-[3px] no-underline w-full border pl-2.5 pr-[35px] pt-[17px] pb-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-slate-700 font-helvetica_neue focus:border-brand-500"
                            />
                            <label className="box-border caret-transparent text-slate-400 block text-[13px] leading-[17px] opacity-80 outline-[3px] pointer-events-none absolute no-underline text-ellipsis text-nowrap overflow-hidden pl-[11px] pr-[35px] left-0 right-[5px] top-2 font-helvetica_neue transition-opacity peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                              {t("footer.contactForm.phoneLabel")}
                              <span className="box-border caret-transparent text-red-600 leading-[20.8px] outline-[3px] no-underline text-nowrap font-cairo">
                                *
                              </span>
                            </label>
                            <div
                              role="alert"
                              className="bg-red-500 box-border caret-transparent text-white hidden text-[13px] leading-[normal] outline-[3px] absolute no-underline z-10 pl-[22px] pr-1 py-0.5 rounded-r-sm rounded-b-sm left-3 font-helvetica_neue before:accent-auto before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuMDE2IDEyLjkxMi02Ljg4LTExLjQ1OGMtLjUzLS44OC0xLjc5My0uODgtMi4zMTEgMEwuOTQ1IDEyLjkxMmMtLjU0LjkwMi4xMTMgMi4wNDEgMS4xNjIgMi4wNDFoMTMuNzU4YTEuMzQ3IDEuMzQ3IDAgMCAwIDEuMTUtMi4wNDF6TTcuOTk0IDUuNDQ2YS45MS45MSAwIDAgMSAuOTEzLS45MTNoLjEyNGEuOTEuOTEgMCAwIDEgLjkxNC45MTN2My40MTdhLjkxLjkxIDAgMCAxLS45MTQuOTE0aC0uMTI0YS45MS45MSAwIDAgMS0uOTEzLS45MTR6bTIuMTMxIDYuNjMxYzAgLjYzMi0uNTE4IDEuMTUtMS4xNSAxLjE1cy0xLjE1LS41MTgtMS4xNS0xLjE1LjUxOC0xLjE1IDEuMTUtMS4xNSAxLjE1LjUxOSAxLjE1IDEuMTUiLz48L3N2Zz4=)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-[13px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[15px] before:border-separate before:left-[3px] before:top-[3px] before:font-helvetica_neue after:accent-auto after:border-b-red-500 after:border-l-red-500 after:box-border after:caret-transparent after:text-white after:block after:text-[13px] after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-r-transparent after:border-t-transparent after:border-separate after:border-[3px] after:border-solid after:left-0 after:bottom-full after:font-helvetica_neue"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent outline-[3px] no-underline mb-[15px]">
                      <div className="box-border caret-transparent outline-[3px] no-underline">
                        <div className="box-border caret-transparent outline-[3px] no-underline">
                          <div className="box-border caret-transparent outline-[3px] relative no-underline w-full mb-[5px]">
                            <input
                              name="email"
                              type="email"
                              placeholder=" "
                              className="peer bg-black/0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))] box-border caret-transparent text-slate-50 h-[52px] tracking-[-0.3px] leading-[normal] outline-[3px] no-underline w-full border pl-2.5 pr-[35px] pt-[17px] pb-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-slate-700 font-helvetica_neue focus:border-brand-500"
                            />
                            <label className="box-border caret-transparent text-slate-400 block text-[15px] leading-[17px] opacity-80 outline-[3px] pointer-events-none absolute no-underline text-ellipsis text-nowrap translate-y-[-50.0%] overflow-hidden pl-[11px] pr-[35px] left-0 right-[5px] top-2/4 font-helvetica_neue transition-opacity peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                              {t("footer.contactForm.emailLabel")}
                              <span className="box-border caret-transparent text-red-600 hidden leading-6 outline-[3px] no-underline text-nowrap font-cairo">
                                *
                              </span>
                            </label>
                            <div
                              role="alert"
                              className="bg-red-500 box-border caret-transparent text-white hidden text-[13px] leading-[normal] outline-[3px] absolute no-underline z-10 pl-[22px] pr-1 py-0.5 rounded-r-sm rounded-b-sm left-3 font-helvetica_neue before:accent-auto before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuMDE2IDEyLjkxMi02Ljg4LTExLjQ1OGMtLjUzLS44OC0xLjc5My0uODgtMi4zMTEgMEwuOTQ1IDEyLjkxMmMtLjU0LjkwMi4xMTMgMi4wNDEgMS4xNjIgMi4wNDFoMTMuNzU4YTEuMzQ3IDEuMzQ3IDAgMCAwIDEuMTUtMi4wNDF6TTcuOTk0IDUuNDQ2YS45MS45MSAwIDAgMSAuOTEzLS45MTNoLjEyNGEuOTEuOTEgMCAwIDEgLjkxNC45MTN2My40MTdhLjkxLjkxIDAgMCAxLS45MTQuOTE0aC0uMTI0YS45MS45MSAwIDAgMS0uOTEzLS45MTR6bTIuMTMxIDYuNjMxYzAgLjYzMi0uNTE4IDEuMTUtMS4xNSAxLjE1cy0xLjE1LS41MTgtMS4xNS0xLjE1LjUxOC0xLjE1IDEuMTUtMS4xNSAxLjE1LjUxOSAxLjE1IDEuMTUiLz48L3N2Zz4=)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-[13px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[15px] before:border-separate before:left-[3px] before:top-[3px] before:font-helvetica_neue after:accent-auto after:border-b-red-500 after:border-l-red-500 after:box-border after:caret-transparent after:text-white after:block after:text-[13px] after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-r-transparent after:border-t-transparent after:border-separate after:border-[3px] after:border-solid after:left-0 after:bottom-full after:font-helvetica_neue"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent outline-[3px] no-underline mb-[15px]">
                      <div className="box-border caret-transparent outline-[3px] no-underline">
                        <div className="box-border caret-transparent outline-[3px] no-underline">
                          <div className="box-border caret-transparent outline-[3px] relative no-underline w-full mb-[5px]">
                            <textarea
                              placeholder=" "
                              className="peer bg-black/0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))] box-border caret-transparent text-slate-50 h-[104px] tracking-[-0.3px] leading-[normal] max-w-full min-h-[52px] min-w-full outline-[3px] resize-y no-underline w-full pl-2.5 pr-[35px] pt-[23px] pb-0 rounded-bl rounded-br rounded-tl rounded-tr border border-solid border-slate-700 focus:border-brand-500 font-helvetica_neue"
                            ></textarea>
                            <label className="box-border caret-transparent text-slate-400 block text-[15px] leading-[17px] opacity-80 outline-[3px] pointer-events-none absolute no-underline text-ellipsis text-nowrap overflow-hidden pl-[11px] pr-[35px] left-0 right-[5px] top-[15px] font-helvetica_neue transition-opacity peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                              {t("footer.contactForm.messageLabel")}
                              <span className="box-border caret-transparent text-red-600 leading-6 outline-[3px] no-underline text-nowrap font-cairo">
                                *
                              </span>
                            </label>
                            <div
                              role="alert"
                              className="bg-red-500 box-border caret-transparent text-white hidden text-[13px] leading-[normal] outline-[3px] absolute no-underline z-10 pl-[22px] pr-1 py-0.5 rounded-r-sm rounded-b-sm left-3 font-helvetica_neue before:accent-auto before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuMDE2IDEyLjkxMi02Ljg4LTExLjQ1OGMtLjUzLS44OC0xLjc5My0uODgtMi4zMTEgMEwuOTQ1IDEyLjkxMmMtLjU0LjkwMi4xMTMgMi4wNDEgMS4xNjIgMi4wNDFoMTMuNzU4YTEuMzQ3IDEuMzQ3IDAgMCAwIDEuMTUtMi4wNDF6TTcuOTk0IDUuNDQ2YS45MS45MSAwIDAgMSAuOTEzLS45MTNoLjEyNGEuOTEuOTEgMCAwIDEgLjkxNC45MTN2My40MTdhLjkxLjkxIDAgMCAxLS45MTQuOTE0aC0uMTI0YS45MS45MSAwIDAgMS0uOTEzLS45MTR6bTIuMTMxIDYuNjMxYzAgLjYzMi0uNTE4IDEuMTUtMS4xNSAxLjE1cy0xLjE1LS41MTgtMS4xNS0xLjE1LjUxOC0xLjE1IDEuMTUtMS4xNSAxLjE1LjUxOSAxLjE1IDEuMTUiLz48L3N2Zz4=)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-[13px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[15px] before:border-separate before:left-[3px] before:top-[3px] before:font-helvetica_neue after:accent-auto after:border-b-red-500 after:border-l-red-500 after:box-border after:caret-transparent after:text-white after:block after:text-[13px] after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-r-transparent after:border-t-transparent after:border-separate after:border-[3px] after:border-solid after:left-0 after:bottom-full after:font-helvetica_neue"
                            >
                              {t("footer.contactForm.requiredField")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px] no-underline">
                    <div className="box-border caret-transparent hidden outline-[3px] no-underline"></div>
                  </div>
                  <div className="items-center box-border caret-transparent flex ml-[-5px] mr-[-5px] outline-[3px] relative no-underline">
                    <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] no-underline p-[5px]">
                      <button
                        type="submit"
                        aria-label="Send"
                        className="bg-sunset-500 shadow-soft caret-transparent text-white text-[15px] font-semibold leading-snug min-h-[52px] outline-[3px] relative text-center no-underline w-full px-5 py-[15px] rounded-bl rounded-br rounded-tl rounded-tr font-helvetica_neue hover:bg-sunset-600 transition-colors"
                      >
                        {t("footer.contactForm.send")}
                      </button>
                    </div>
                  </div>
                  <span className="box-border caret-transparent text-red-600 hidden outline-[3px] no-underline">
                    Debug: fill fields
                  </span>
                </form>
              </div>
              <div className="box-border caret-transparent outline-[3px] no-underline">
                <div
                  role="status"
                  aria-label=""
                  className="items-center bg-white bottom-[-5px] box-border caret-transparent hidden flex-col justify-center outline-[3px] absolute no-underline z-[15] overflow-hidden pb-5 top-0 inset-x-0"
                >
                  <div className="box-border caret-transparent h-[174px] outline-[3px] absolute no-underline w-[263px] top-2/4">
                    <img
                      src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-16.svg"
                      alt="Icon"
                      className="box-border caret-transparent text-3xl leading-[48px] outline-[3px] no-underline"
                    />
                  </div>
                </div>
                <div
                  role="status"
                  className="items-center bg-lime-400 bottom-[-5px] box-border caret-transparent hidden flex-col justify-center outline-[3px] absolute no-underline z-[15] overflow-hidden top-0 inset-x-0"
                >
                  <div className="box-border caret-transparent max-w-[330px] outline-[3px] absolute text-center no-underline top-2/4">
                    <div className="bg-[url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%200%20169%20169%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cdefs%3E%3Ccircle%20id%3D%22a%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2265.5%22/%3E%3Cfilter%20x%3D%22-.8%25%22%20y%3D%22-.8%25%22%20width%3D%22101.5%25%22%20height%3D%22101.5%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22b%22%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner1%22/%3E%3CfeOffset%20dx%3D%22-1%22%20dy%3D%22-1%22%20in%3D%22shadowBlurInner1%22%20result%3D%22shadowOffsetInner1%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner1%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0886691434%200%22%20in%3D%22shadowInnerInner1%22%20result%3D%22shadowMatrixInner1%22/%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner2%22/%3E%3CfeOffset%20dx%3D%221%22%20dy%3D%221%22%20in%3D%22shadowBlurInner2%22%20result%3D%22shadowOffsetInner2%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner2%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner2%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.292285839%200%22%20in%3D%22shadowInnerInner2%22%20result%3D%22shadowMatrixInner2%22/%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner1%22/%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner2%22/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20stroke-opacity%3D%22.05%22%20stroke%3D%22%23000%22%20fill-opacity%3D%22.07%22%20fill%3D%22%23000%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2284%22/%3E%3Cuse%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url%28%23b%29%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cpath%20fill%3D%22%23A0BE47%22%20d%3D%22M76.853%20107L57%2087.651l6.949-6.771%2012.904%2012.576L106.051%2065%20113%2071.772z%22/%3E%3C/g%3E%3C/svg%3E)] bg-no-repeat box-border caret-transparent inline-block h-[169px] outline-[3px] no-underline w-[169px] mb-[26px]"></div>
                    <div className="box-border caret-transparent text-black text-base leading-[18px] opacity-80 outline-[3px] no-underline mb-[27px] font-helvetica_neue md:text-xl md:leading-[30px]">
                      <p className="box-border caret-transparent text-base leading-[25.6px] outline-[3px] no-underline font-cairo md:text-xl md:leading-8">
                        {t("footer.contactForm.requestSent")}
                      </p>
                      <p className="box-border caret-transparent text-base leading-[25.6px] outline-[3px] no-underline font-cairo md:text-xl md:leading-8"></p>
                    </div>
                  </div>
                  <div className="box-border caret-transparent basis-[0%] grow outline-[3px] no-underline w-full"></div>
                </div>
                <div
                  role="alert"
                  className="items-center bg-red-500 bottom-[-5px] box-border caret-transparent hidden flex-col justify-center outline-[3px] absolute no-underline z-[15] overflow-hidden top-0 inset-x-0"
                >
                  <div className="box-border caret-transparent max-w-[330px] outline-[3px] absolute text-center no-underline top-2/4">
                    <div className="bg-[url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%200%20169%20169%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cdefs%3E%3Ccircle%20id%3D%22a%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2265.5%22/%3E%3Cfilter%20x%3D%22-.8%25%22%20y%3D%22-.8%25%22%20width%3D%22101.5%25%22%20height%3D%22101.5%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22b%22%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner1%22/%3E%3CfeOffset%20dx%3D%22-1%22%20dy%3D%22-1%22%20in%3D%22shadowBlurInner1%22%20result%3D%22shadowOffsetInner1%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner1%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0886691434%200%22%20in%3D%22shadowInnerInner1%22%20result%3D%22shadowMatrixInner1%22/%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner2%22/%3E%3CfeOffset%20dx%3D%221%22%20dy%3D%221%22%20in%3D%22shadowBlurInner2%22%20result%3D%22shadowOffsetInner2%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner2%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner2%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.292285839%200%22%20in%3D%22shadowInnerInner2%22%20result%3D%22shadowMatrixInner2%22/%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner1%22/%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner2%22/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20stroke-opacity%3D%22.05%22%20stroke%3D%22%23000%22%20fill-opacity%3D%22.07%22%20fill%3D%22%23000%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2284%22/%3E%3Cuse%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url%28%23b%29%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cpath%20d%3D%22M91.638%2084.567l14.496%2014.495-7.072%207.072-14.495-14.496-14.496%2014.496L63%2099.062l14.496-14.495L63%2070.07%2070.071%2063l14.496%2014.496L99.062%2063l7.072%207.071-14.496%2014.496z%22%20fill%3D%22%23F25830%22/%3E%3C/g%3E%3C/svg%3E)] bg-no-repeat box-border caret-transparent inline-block h-[169px] outline-[3px] no-underline w-[169px] mb-[30px]"></div>
                    <div className="box-border caret-transparent text-white text-base leading-[18px] outline-[3px] no-underline mb-[30px] font-helvetica_neue md:text-xl md:leading-[30px]">
                      <p className="box-border caret-transparent text-base leading-[25.6px] outline-[3px] no-underline mb-4 font-cairo md:text-xl md:leading-8"></p>
                    </div>
                    <button
                      aria-label="Resend"
                      className="bg-transparent caret-transparent text-white text-[15px] font-semibold leading-[22px] min-h-[52px] outline-[3px] relative no-underline border mb-[15px] px-5 py-[15px] rounded-bl rounded-br rounded-tl rounded-tr border-white font-helvetica_neue"
                    >
                      {t("footer.contactForm.resend")}
                    </button>
                  </div>
                  <div className="box-border caret-transparent basis-[0%] grow outline-[3px] no-underline w-full"></div>
                </div>
                <div
                  role="status"
                  className="items-center bg-white bottom-[-5px] box-border caret-transparent hidden flex-col justify-center outline-[3px] absolute no-underline z-[15] overflow-hidden top-0 inset-x-0"
                >
                  <div className="box-border caret-transparent max-w-[330px] outline-[3px] absolute text-center no-underline top-2/4">
                    <div className="bg-[url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%200%20169%20169%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%3Cdefs%3E%3Ccircle%20id%3D%22a%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2265.5%22/%3E%3Cfilter%20x%3D%22-.8%25%22%20y%3D%22-.8%25%22%20width%3D%22101.5%25%22%20height%3D%22101.5%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22b%22%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner1%22/%3E%3CfeOffset%20dx%3D%22-1%22%20dy%3D%22-1%22%20in%3D%22shadowBlurInner1%22%20result%3D%22shadowOffsetInner1%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner1%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0886691434%200%22%20in%3D%22shadowInnerInner1%22%20result%3D%22shadowMatrixInner1%22/%3E%3CfeGaussianBlur%20stdDeviation%3D%22.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner2%22/%3E%3CfeOffset%20dx%3D%221%22%20dy%3D%221%22%20in%3D%22shadowBlurInner2%22%20result%3D%22shadowOffsetInner2%22/%3E%3CfeComposite%20in%3D%22shadowOffsetInner2%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner2%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.292285839%200%22%20in%3D%22shadowInnerInner2%22%20result%3D%22shadowMatrixInner2%22/%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner1%22/%3E%3CfeMergeNode%20in%3D%22shadowMatrixInner2%22/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20stroke-opacity%3D%22.05%22%20stroke%3D%22%23000%22%20fill-opacity%3D%22.07%22%20fill%3D%22%23000%22%20cx%3D%2284.5%22%20cy%3D%2284.5%22%20r%3D%2284%22/%3E%3Cuse%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url%28%23b%29%22%20xlink%3Ahref%3D%22%23a%22/%3E%3Cpath%20d%3D%22M114.29%2099.648L89.214%2058.376c-1.932-3.168-6.536-3.168-8.427%200L55.709%2099.648c-1.974%203.25.41%207.352%204.234%207.352h50.155c3.782%200%206.166-4.103%204.193-7.352zM81.404%2072.756c0-1.828%201.48-3.29%203.33-3.29h.452c1.85%200%203.33%201.462%203.33%203.29v12.309c0%201.827-1.48%203.29-3.33%203.29h-.453c-1.85%200-3.33-1.463-3.33-3.29V72.756zm7.77%2023.886c0%202.274-1.892%204.143-4.194%204.143s-4.193-1.869-4.193-4.143c0-2.275%201.891-4.144%204.193-4.144%202.302%200%204.193%201.869%204.193%204.144z%22%20fill%3D%22%23000%22%20opacity%3D%22.4%22/%3E%3C/g%3E%3C/svg%3E)] bg-no-repeat box-border caret-transparent inline-block h-[169px] outline-[3px] no-underline w-[169px] mb-7">
                      <img
                        src="https://c.animaapp.com/mq9zlaoimPKAP5/assets/icon-17.svg"
                        alt="Icon"
                        className="box-border caret-transparent text-3xl leading-[48px] outline-[3px] no-underline"
                      />
                    </div>
                    <div className="box-border caret-transparent text-slate-800 text-base leading-[18px] opacity-80 outline-[3px] no-underline mb-[35px] font-helvetica_neue md:text-xl md:leading-[30px]">
                      <p className="box-border caret-transparent text-base leading-[25.6px] outline-[3px] no-underline mb-4 font-cairo md:text-xl md:leading-8">
                        {t("footer.contactForm.formDisabled")}
                      </p>
                    </div>
                  </div>
                  <div className="box-border caret-transparent basis-[0%] grow outline-[3px] no-underline w-full"></div>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex flex-wrap outline-[3px] text-right no-underline -mt-2.5 px-[31px] py-2.5">
                <select className="bg-transparent caret-transparent hidden leading-[normal] outline-[3px] text-start no-underline">
                  <option
                    value="ar"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    ar
                  </option>
                  <option
                    value="br"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    br
                  </option>
                  <option
                    value="de"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    de
                  </option>
                  <option
                    value="en"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    en
                  </option>
                  <option
                    value="fr"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    fr
                  </option>
                  <option
                    value="hi"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    hi
                  </option>
                  <option
                    value="id"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    id
                  </option>
                  <option
                    value="in"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    in
                  </option>
                  <option
                    value="it"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    it
                  </option>
                  <option
                    value="ja"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    ja
                  </option>
                  <option
                    value="kz"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    kz
                  </option>
                  <option
                    value="la"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    la
                  </option>
                  <option
                    value="ms"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    ms
                  </option>
                  <option
                    value="pl"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    pl
                  </option>
                  <option
                    value="ru"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    ru
                  </option>
                  <option
                    value="sc"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    sc
                  </option>
                  <option
                    value="tc"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    tc
                  </option>
                  <option
                    value="th"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    th
                  </option>
                  <option
                    value="tr"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    tr
                  </option>
                  <option
                    value="ua"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    ua
                  </option>
                  <option
                    value="vn"
                    className="items-center box-border caret-transparent gap-x-2 leading-[25.6px] min-h-6 min-w-6 outline-[3px] gap-y-2 no-underline pb-0 px-0"
                  >
                    vn
                  </option>
                </select>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                  <span className="items-center box-border caret-transparent inline-flex outline-[3px] no-underline">
                    <a
                      href="https://www.bitrix24.com/abuse/?b24_form_id=48&b24_address=https%3A%2F%2Ftravelgate.bitrix24.ae&b24_form_address=https%3A%2F%2Ftravelgateksa.com%2Fen"
                      className="box-border caret-transparent text-black block text-xs leading-[normal] min-h-[auto] min-w-[auto] opacity-40 outline-[3px] no-underline border-b border-solid font-helvetica_neue hover:text-brand-600 hover:border-l-brand-600 hover:border-r-brand-600 hover:border-t-brand-600"
                    >
                      {t("footer.contactForm.reportAbuse")}
                    </a>
                    <span
                      title={t("footer.contactForm.reportAbuseTooltip")}
                      className="bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27none%27%3E%3Cpath%20fill=%27%23525C69%27%20fill-rule=%27evenodd%27%20d=%27M20%2012a8%208%200%201%201-16%200%208%208%200%200%201%2016%200m-9.007%202.629v1.807h1.842v-1.807zm-.164-3.872H9.104q.012-.634.217-1.161.205-.528.575-.915a2.6%202.6%200%200%201%20.891-.605%203%203%200%200%201%201.168-.217q.833%200%201.39.229.558.229.898.57a2.1%202.1%200%200%201%20.634%201.467q0%20.561-.147.926a2.3%202.3%200%200%201-.845%201.062q-.264.18-.499.363-.234.181-.416.417a1.2%201.2%200%200%200-.229.586v.446h-1.584v-.528q.035-.504.194-.845.157-.34.37-.58.21-.24.445-.417a7%207%200%200%200%20.434-.352q.199-.176.323-.387a.96.96%200%200%200%20.111-.528q0-.54-.264-.798t-.733-.258a1.14%201.14%200%200%200-.546.123%201.1%201.1%200%200%200-.375.329q-.147.206-.217.48-.07.277-.07.593%27%20clip-rule=%27evenodd%27/%3E%3C/svg%3E)] bg-center bg-no-repeat bg-size-[100%] box-border caret-transparent block h-5 min-h-[auto] min-w-[auto] opacity-35 outline-[3px] no-underline w-5 ml-[5px] mr-auto"
                    ></span>
                  </span>
                  <div className="box-border caret-transparent outline-[3px] no-underline">
                    <div className="box-border caret-transparent outline-[3px] no-underline">
                      <div className="bg-black/50 box-border caret-transparent hidden outline-[3px] fixed no-underline z-[15000] inset-0"></div>
                      <div className="items-center box-border caret-transparent hidden justify-center outline-[3px] fixed no-underline z-[1100001] inset-0">
                        <div className="bg-white box-border caret-transparent max-w-[600px] outline-[3px] relative no-underline w-[calc(100%_-_5px)] z-[10001] rounded-md">
                          <button
                            type="button"
                            aria-label=""
                            className="bg-brand-600 caret-transparent text-white block h-7 opacity-50 outline-[3px] absolute text-center no-underline w-7 z-[220] mx-2.5 px-6 py-1.5 rounded-full right-[23px] top-3 md:ml-[140px] md:mr-0 md:px-[50px] md:py-2.5 before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[normal] before:leading-relaxed before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:left-2/4 before:top-2/4 before:font-cairo after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[15px] after:tracking-[normal] after:leading-relaxed after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:border-separate after:left-2/4 after:top-2/4 after:font-cairo"
                          ></button>
                          <div className="box-border caret-transparent outline-[3px] no-underline">
                            <div className="box-border caret-transparent max-h-[850px] outline-[3px] overflow-x-hidden overflow-y-auto no-underline z-[200]">
                              <div className="items-center border-b-gray-600/10 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex min-h-[50px] outline-[3px] relative no-underline mb-2.5 pl-3 pr-[52px] pt-3 pb-3.5 border-b border-solid">
                                <div className="box-border caret-transparent text-black text-[15px] leading-6 outline-[3px] no-underline text-nowrap overflow-hidden font-helvetica_neue">
                                  {t("footer.contactForm.reportAbuse")}
                                </div>
                              </div>
                              <div className="box-border caret-transparent text-black text-sm leading-[19px] min-h-[60px] outline-[3px] no-underline font-helvetica_neue">
                                <div className="box-border caret-transparent leading-[22.4px] outline-[3px] text-start no-underline p-3 font-cairo">
                                  {t("footer.contactForm.reportAbuseTooltip")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
