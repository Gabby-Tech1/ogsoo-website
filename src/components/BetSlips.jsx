import { memo, useCallback } from "react";
import MainVIPCardDetails2 from "./MainVIPCardDetails2";
import FrameComponent1 from "./FrameComponent1";
import { useNavigate } from "react-router-dom";
import MainVipCard from "./MainVipCard";
import MainVIPCardDetails from "./MainVIPCardDetails";

const BetSlips = memo(() => {
  const navigate = useNavigate();

  const onLogINBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpBtnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <section className="w-[1405px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full text-left text-21xl text-gray-200 font-poppins-medium-25">
      <div className="w-[878px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit mq800:text-13xl mq450:text-5xl">
          FREE BETTING SLIPS (LIMITED)
        </h2>
      </div>
      <form className="m-0 self-stretch flex flex-row items-start justify-center gap-[43px] max-w-full mq800:gap-[43px_21px] mq1350:flex-wrap">
        <div className="w-[904px] flex flex-col items-end justify-start gap-[23px] min-w-[904px] shrink-0 [debug_commit:f6aba90] max-w-full mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-[3px] box-border max-w-full">
            <div className="h-[739px] flex-1 relative rounded-3xl bg-white max-w-full mq800:h-auto mq800:min-h-[739]">
              <div className="absolute h-full w-full top-[1px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-white hidden" />
              <MainVipCard />
              <MainVIPCardDetails2 propTop="142px" propGap="4.4px" />
              <div className="absolute top-[219px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[258px] left-[15px] w-[869px] h-[34.3px]">
                <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
                <div className="absolute top-[0.9px] left-[11.9px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="absolute top-[4px] left-[296px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="absolute top-[1px] left-[593px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[300px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[336px] left-[15px] w-[869px] flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 box-border gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-7 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-mistyrose z-[1]" />
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="w-[284px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[30.3px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[378px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[413px] left-[15px] w-[869px] flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 box-border gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-7 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-mistyrose z-[1]" />
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="w-[284px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[30.3px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[455px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[490px] left-[15px] w-[869px] h-[34.3px]">
                <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
                <div className="absolute top-[0.9px] left-[11.9px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="absolute top-[4px] left-[296px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="absolute top-[1px] left-[593px] text-3xl font-poppins-medium-25 text-darkgray text-left inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <MainVIPCardDetails propTop="532px" columnGap="0.4px" />
              <div className="absolute top-[605px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[640px] left-[15px] w-[869px] flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 box-border gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-7 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-mistyrose z-[1]" />
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="w-[284px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[30.3px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                    Denmark vs Switzerland
                  </div>
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[2] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <div className="absolute top-[682px] left-[26.9px] w-[745.9px] flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
                <div className="h-[30.3px] w-[271px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  International Friendlies
                </div>
                <div className="h-[30.3px] flex-1 relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block min-w-[185px] z-[1] mq450:text-lg">
                  Denmark vs Switzerland
                </div>
                <div className="h-[30.3px] w-[164.8px] relative text-3xl font-poppins-medium-25 text-darkgray text-left inline-block shrink-0 z-[1] mq450:text-lg">
                  Over 1.5 Goals
                </div>
              </div>
              <FrameComponent1 pASTSLIPS="PAST SLIPS" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch rounded-3xl bg-salmon-100 flex flex-row items-start justify-between py-1 pr-[27.7px] pl-[30px] box-border max-w-full gap-[20px] mq450:flex-wrap">
              <div className="h-[68px] w-[901px] relative rounded-3xl bg-salmon-100 hidden max-w-full" />
              <div
                className="[border:none] [outline:none] font-semibold font-poppins-medium-25 text-21xl bg-[transparent] h-[60px] relative text-white text-left inline-block p-0 z-[1] mq800:text-13xl mq450:text-5xl"
                >FREE HOT ODDS
              </div>
              <div className="h-[44.2px] w-[58.1px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[29.2px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="flex-1 rounded-3xl bg-salmon-100 flex flex-row items-start justify-between py-1 pr-[31px] pl-[30px] box-border max-w-full gap-[20px] mq800:flex-wrap">
                <div className="h-[68px] w-[901px] relative rounded-3xl bg-salmon-100 hidden max-w-full" />
                <div
                  className=" [border:none] [outline:none] font-semibold font-poppins-medium-25 text-21xl bg-[transparent] h-[60px] relative text-white text-left inline-block max-w-full p-0 z-[1] mq800:text-13xl mq450:text-5xl"
                  > MIDNIGHT BANGER
                </div>
                <div className="h-[44.2px] w-[58.1px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-[29.2px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[449px] flex flex-col items-start justify-start pt-[166.4px] px-0 pb-0 box-border min-w-[449px] max-w-full mq800:pt-[108px] mq800:box-border mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13.6px] shrink-0 [debug_commit:f6aba90]">
            <div className="w-[422px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[3.5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
                <h3 className="m-0 h-[127px] flex-1 relative text-11xl font-semibold font-poppins-medium-25 text-left inline-block max-w-full mq800:text-5xl mq450:text-lg">
                  <span className="text-gray-200">{`Are you ready to make money with our `}</span>
                  <span className="text-salmon-100">{`authentic `}</span>
                  <span className="text-gray-200">odds ?</span>
                </h3>
              </div>
              <h3 className="m-0 w-[383px] h-[84px] relative text-11xl font-semibold font-poppins-medium-25 text-darkgray text-left inline-block max-w-full z-[1] mq800:text-5xl mq450:text-lg">
                If you already have an account
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <button
                className="cursor-pointer pt-[11px] px-[37px] pb-2 bg-salmon-100 rounded-xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-gray-100 hover:bg-indianred hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100"
                onClick={onLogINBtnClick}
              >
                <div className="h-[57px] w-[158px] relative rounded-xl bg-salmon-100 box-border hidden border-[2px] border-solid border-gray-100" />
                <div className="relative text-6xl font-medium font-poppins-medium-25 text-whitesmoke text-left inline-block min-w-[84px] z-[1]">
                  LOG IN
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                <h3 className="m-0 self-stretch relative text-11xl font-semibold font-poppins-medium-25 text-left mq800:text-5xl mq450:text-lg">
                  <span className="text-darkgray">
                    If you are a new user and don't have an account,
                  </span>
                  <span className="text-salmon-100"> create one</span>
                </h3>
                <button
                  className="cursor-pointer pt-[7px] px-[29px] pb-3 bg-white w-[162px] h-[61px] rounded-xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-salmon-100 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-indianred"
                  onClick={onSignUpBtnClick}
                >
                  <div className="h-[61px] w-[162px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-salmon-100" />
                  <div className="relative text-6xl font-medium font-poppins-medium-25 text-salmon-100 text-left inline-block min-w-[100px] z-[1]">
                    SIGN UP
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
});

export default BetSlips;
