import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginEmailField = memo(() => {
  const navigate = useNavigate();

  const onVIPBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section className="w-[1404px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-36xl text-dimgray-100 font-segoe-ui">
      <div className="w-[436px] rounded-21xl bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-11 gap-[34px] max-w-full border-[1px] border-solid border-dimgray-100 mq450:gap-[17px_34px] mq800:pb-[29px] mq800:box-border">
        <div className="self-stretch h-[530px] relative rounded-21xl bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
        <button className="cursor-pointer [border:none] pt-2.5 px-[43px] pb-[11px] bg-dimgray-200 rounded-t-21xl rounded-b-none flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-rosybrown mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[61px] w-[436px] relative rounded-t-21xl rounded-b-none bg-dimgray-200 hidden max-w-full" />
          <div className="relative text-11xl font-semibold font-segoe-ui text-white text-left z-[2]">
            DAILY VIP SUBSCRIPTION
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[22px] pb-[11px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[63px] max-w-full mq450:gap-[31px_63px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[49px] pl-[54px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start [row-gap:40px]">
                <img
                  className="h-[74px] w-[98px] relative object-cover min-h-[74px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/r@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[124px]">
                  <b className="relative z-[1] text-21xl">
                    GHS 50
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-6xl text-center">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative z-[1]">
                  Our Daily VIP Package
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                <div className="relative z-[1] mq450:text-xl">
                  Get premium Odds from OGSOO
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <div className="relative z-[1] mq450:text-xl">
                    100% Assurance
                  </div>
                </div>
                <div className="self-stretch relative text-center z-[1] mt-[-6px] mq450:text-xl">
                  All VIP subscription are valid until slips are won
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button
            className="cursor-pointer [border:none] pt-[9px] pb-2 pr-[17px] pl-[29px] bg-salmon-100 rounded-30xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-indianred"
            onClick={onVIPBtnClick}
          >
            <div className="h-[50px] w-[214px] relative rounded-30xl bg-salmon-100 hidden" />
            <b className="relative text-6xl font-segoe-ui text-white text-left z-[1]">
              BUY PACKAGE
            </b>
          </button>
        </div>
      </div>
    </section>
  );
});

export default LoginEmailField;
