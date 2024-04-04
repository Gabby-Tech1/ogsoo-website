import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const RegisterRightDetails = memo(() => {
  const navigate = useNavigate();

  const onRBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="absolute top-[70px] left-[500px] w-[918px] h-[615px] text-center text-xl text-gray-500 font-poppins-medium-25">
      <img
        className="absolute top-[0px] left-[0px] w-[918px] h-[615px]"
        alt=""
        src="/path-9.svg"
      />
      <h1 className="m-0 absolute top-[148px] left-[348px] text-31xl font-medium font-inherit text-black z-[1] mq450:text-11xl mq800:text-21xl">
        Registration Portal
      </h1>
      <div className="absolute top-[345px] left-[384px] font-medium z-[1] mq450:text-base">
        Sign in, if you already have an account
      </div>
      <div className="absolute top-[223px] left-[368px] font-medium inline-block w-[424px] z-[1] mq450:text-base">
        You are one step ahead to become a member of the VIP page
      </div>
      <button
        className="cursor-pointer pt-1.5 pb-[7px] pr-[55px] pl-14 bg-salmon-100 absolute top-[398px] left-[466px] rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-indianred hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
        onClick={onRBtnClick}
      >
        <div className="h-[51px] w-[193px] relative rounded-xl bg-salmon-100 box-border hidden border-[1px] border-solid border-white" />
        <div className="w-[82px] relative text-6xl font-medium font-poppins-medium-25 text-gray-900 text-center inline-block min-w-[82px] z-[1]">
          LOG IN
        </div>
      </button>
      
    </div>
  );
});

export default RegisterRightDetails;
