import { memo } from "react";

const FrameComponent1 = memo(({  }) => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[1px] w-full h-[65px]">
      <div className="absolute top-[5px] left-[49px] text-21xl font-semibold font-poppins-medium-25 text-white text-left z-[2] mq800:text-13xl mq450:text-5xl">
        PAST SLIPS
      </div>
      <div className="absolute top-[0px] left-[0px] w-[897px] h-[59px]">
        <div className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none bg-salmon-100 w-full h-full z-[1]" />
        
      </div>
    </button>
  );
});

export default FrameComponent1;
