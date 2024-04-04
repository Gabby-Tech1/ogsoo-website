import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VIPNavBar = memo(() => {
  const navigate = useNavigate();

  const onHOMEText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onVIPLogoutContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className="self-stretch h-[102px] bg-salmon-100 flex flex-row items-start justify-between py-[7px] pr-[18px] pl-[45px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-6xl text-whitesmoke font-poppins-medium-25 mq800:pl-[22px] mq800:box-border">
      
      <div className="h-[102px] w-[1440px] relative bg-salmon-100 hidden max-w-full" />
      <div className="h-[83px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-16xl">
        <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
          <img
            className="h-[82px] w-[84px] relative rounded-21xl object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
            <h3 className="m-0 relative text-inherit italic font-bold font-inherit whitespace-nowrap z-[1]">
              OG ODDS
            </h3>
          </div>
        </div>
      </div>
      <nav className="m-0 w-[509px] flex flex-col items-start justify-start pt-[23px] pb-0 pr-[31px] pl-0 box-border max-w-full mq450:w-[31px] mq1125:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-6xl text-whitesmoke font-poppins-medium-25 mq450:hidden">
          <div
            className="relative font-medium inline-block min-w-[75px] cursor-pointer z-[1]"
            onClick={onHOMEText1Click}
          >
            HOME
          </div>
          <div className="relative font-medium inline-block min-w-[41px] z-[1]">
            VIP
          </div>
          <div
            className="relative font-medium inline-block min-w-[125px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onABOUTUSTextClick}
          >
            ABOUT US
          </div>
          <div
            className="relative font-medium inline-block min-w-[124px] cursor-pointer z-[1]"
            onClick={onCONTACTTextClick}
          >
            CONTACT
          </div>
        </nav>
      </nav>
      <div className="self-stretch w-[346px] flex flex-row items-start justify-start max-w-full text-white font-segoe-ui">
        <img
          className="h-[88px] w-[88px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/gamer-4333682@2x.png"
        />
        <div className="flex-[0.9147] flex flex-col items-start justify-start pt-[26px] pb-0 pr-[11px] pl-0">
          <div className="self-stretch h-[33px] relative">
            <b className="absolute top-[0px] left-[0px] inline-block min-w-[118px] w-full h-full z-[2]">
              Username
            </b>
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-full h-full">
              <b className="relative inline-block min-w-[118px] z-[1]">
                Username
              </b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 font-poppins-medium-25">
          <div
            className="rounded-xl bg-salmon-100 flex flex-row items-start justify-start py-1.5 pr-0 pl-[5px] cursor-pointer z-[2] border-[2px] border-solid border-white"
            onClick={onVIPLogoutContainerClick}
          >
            <div className="h-[50px] w-[126px] relative rounded-xl bg-salmon-100 box-border hidden border-[2px] border-solid border-white" />
            <div className="relative font-medium inline-block min-w-[124px] z-[1]">
              LOG-OUT
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default VIPNavBar;
