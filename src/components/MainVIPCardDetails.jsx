import { memo, useMemo } from "react";

const MainVIPCardDetails = memo(({ propTop, columnGap }) => {
  const columnStyle = useMemo(() => {
    return {
      top: propTop,
      gap: columnGap,
    };
  }, [propTop, columnGap]);

  return (
    <div
      className="absolute top-[142px] left-[15px] w-[869px] flex flex-col items-start justify-start gap-[4.4px] max-w-full text-left text-3xl text-darkgray font-poppins-medium-25"
      style={columnStyle}
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
      <div className="self-stretch h-[34.3px] relative">
        <div className="absolute top-[0px] left-[0px] bg-mistyrose w-[869px] h-7 z-[1]" />
        <div className="absolute top-[0.9px] left-[11.9px] inline-block w-[271px] h-[30.3px] z-[2] mq450:text-lg">
          International Friendlies
        </div>
        <div className="absolute top-[4px] left-[296px] inline-block w-[284px] h-[30.3px] z-[2] mq450:text-lg">
          Denmark vs Switzerland
        </div>
        <div className="absolute top-[1px] left-[593px] inline-block w-[164.8px] h-[30.3px] z-[2] mq450:text-lg">
          Over 1.5 Goals
        </div>
      </div>
    </div>
  );
});

export default MainVIPCardDetails;
