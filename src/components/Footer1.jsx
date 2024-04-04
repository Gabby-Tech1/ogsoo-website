import { memo, useMemo } from "react";

const Footer1 = memo(
  ({
    propMarginRight,
    propMargin,
    propMargin1,
    propMargin2,
    propMargin3,
    propMargin4,
  }) => {
    const footerStyle = useMemo(() => {
      return {
        marginRight: propMarginRight,
      };
    }, [propMarginRight]);

    const oUROFFERSStyle = useMemo(() => {
      return {
        margin: propMargin,
      };
    }, [propMargin]);

    const gETINTOUCHStyle = useMemo(() => {
      return {
        margin: propMargin1,
      };
    }, [propMargin1]);

    const jOINANDFOLLOWStyle = useMemo(() => {
      return {
        margin: propMargin2,
      };
    }, [propMargin2]);

    const gETINTOUCH1Style = useMemo(() => {
      return {
        margin: propMargin3,
      };
    }, [propMargin3]);

    const gETINTOUCH2Style = useMemo(() => {
      return {
        margin: propMargin4,
      };
    }, [propMargin4]);

    return (
      <footer
        className="self-stretch bg-salmon-100 flex flex-col items-end justify-start pt-6 px-0 pb-0 box-border gap-[17px] max-w-full text-center text-11xl text-white font-poppins-medium-25"
        style={footerStyle}
      >
        <div className="self-stretch h-[402px] relative bg-salmon-100 hidden" />
        <div className="w-[1421px] flex flex-row items-start justify-end py-0 px-9 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[23px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="w-[204px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                    <div
                      className="flex-1 relative font-semibold z-[1] mq450:text-lg mq800:text-5xl"
                      style={oUROFFERSStyle}
                    >
                      OUR OFFERS
                    </div>
                  </div>
                  <div className="relative text-6xl font-medium text-left z-[1] mq450:text-xl">
                    <p className="m-0">Hot odds</p>
                    <p className="m-0">Midnight odds</p>
                    <p className="m-0">Free Prediction Games</p>
                    <p className="m-0">Weekends odds</p>
                    <p className="m-0">VIP Games</p>
                  </div>
                </div>
              </div>
              <div className="relative text-6xl font-medium text-left z-[1] mq450:text-xl">
                Terms and conditions
              </div>
            </div>
            <div className="w-[485px] flex flex-col items-end justify-start py-0 pr-1.5 pl-0 box-border gap-[42px] max-w-full mq800:gap-[21px_42px]">
              <div className="self-stretch flex flex-col items-end justify-start max-w-full">
                <div className="w-[439px] flex flex-row items-start justify-end py-0 px-[49px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div
                    className="flex-1 relative font-semibold z-[1] mq450:text-lg mq800:text-5xl"
                    style={gETINTOUCHStyle}
                  >
                    GET IN TOUCH WITH US
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full mt-[-3px] text-6xl">
                  <div className="self-stretch flex flex-row items-start justify-center gap-[1px] max-w-full mq450:flex-wrap">
                    <img
                      className="h-[43px] w-[43px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icons8email50@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[283px] max-w-full">
                      <div className="self-stretch relative font-medium whitespace-nowrap z-[1] mq450:text-xl">
                        andrewfrimpong2724@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="h-[43px] flex flex-row items-start justify-start py-0 px-px box-border mt-[-3px] text-left">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="h-[43px] w-[43px] relative object-cover min-h-[43px] z-[2]"
                        loading="lazy"
                        alt=""
                        src="/icons8phone50@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="h-[38px] relative font-medium inline-block z-[1] mq450:text-xl">
                          + 233 537731624
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[441px] flex flex-row items-start justify-end py-0 px-[35px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div
                    className="self-stretch relative font-semibold z-[1] mq450:text-lg mq800:text-5xl"
                    style={jOINANDFOLLOWStyle}
                  >
                    JOIN AND FOLLOW US ON
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex flex-row items-start justify-center gap-[8px] mq450:flex-wrap">
                      <div className="h-[76px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                        <img
                          className="w-[76px] h-[76px] relative rounded-27xl object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/icons8telegram-1@2x.png"
                        />
                      </div>
                      <div className="h-[79px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                        <img
                          className="w-[76px] h-[76px] relative rounded-19xl object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/icons8tiktok50@2x.png"
                        />
                      </div>
                      <img
                        className="h-[76px] w-[76px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/icons8twitter48@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] flex flex-col items-start justify-start gap-[54px] max-w-full mq450:gap-[27px_54px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                <div className="w-[367px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
                  <div
                    className="flex-1 relative font-semibold inline-block max-w-full z-[1] mq450:text-lg mq800:text-5xl"
                    style={gETINTOUCH1Style}
                  >
                    Payment Methods:
                  </div>
                </div>
                <img
                  className="self-stretch h-[53px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/payment@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div
                    className="self-stretch relative font-semibold z-[1] mq450:text-lg mq800:text-5xl"
                    style={gETINTOUCH2Style}
                  >
                    Powered By:
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-8 box-border max-w-full text-left text-16xl text-whitesmoke">
                    <div className="flex flex-row items-start justify-center gap-[15px] mq450:flex-wrap">
                      <img
                        className="h-[82px] w-[82px] relative rounded-21xl object-cover z-[2]"
                        alt=""
                        src="/logo-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                        <h3 className="m-0 relative text-inherit italic font-bold font-inherit z-[1] mq450:text-2xl mq800:text-9xl">
                          OG ODDS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-dimgray-200 flex flex-row items-start justify-start pt-2.5 px-[533px] pb-[11px] box-border max-w-full z-[1] text-6xl mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[133px] mq800:pr-[133px] mq800:box-border mq1300:pl-[266px] mq1300:pr-[266px] mq1300:box-border">
          <div className="h-[59px] w-[1440px] relative bg-dimgray-200 hidden max-w-full" />
          <div className="w-[344px] relative font-medium inline-block shrink-0 z-[1] mq450:text-xl">
            Copyright Reserved C 2024
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer1;
