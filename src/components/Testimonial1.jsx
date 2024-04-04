import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Testimonial2 from "./Testimonial2";

const Testimonial1 = memo(() => {
  const navigate = useNavigate();

  const onVIPTextClick = useCallback(() => {
    navigate("/vip");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[22.7px] max-w-full text-left text-6xl text-white font-poppins-medium-25">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[181px] mq450:pl-[90px] mq450:box-border">
        <div
          className="overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[37px] pb-1.5 relative cursor-pointer"
          onClick={onVIPTextClick}
        >
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/group-6.svg"
          />
          <div className="relative font-semibold z-[1] mq450:text-xl">
            JOIN VIP PAGE
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-41xl text-salmon-100">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-17xl mq800:text-29xl">
          TESTIMONIALS
        </h1>
      </div>
      <div className="w-[994px] overflow-x-auto flex flex-row items-start justify-start py-0 px-[15px] box-border gap-[33px] max-w-full text-11xl text-darkslategray mq800:gap-[33px_16px]">
        <Testimonial2 />
        <div className="w-[470px] shrink-0 flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border max-w-full">
          <Testimonial2 propWidth="unset" propAlignSelf="stretch" />
        </div>
        <div className="h-[197px] w-[476px] relative shrink-0 [debug_commit:f6aba90] text-xl">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-white box-border w-[463px] border-[1px] border-solid border-dimgray-100" />
          <div className="absolute top-[8px] left-[30px] w-20 h-20">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full z-[1] border-[0px] border-solid border-dimgray-100" />
            <img
              className="absolute top-[13px] left-[15px] w-[50px] h-[50px] overflow-hidden z-[2]"
              alt=""
              src="/profile.svg"
            />
          </div>
          <div className="absolute top-[98px] left-[30px] font-semibold inline-block w-[406px] z-[1] mq450:text-base">
            "This is the most authentic and genuine betting odds I have ever
            received, Guys let's all try it out, it's 100% GENUINE"
          </div>
          <b className="absolute top-[8px] left-[141px] text-11xl z-[1] mq450:text-lg mq800:text-5xl">
            John A. Doe
          </b>
          <div className="absolute top-[41px] left-[141px] z-[2] mq450:text-base">
            @john_doe
          </div>
        </div>
        <div className="w-[463px] rounded-xl bg-white box-border shrink-0 flex flex-col items-start justify-start pt-2 pb-[9px] pr-[26px] pl-[29px] gap-[10px] [debug_commit:f6aba90] border-[1px] border-solid border-dimgray-100">
          <div className="w-[463px] h-[197px] relative rounded-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-dimgray-100" />
          <div className="w-[291px] flex flex-row items-start justify-start gap-[31px] mq450:gap-[31px_15px]">
            <div className="h-20 w-20 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full z-[1] border-[0px] border-solid border-dimgray-100" />
              <img
                className="absolute top-[13px] left-[15px] w-[50px] h-[50px] overflow-hidden z-[2]"
                alt=""
                src="/profile.svg"
              />
            </div>
            <div className="h-[45px] flex-1 flex flex-row items-start justify-start relative">
              <b className="self-stretch flex-1 relative z-[1] mq450:text-lg mq800:text-5xl">
                John A. Doe
              </b>
              <div className="h-[30px] w-[117px] absolute !m-[0] bottom-[-18px] left-[0px] text-xl inline-block z-[2] mq450:text-base">
                @john_doe
              </div>
            </div>
          </div>
          <div className="self-stretch h-[90px] relative text-xl font-semibold inline-block z-[1] mq450:text-base">
            "This is the most authentic and genuine betting odds I have ever
            received, Guys let's all try it out, it's 100% GENUINE"
          </div>
        </div>
      </div>
      <div className="w-[925px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="h-5 flex flex-row items-start justify-start gap-[13px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/path-6.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/path-7.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/path-7.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/path-7.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default Testimonial1;
