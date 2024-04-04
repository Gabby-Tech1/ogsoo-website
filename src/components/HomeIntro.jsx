import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HomeIntro = memo(() => {
  const navigate = useNavigate();

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onVIPTextClick = useCallback(() => {
    navigate("/vip");
  }, [navigate])

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpBtnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);


  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-6xl text-white font-poppins-medium-25">
      <Navbar
        onABOUTUSTextClick={onABOUTUSTextClick}
        onCONTACTTextClick={onCONTACTTextClick}
        onLoginBtnClick={onLoginBtnClick}
        onSignUpBtnClick={onSignUpBtnClick}
      />
      <div className="self-stretch h-[810px] relative bg-[url('/public/7657@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[810px] object-cover hidden"
          alt=""
          src="/7657@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-300 box-border w-full h-full z-[1] border-[1px] border-solid border-dimgray-100" />
        <div
          className="absolute top-[488px] left-[38px] w-[270.7px] h-[61.3px] overflow-hidden cursor-pointer z-[2]"
          onClick={onVIPTextClick}
        >
          <img
            className="absolute h-[calc(100%_-_4.3px)] top-[0px] bottom-[4.3px] left-[0px] max-h-full w-[253px]"
            loading="lazy"
            alt=""
            src="/group-6.svg"
          />
          <div className="absolute top-[13px] left-[37px] font-semibold z-[1] mq450:text-xl">
            JOIN VIP PAGE
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[15px] px-3 pb-3 bg-[transparent] absolute top-[485px] left-[339px] w-[412px] flex flex-row items-start justify-end box-border max-w-full">
          <div className="h-[33px] w-[356px] relative text-6xl font-semibold font-poppins-medium-25 text-white text-left inline-block shrink-0 max-w-full box-border pl-5 z-[3] mq450:text-xl">
            JOIN TELEGRAM CHANNEL
          </div>
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/path-3.svg"
            />
            <img
              className="absolute top-[9.2px] left-[18.9px] rounded-3xl w-[45px] h-[39.1px] object-cover z-[3]"
              alt=""
              src="/icons8telegram@2x.png"
            />
          </div>
        </button>
        <div className="absolute top-[309px] left-[45px] text-9xl font-semibold text-gray-400 inline-block w-[657px] h-[131.9px] z-[2] mq450:text-3xl">
          Your NO. 1 sports prediction channel, we provide you with amazing and
          accurate bet tips and predictions.
        </div>
        <h1 className="m-0 absolute top-[233px] left-[38px] text-41xl font-bold font-inherit inline-block w-[675px] h-[76.1px] z-[2] mq800:text-29xl mq450:text-17xl">
          Welcome to OG ODDS,
        </h1>
        <div className="absolute top-[88px] left-[715px] w-[725px] h-[671.8px] z-[4]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[312px] max-h-full w-[413px] object-cover"
            loading="lazy"
            alt=""
            src="/layer-2@2x.png"
          />
          <img
            className="absolute top-[43.1px] left-[0px] w-[265px] h-[628.8px] object-cover"
            alt=""
            src="/layer-3@2x.png"
          />
          <img
            className="absolute top-[43.1px] left-[132px] w-[456px] h-[628.8px] object-cover z-[1]"
            alt=""
            src="/layer-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
});

export default HomeIntro;
