import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginLeft = memo(() => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponent75Click = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start pt-[22px] px-4 pb-[213px] box-border gap-[118px] max-w-full h-full text-left text-16xl text-darkslategray font-poppins-medium-25">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[172px] left-[0px] w-[426px] h-[571px] object-cover z-[5]"
          alt=""
          src="/layer-1-2@2x.png"
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] z-[6] flex items-center justify-center">
          <img
            className="h-full w-full max-w-full overflow-hidden max-h-full z-[6] object-contain absolute left-[3px] top-[7px] [transform:scale(1.019)]"
            alt=""
            src="/path-10.svg"
          />
        </div>
      </div>
      <div
        className="h-[59px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full cursor-pointer z-[7]"
        onClick={onGroupContainerClick}
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
      <div className="w-[704px] flex flex-row items-start justify-start py-0 px-[52px] box-border max-w-full text-31xl text-white">
        <div className="flex-1 flex flex-col items-end justify-start gap-[126px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[25px] pl-[26px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit z-[8] mq450:text-11xl mq800:text-21xl">
                Welcome to OG ODDS
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-[33px] mt-[-19px] text-6xl text-gray-800">
                <div className="relative font-medium z-[7] mq450:text-xl">
                  Sign In and get access to the VIP page
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] max-w-full text-6xl text-gray-900">
            <div className="relative font-medium z-[7] mq450:text-xl">
              If you don't have an account yet, please sign up
            </div>
            <div className="w-[540px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-[57px] w-[156px] relative overflow-hidden shrink-0 z-[7]"
                onClick={onComponent75Click}
              >
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-4.svg"
                />
                <div className="absolute top-[13px] left-[29px] text-6xl font-medium font-poppins-medium-25 text-salmon-100 text-left inline-block min-w-[98px] whitespace-nowrap z-[1] mq450:text-xl">
                  SIGN UP
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoginLeft;
