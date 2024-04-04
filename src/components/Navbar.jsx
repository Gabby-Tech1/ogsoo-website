import { memo, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = memo(
  ({
    logoIconHeight,
    logoIconFlex,
    onHOMETextClick,
    onABOUTUSTextClick,
    onCONTACTTextClick,
    onLoginBtnClick,
    onSignUpBtnClick,
  }) => {
    const navbarStyle = useMemo(() => {
      return {
        height: logoIconHeight,
        flex: logoIconFlex,
      };
    }, [logoIconHeight, logoIconFlex]);

    const navigate = useNavigate();

    const onVIPTextClick = useCallback(() => {
      navigate("/vip");
    }, [navigate]);

    return (
      <header
        className="self-stretch h-[98px] bg-salmon-200 flex flex-row items-end justify-between py-2 pr-[11px] pl-[45px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-16xl text-whitesmoke font-poppins-medium-25 mq800:pl-[22px] mq800:box-border"
        style={navbarStyle}
      >
        <div className="h-[98px] w-[1440px] relative bg-salmon-200 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
          <img
            className="h-[82px] w-[84px] relative rounded-21xl object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
            <h3 className="m-0 relative text-inherit italic font-bold font-inherit whitespace-nowrap z-[1]">
              OG ODDS
            </h3>
          </div>
        </div>
        <nav className="m-0 w-[509px] flex flex-col items-start justify-end pt-0 pb-[22px] pr-[31px] pl-0 box-border max-w-full mq1150:hidden mq450:w-[31px]">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-6xl text-whitesmoke font-poppins-medium-25 mq450:hidden">
            <div
              className="relative font-medium inline-block min-w-[75px] z-[1] cursor-pointer"
              onClick={onHOMETextClick}
            >
              HOME
            </div>
            <div className="relative font-medium inline-block min-w-[41px] z-[1] cursor-pointer"
            onClick={onVIPTextClick}>
              VIP
            </div>
            <div
              className="relative font-medium inline-block min-w-[125px] whitespace-nowrap cursor-pointer z-[1]"
              onClick={onABOUTUSTextClick}
            >
              ABOUT US
            </div>
            <div
              className="relative font-medium inline-block min-w-[124px] cursor-pointer z-[1]"
              onClick={onCONTACTTextClick}
            >
              CONTACT
            </div>
          </nav>
        </nav>
        <div className="w-[353px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
          <div className="self-stretch h-[57px] flex flex-row items-start justify-start gap-[37px] mq450:gap-[37px_18px]">
            <button
              className="cursor-pointer pt-[11px] px-[37px] pb-2 bg-salmon-100 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[2px] border-solid border-gray-100 hover:bg-indianred hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100"
              onClick={onLoginBtnClick}
            >
              <div className="h-[57px] w-[158px] relative rounded-xl bg-salmon-100 box-border hidden border-[2px] border-solid border-gray-100" />
              <div className="relative text-6xl font-medium font-poppins-medium-25 text-whitesmoke text-left inline-block min-w-[84px] z-[1]">
                LOG IN
              </div>
            </button>
            <button
              className="cursor-pointer pt-[7px] px-[29px] pb-3 bg-white h-[61px] flex-1 rounded-xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[2px] border-solid border-salmon-100 hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-indianred"
              onClick={onSignUpBtnClick}
            >
              <div className="h-[61px] w-[162px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-salmon-100" />
              <div className="relative text-6xl font-medium font-poppins-medium-25 text-salmon-100 text-left inline-block min-w-[100px] z-[1]">
                SIGN UP
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  }
);

export default Navbar;
