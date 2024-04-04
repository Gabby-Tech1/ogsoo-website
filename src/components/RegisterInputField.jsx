import { memo, useMemo } from "react";

const RegisterInputField = memo(
  ({ username, placeholderPlaceholder, propMinWidth, propWidth }) => {
    const usernameStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const placeholderStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-white font-poppins-medium-25">
        <div
          className="relative font-medium inline-block min-w-[99px] z-[4]"
          style={usernameStyle}
        >
          {username}
        </div>
        <div className="self-stretch rounded-xl bg-gainsboro-200 box-border flex flex-row items-start justify-start pt-2 px-6 pb-[11px] max-w-full z-[3] border-[2px] border-solid border-white">
          <div className="h-[49px] w-[546px] relative rounded-xl bg-gainsboro-200 box-border hidden max-w-full border-[2px] border-solid border-white" />
          <input
            className="w-[131px] [border:none] [outline:none] font-medium font-poppins-medium-25 text-xl bg-[transparent] h-[30px] relative text-white text-left inline-block p-0 z-[4] mq450:text-base"
            placeholder={placeholderPlaceholder}
            type="text"
            style={placeholderStyle}
          />
        </div>
      </div>
    );
  }
);

export default RegisterInputField;
