import { memo } from "react";

const ContactCard = memo(() => {
  return (
    <div className="w-[1338px] flex flex-row items-start justify-start py-0 px-[70px] box-border max-w-full text-left text-xl text-white font-poppins-medium-25 mq1300:pl-[35px] mq1300:pr-[35px] mq1300:box-border">
      <div className="flex-1 flex flex-row items-end justify-start max-w-full">
        <div className="h-[471px] w-[462.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-center justify-end py-[181px] pr-5 pl-[287px] box-border gap-[8px] bg-[url('/public/logo-on-phone@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[5] mq450:pl-5 mq450:pt-[118px] mq450:pb-[118px] mq450:box-border">
            <img
              className="w-[462.8px] h-[453px] relative object-cover hidden max-w-full"
              alt=""
              src="/logo-on-phone@2x.png"
            />
            <div className="w-[14.2px] h-3.5 relative rounded-[50%] bg-white z-[7]" />
            <div className="w-[14.2px] h-3.5 relative rounded-[50%] bg-white z-[6]" />
            <div className="w-[14.2px] h-3.5 relative rounded-[50%] bg-white z-[6]" />
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-white shadow-[10px_10px_5px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-start gap-[39px] max-w-full ml-[-361.8px] mq800:gap-[39px_19px] mq1125:flex-wrap">
          <div className="self-stretch w-[1097px] relative rounded-21xl bg-white shadow-[10px_10px_5px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
          <div className="rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-salmon-100 flex flex-col items-start justify-start pt-[178px] pb-[191px] pr-[5px] pl-[251px] box-border min-w-[559px] max-w-full z-[1] mq800:pl-[125px] mq800:pt-[381.7999999999999px] mq800:pb-[124px] mq800:box-border mq800:min-w-full mq450:pl-5 mq450:box-border mq1125:flex-1">
            <div className="w-[559px] h-[490px] relative rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-salmon-100 hidden max-w-full z-[1]" />
            <h2 className="m-0 relative text-21xl tracking-[0.03em] font-bold font-inherit z-[6] mq800:text-13xl mq450:text-5xl">
              OG ODDS
            </h2>
            <div className="flex flex-row items-start justify-start pt-0 pb-[5px] pr-[26px] pl-[26.3px] mt-[-13px]">
              <b className="relative tracking-[0.03em] z-[2] mq450:text-base">
                100% GENUINE
              </b>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-[5px] pr-[27px] pl-[26.3px] mt-[-13px]">
              <b className="relative tracking-[0.03em] z-[3] mq450:text-base">
                FREE GAMES AVAILABLE
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[26.3px] mt-[-13px]">
              <b className="relative tracking-[0.03em] z-[4] mq450:text-base">
                MOST TRUSTABLE SOURCE
              </b>
            </div>
          </div>
          <div className="w-[454px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border min-w-[454px] max-w-full text-lg text-darkslategray mq800:min-w-full mq450:pt-[381.7999999999999px] mq450:box-border mq1125:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[45px] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative z-[1] mq800:text-5xl mq450:text-lg">
                  GET IN TOUCH WITH US
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[27px] relative">
                <div className="relative font-medium inline-block min-w-[55px] z-[1]">
                  Email:
                </div>
                <input
                  className="[outline:none] p-2 text-xl bg-white self-stretch h-8 relative rounded-11xl box-border min-w-[250px] z-[1] border-[2px] border-solid border-dimgray-100"
                  type="email"
                />
                <div className="absolute !my-[5px] bottom-[-5px] left-[0px] font-medium inline-block min-w-[73px] z-[1]">
                  Subject:
                </div>
              </div>
              <div className="self-stretch h-[203px] relative">
                <input
                  className="[outline:none] p-2 text-xl bg-white absolute top-[0px] left-[0px] rounded-11xl box-border w-[454px] h-8 z-[2] border-[2px] border-solid border-dimgray-100"
                  type="text"
                />
                <div className="absolute top-[32px] my-[7px] left-[0px] font-medium inline-block min-w-[87px] z-[1]">
                  Message:
                </div>
                <textarea
                  className="bg-white p-2 text-xl h-[129px] mt-[8px] w-[454px] [outline:none] absolute top-[58px] left-[0px] rounded-11xl box-border z-[1] border-[2px] border-solid border-dimgray-100"
                  
                />
              </div>
              <a href="#" className="self-stretch no-underline rounded-11xl bg-white box-border flex flex-row items-start justify-center pt-px px-5 pb-0 whitespace-nowrap max-w-full z-[1] text-7xl text-salmon-100 border-[5px] border-solid border-salmon-100">
                <div className="h-10 w-[454px] relative rounded-11xl bg-white box-border hidden max-w-full border-[3px] border-solid border-salmon-100" />
                <b className="relative z-[2]">SEND A MESSAGE</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactCard;
