import VIPNavBar from "../components/VIPNavBar";
import MainVIPCardDetails2 from "../components/MainVIPCardDetails2";
import FrameComponent1 from "../components/FrameComponent1";
import Footer1 from "../components/Footer1";
import MainVipCard from "../components/MainVipCard";
import MainVIPCardDetails from "../components/MainVIPCardDetails";

const MainVIP = () => {
  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
      <VIPNavBar />
      <main className="w-[1369px] flex flex-row items-start justify-end pt-0 px-[26px] pb-[21px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[52px] max-w-full text-left text-11xl text-darkslategray font-segoe-ui mq800:gap-[26px_52px]">
          <div className="w-[1196px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
            <div className="w-[853px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lg mq800:text-5xl">
                <p className="m-0">Hey Username,</p>
                <p className="m-0">
                  Welcome to OGSOO VIP where you get premium and assured Odds.
                </p>
              </h3>
            </div>
            <div className="h-[149px] w-[197px] flex flex-row items-start justify-start relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[104px] object-cover"
                  alt=""
                  src="/winning-slips@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[82px] w-[115px] h-[125px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/bet2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[79px] max-w-full text-3xl text-darkgray font-poppins-medium-25 mq450:gap-[79px_20px] mq800:gap-[79px_39px] mq1125:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[585px] max-w-full mq800:min-w-full">
              <div className="self-stretch h-[769px] relative rounded-3xl bg-white max-w-full mq800:h-auto mq800:min-h-[769]">
                <div className="absolute h-full w-full top-[1px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-white " />
                <MainVipCard
                  propWidth="unset"
                  propPaddingRight="unset"
                  propMinWidth="90px"
                  propWidth1="unset"
                  propPaddingRight1="unset"
                  propMinWidth1="84px"
                />
                <MainVIPCardDetails />
                <div className="absolute top-[219px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                  <div className="h-[30.3px] w-[271px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="h-[30.3px] flex-1 relative inline-block min-w-[185px] z-[1] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                  <div className="h-[30.3px] w-[164.8px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <div className="absolute top-[258px] left-[15px] w-[869px] flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 box-border gap-[13px] max-w-full mq800:flex-wrap">
                  <div className="h-7 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-mistyrose z-[1]" />
                  <div className="h-[30.3px] w-[271px] relative inline-block shrink-0 z-[2] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="w-[284px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
                    <div className="self-stretch h-[30.3px] relative inline-block shrink-0 z-[2] mq450:text-lg">
                      Denmark vs Switzerland
                    </div>
                  </div>
                  <div className="h-[30.3px] w-[164.8px] relative inline-block shrink-0 z-[2] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <MainVIPCardDetails2 />
                <MainVIPCardDetails2 propTop="378px" propGap="4.4px" />
                <MainVIPCardDetails2 propTop="455px" propGap="4.4px" />
                <MainVIPCardDetails2 propTop="532px" propGap="0.4px" />
                <MainVIPCardDetails propTop="605px" columnGap="4.4px" />
                <div className="absolute top-[0px] left-[1px] w-full h-[65px] text-21xl text-white">
                  <h2 className="m-0 absolute top-[5px] left-[49px] text-inherit font-semibold font-inherit z-[2] mq450:text-5xl mq800:text-13xl">
                    VIP GAMES
                  </h2>
                  <div className="absolute top-[0px] left-[0px] w-[897px] h-[59px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none bg-salmon-100 w-full h-full z-[1]" />
                    <img
                      className="absolute top-[14px] left-[816.2px] w-[48.1px] h-[29.2px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[690px] left-[90px] flex flex-row items-start justify-start gap-[69px] text-9xl text-salmon-100 mq800:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[9px]">
                    <b className="relative z-[1] mq450:text-3xl">SportyBet</b>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-6xl text-darkslategray">
                      <div className="bg-white flex flex-row items-start justify-start pt-0 pb-px pr-[17px] pl-[18px] z-[1] border-[1px] border-solid border-dimgray-100">
                        <div className="h-[39px] w-40 relative bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
                        <div className="relative font-medium inline-block min-w-[123px] z-[2] mq450:text-xl">
                          3FH5EK98
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start text-16xl text-cornflowerblue">
                    <b className="relative inline-block min-w-[98px] z-[2] mq450:text-2xl mq800:text-9xl">
                      1XBet
                    </b>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-6xl text-darkslategray">
                      <div className="bg-white flex flex-row items-start justify-start pt-0 pb-px pr-[17px] pl-[18px] z-[1] border-[1px] border-solid border-dimgray-100">
                        <div className="h-[39px] w-40 relative bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
                        <div className="relative font-medium inline-block min-w-[123px] z-[2] mq450:text-xl">
                          3FH5EK98
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[436px] relative rounded-3xl bg-white max-w-full mq800:h-auto mq800:min-h-[436]">
                <div className="absolute h-full w-full top-[1px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-white hidden" />
                <div className="absolute top-[64px] left-[15px] w-[869px] flex flex-col items-end justify-start max-w-full text-5xl">
                  <div className="w-[819px] flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                      <div className="w-[155px] flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[90px] z-[1] mq450:text-lgi">
                          League
                        </div>
                      </div>
                      <div className="w-[169px] flex flex-col items-start justify-start">
                        <div className="relative font-semibold inline-block min-w-[84px] z-[1] mq450:text-lgi">
                          Teams
                        </div>
                      </div>
                      <div className="relative font-semibold inline-block min-w-[50px] z-[1] mq450:text-lgi">
                        Tips
                      </div>
                      <div className="relative font-semibold inline-block min-w-[89px] z-[1] mq450:text-lgi">
                        Results
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[34.3px] relative text-3xl">
                    <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
                    <div className="absolute top-[0.9px] left-[11.9px] inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
                      International Friendlies
                    </div>
                    <div className="absolute top-[4px] left-[296px] inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
                      Denmark vs Switzerland
                    </div>
                    <div className="absolute top-[1px] left-[593px] inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
                      Over 1.5 Goals
                    </div>
                  </div>
                </div>
                <MainVIPCardDetails propTop="142px" columnGap="4.4px" />
                <div className="absolute top-[219px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                  <div className="h-[30.3px] w-[271px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="h-[30.3px] flex-1 relative inline-block min-w-[185px] z-[1] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                  <div className="h-[30.3px] w-[164.8px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <div className="absolute top-[258px] left-[15px] w-[869px] h-[34.3px]">
                  <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
                  <div className="absolute top-[0.9px] left-[11.9px] inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="absolute top-[4px] left-[296px] inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                  <div className="absolute top-[1px] left-[593px] inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <div className="absolute top-[300px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                  <div className="h-[30.3px] w-[271px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="h-[30.3px] flex-1 relative inline-block min-w-[185px] z-[1] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                  <div className="h-[30.3px] w-[164.8px] relative inline-block shrink-0 z-[1] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <div className="absolute top-[336px] left-[15px] w-[869px] h-[34.3px]">
                  <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
                  <div className="absolute top-[0.9px] left-[11.9px] inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
                    International Friendlies
                  </div>
                  <div className="absolute top-[4px] left-[296px] inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                  <div className="absolute top-[1px] left-[593px] inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
                    Over 1.5 Goals
                  </div>
                </div>
                <FrameComponent1 PastSlips="VIP DAILY BONUS" />
                <div className="absolute top-[383px] left-[105px] flex flex-row items-start justify-start gap-[69px] text-9xl text-salmon-100 mq800:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[9px]">
                    <b className="relative z-[1] mq450:text-3xl">SportyBet</b>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-6xl text-darkslategray">
                      <div className="bg-white flex flex-row items-start justify-start pt-0 pb-px pr-[17px] pl-[18px] z-[1] border-[1px] border-solid border-dimgray-100">
                        <div className="h-[39px] w-40 relative bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
                        <div className="relative font-medium inline-block min-w-[123px] z-[2] mq450:text-xl">
                          3FH5EK98
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start text-16xl text-cornflowerblue">
                    <b className="relative inline-block min-w-[98px] z-[2] mq450:text-2xl mq800:text-9xl">
                      1XBet
                    </b>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-6xl text-darkslategray">
                      <div className="bg-white flex flex-row items-start justify-start pt-0 pb-px pr-[17px] pl-[18px] z-[1] border-[1px] border-solid border-dimgray-100">
                        <div className="h-[39px] w-40 relative bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
                        <div className="relative font-medium inline-block min-w-[123px] z-[2] mq450:text-xl">
                          3FH5EK98
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1036px] w-[338px] flex flex-col items-start justify-start min-w-[338px] max-w-full mq450:min-w-full mq1125:flex-1">
              <div className="self-stretch h-[877px] flex flex-col items-start justify-start gap-[86px] max-w-full mq450:gap-[43px_86px]">
                <img
                  className="self-stretch h-[424px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/da7801d549d5325da71c6fe05ef90776@2x.png"
                />
                <img
                  className="w-[330px] h-[367px] relative object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/2bbdb4847edca33565b6278970b1f468@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1
        propMarginRight="-1px"
        propMargin="0"
        propMargin1="0"
        propMargin2="0"
        propMargin3="0"
        propMargin4="0"
      />
    </div>
  );
};

export default MainVIP;
