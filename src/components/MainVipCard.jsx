import { memo, useMemo } from "react";

const MainVipCard = memo(
  ({
    propWidth,
    propPaddingRight,
    propMinWidth,
    propWidth1,
    propPaddingRight1,
    propMinWidth1,
  }) => {
    const leagueStyle = useMemo(() => {
      return {
        width: propWidth,
        paddingRight: propPaddingRight,
        minWidth: propMinWidth,
      };
    }, [propWidth, propPaddingRight, propMinWidth]);

    const league1Style = useMemo(() => {
      return {
        width: propWidth1,
        paddingRight: propPaddingRight1,
        minWidth: propMinWidth1,
      };
    }, [propWidth1, propPaddingRight1, propMinWidth1]);

    return (
      <div className="absolute top-[64px] left-[15px] flex flex-col items-end justify-start max-w-full text-left text-5xl text-darkgray font-poppins-medium-25">
        <div className="w-[819px] flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="w-[155px] flex flex-col items-start justify-start">
              <div
                className="w-[110px] relative font-semibold inline-block box-border pr-5 z-[1] mq450:text-lgi"
                style={leagueStyle}
              >
                League
              </div>
            </div>
            <div className="w-[169px] flex flex-col items-start justify-start">
              <div
                className="w-[104px] relative font-semibold inline-block box-border pr-5 z-[1] mq450:text-lgi"
                style={league1Style}
              >
                Teams
              </div>
            </div>
            <div className="relative font-semibold inline-block min-w-[50px] z-[1] mq450:text-lgi">
              Tips
            </div>
            <div className="relative font-semibold inline-block min-w-[89px] z-[1] mq450:text-lgi">
              Results
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[0.9px] px-[11.9px] pb-0 relative gap-[13px] text-3xl mq800:flex-wrap">
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
  }
);

export default MainVipCard;
