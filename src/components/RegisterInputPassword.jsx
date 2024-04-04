import { memo, useMemo } from "react";

const RegisterInputPassword = memo(({ createPassword, propPadding }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-white font-poppins-medium-25"
      style={frameDiv2Style}
    >
      <div className="relative font-medium z-[5]">{createPassword}</div>
      <div className="self-stretch rounded-xl bg-gainsboro-200 box-border flex flex-row items-start justify-between py-1.5 pr-4 pl-[23px] max-w-full gap-[20px] z-[4] border-[2px] border-solid border-white mq450:flex-wrap">
        <input
          className="w-[500px] [border:none] [outline:none] bg-[transparent] h-[37px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border font-poppins-medium-25 font-medium text-xl text-white"
          placeholder="**********"
          type="password"
        />
        <div className="h-[49px] w-[546px] relative rounded-xl bg-gainsboro-200 box-border hidden max-w-full border-[2px] border-solid border-white" />
        {/* <img
          className="h-[34px] w-[53px] relative z-[5]"
          alt=""
          src="/vector.svg"
        /> */}
      </div>
    </div>
  );
});

export default RegisterInputPassword;
