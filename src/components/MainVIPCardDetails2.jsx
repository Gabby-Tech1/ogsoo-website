import { memo, useMemo } from "react";

const MainVIPCardDetails2 = memo(({ propTop, propGap }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      gap: propGap,
    };
  }, [propTop, propGap]);

  return (
    <div
      className="absolute top-[300px] left-[15px] w-[869px] flex flex-col items-start justify-start gap-[5.4px] max-w-full text-left text-3xl text-darkgray font-poppins-medium-25"
      style={frameDiv1Style}
    >
      <div className="w-[769.7px] flex flex-row items-start justify-start py-0 pr-3 pl-[11.9px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[13px] max-w-full mq800:flex-wrap">
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
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 relative gap-[13px] mq800:flex-wrap">
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
    </div>
  );
});

export default MainVIPCardDetails2;
