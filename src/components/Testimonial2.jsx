import { memo, useMemo } from "react";

const Testimonial2 = memo(({ propWidth, propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className="w-[463px] rounded-xl bg-white box-border shrink-0 flex flex-col items-start justify-start pt-2 pb-[9px] pr-[26px] pl-[29px] gap-[10px] [debug_commit:f6aba90] text-left text-11xl text-darkslategray font-poppins-medium-25 border-[1px] border-solid border-dimgray-100"
      style={frameDivStyle}
    >
      <div className="w-[463px] h-[197px] relative rounded-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-dimgray-100" />
      <div className="flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap mq450:gap-[31px_15px]">
        <div className="h-20 w-20 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full z-[1] border-[0px] border-solid border-dimgray-100" />
          <img
            className="absolute top-[13px] left-[15px] w-[50px] h-[50px] overflow-hidden z-[2]"
            loading="lazy"
            alt=""
            src="/profile.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="h-[33px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <b className="mb-[-12px] relative inline-block shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-lg mq800:text-5xl">
              John A. Doe
            </b>
          </div>
          <div className="relative text-xl inline-block min-w-[117px] shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-base">
            @john_doe
          </div>
        </div>
      </div>
      <div className="self-stretch relative text-xl font-semibold z-[1] mq450:text-base">
        "This is the most authentic and genuine betting odds I have ever
        received, Guys let's all try it out, it's 100% GENUINE"
      </div>
    </div>
  );
});

export default Testimonial2;
