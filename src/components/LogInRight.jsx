import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginRight = memo(() => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/main-vip");
  }, [navigate]);

  return (
    <div className="absolute top-[64px] left-[470px] w-[918px] flex flex-col items-start justify-start pt-14 pb-[157px] pr-[65px] pl-[340px] box-border gap-[55px] max-w-full text-left text-31xl text-black font-poppins-medium-25">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-9.svg"
        />
        {/* <img
          className="absolute top-[348px] left-[340px] w-[23px] h-[25px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/check-11017294@2x.png"
        /> */}
        <img
          className="absolute top-[27px] left-[435px] rounded-47xl w-[133px] h-[132px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/logo1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[52px]">
        <h1 className="m-0 relative text-inherit italic font-bold font-inherit z-[1] mq450:text-11xl mq800:text-21xl">
          OG ODDS
        </h1>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full">
          <div className="relative text-xl font-medium font-poppins-medium-25 text-black text-left inline-block min-w-[61px] z-[1] mq450:text-base">
            Email:
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full mt-[-5px]">
            <div className="flex-1 rounded-xl bg-gainsboro-200 box-border flex flex-row items-start justify-start pt-0.5 px-7 pb-[3px] max-w-full z-[1] border-[2px] border-solid border-black">
              <div className="h-[35px] w-[511px] relative rounded-xl bg-gainsboro-200 box-border hidden max-w-full border-[2px] border-solid border-black" />
              <input
                className="w-[500px] [border:none] [outline:none] font-medium font-poppins-medium-25 text-xl bg-[transparent] h-[30px] relative text-gray-700 text-left inline-block p-0 z-[2] mq450:text-base"
                placeholder="eg. abc@email.com"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="relative text-xl font-medium font-poppins-medium-25 text-black text-left inline-block min-w-[103px] z-[3] mq450:text-base">
            Password:
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full mt-[-5px]">
            <div className="flex-1 rounded-xl bg-gainsboro-200 box-border flex flex-row items-start justify-between pt-0.5 pb-[3px] pr-[13px] pl-[26px] max-w-full gap-[20px] z-[1] border-[2px] border-solid border-black mq800:flex-wrap">
              <div className="h-[35px] w-[511px] relative rounded-xl bg-gainsboro-200 box-border hidden max-w-full border-[2px] border-solid border-black" />
              <input
                className="w-[500px] [border:none] [outline:none] font-medium font-poppins-medium-25 text-xl bg-[transparent] h-[30px] relative text-gray-700 text-left inline-block p-0 z-[2] mq450:text-base"
                placeholder="*********"
                type="password"
              />
              {/* <div className="h-[29px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <img
                  className="w-[47px] h-[25px] relative z-[2]"
                  alt=""
                  src="/password-icon.svg"
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row items-start justify-start pt-0 px-[30px] pb-[22px]">
          <div className="relative text-xl font-medium font-poppins-medium-25 text-black text-left z-[1] mq450:text-base">
            Show password
          </div>
        </div> */}
        <div className="w-[473px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <button
            className="cursor-pointer pt-[5px] px-[66px] pb-1.5 bg-salmon-100 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[2px] border-solid border-white hover:bg-indianred hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100"
            onClick={onBtnClick}
          >
            <div className="h-[49px] w-[215px] relative rounded-xl bg-salmon-100 box-border hidden border-[2px] border-solid border-white" />
            <div className="relative text-6xl font-medium font-poppins-medium-25 text-white text-left inline-block min-w-[82px] z-[1]">
              LOG IN
            </div>
          </button>
        </div>
      </form>
    </div>
  );
});

export default LoginRight;
