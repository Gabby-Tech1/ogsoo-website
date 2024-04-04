import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RegisterInputField from "./RegisterInputField";
import RegisterInputPassword from "./RegisterInputPassword";

const RegisterDetails = memo(() => {
  const navigate = useNavigate();

  const onNavigateHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWhiteBtnClick = useCallback(() => {
    navigate("/main-vip");
  }, [navigate]);

  return (
    <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start pt-[22px] px-4 pb-[68px] box-border gap-[28.5px] max-w-full h-full text-left text-16xl text-darkslategray font-poppins-medium-25">
      <div
        className="h-[59px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full cursor-pointer z-[3]"
        onClick={onNavigateHomeContainerClick}
      >
        <img
          className="h-[49px] w-[49px] relative object-cover"
          loading="lazy"
          alt=""
          src="/home-1946436@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <h3 className="m-0 relative text-inherit font-medium font-inherit mq450:text-xl mq800:text-9xl">
            BACK TO HOME
          </h3>
        </div>
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] z-[2] flex items-center justify-center">
          <img
            className="h-full w-full max-w-full overflow-hidden max-h-full z-[2] object-contain absolute left-[3px] top-[7px] [transform:scale(1.019)]"
            alt=""
            src="/path-10.svg"
          />
        </div>
        <input
          type="checkbox"
          className="absolute top-[585px] left-[60px] w-[26px] h-[27px] object-cover z-[3]"
        />
        <input
          type="checkbox"
          className="absolute top-[550px] left-[60px] w-[26px] h-[27px] object-cover z-[3]"
          
        />
        <img
          className="absolute top-[95px] left-[206px] rounded-47xl w-[81px] h-20 object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/logo2@2x.png"
        />
      </div>
      <div className="w-[748px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-21xl text-white">
        <h2 className="m-0 relative text-inherit italic font-bold font-inherit z-[3] mq450:text-5xl mq800:text-13xl">
          OG ODDS
        </h2>
      </div>
      <div className="w-[616px] flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
          <RegisterInputField
            username="Username:"
            placeholderPlaceholder="eg. John Doe"
            propMinWidth="55px"
              propWidth="500px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <RegisterInputField
              username="Email:"
              placeholderPlaceholder="eg. abc@email.com"
              propMinWidth="55px"
              propWidth="500px"
            />
            <RegisterInputPassword createPassword="Create Password:" />
            <RegisterInputPassword
              createPassword="Confirm Password::"
              propPadding="0px 0px 7px"
            />
            <div className="flex flex-row items-start justify-start py-0 px-[49px]">
              <div className="relative text-lg font-medium font-poppins-medium-25 text-white text-left z-[3]">
                I am 18 and above
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-[49px] pb-[17px] box-border max-w-full">
              <div className="w-[223px] relative text-lg font-medium font-poppins-medium-25 text-white text-center inline-block z-[3]">{`Read terms & conditions`}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
              <button
                className="cursor-pointer [border:none] pt-[7px] pb-2 pr-[9px] pl-[13px] bg-white rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-gainsboro-100"
                onClick={onWhiteBtnClick}
              >
                <div className="h-[53px] w-[205px] relative rounded-xl bg-white hidden" />
                <div className="relative text-6xl font-medium font-poppins-medium-25 text-salmon-100 text-left z-[1]">
                  REGISTER NOW
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default RegisterDetails;
