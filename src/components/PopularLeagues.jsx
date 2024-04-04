import { memo } from "react";

const PopularLeagues = memo(() => {
  return (
    <section className="h-[330px] flex flex-row items-start justify-start pt-0 px-[72px] pb-[13px] box-border max-w-full text-left text-46xl text-salmon-100 font-poppins-medium-25 mq800:pl-9 mq800:pr-9 mq800:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq800:gap-[22px_44px]">
        <div className="w-[1272px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit mq800:text-33xl mq450:text-20xl">
            <span>POPULAR</span>
            <span className="text-white"> LEAGUES</span>
          </h1>
        </div>
        <div className="w-[1286px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[30px] max-w-full text-center text-xl text-gray-200">
          <div className="self-stretch w-[193px] shrink-0 flex flex-col items-start justify-start py-0 pr-[33px] pl-0 box-border gap-[1px] [debug_commit:f6aba90]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[18px] pl-[17.9px]">
              <div className="self-stretch flex-1 relative rounded-17xl bg-white border-[1px] border-solid border-dimgray-100" />
            </div>
            <b className="self-stretch relative mq450:text-base">
              <p className="m-0">English Premier</p>
              <p className="m-0"> League</p>
            </b>
          </div>
          <div className="self-stretch w-[332px] shrink-0 flex flex-row items-start justify-between py-0 pr-[20.1px] pl-0 box-border [debug_commit:f6aba90]">
            <div className="self-stretch w-[124px] flex flex-col items-end justify-start gap-[1px]">
              <img
                className="self-stretch h-28 relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/la-liga@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
                <b className="w-[111px] relative inline-block mq450:text-base">
                  <p className="m-0">Spanish La</p>
                  <p className="m-0">Liga</p>
                </b>
              </div>
            </div>
            <div className="h-[158px] w-[124.9px] flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[16px]">
              <img
                className="self-stretch h-28 relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/daco-5976846@2x.png"
              />
              <b className="w-[117px] relative inline-block min-w-[117px] mq450:text-base">
                Bundesliga
              </b>
            </div>
          </div>
          <div className="h-[158px] flex flex-col items-start justify-start py-0 pr-[33px] pl-0 box-border gap-[6px] shrink-0 [debug_commit:f6aba90]">
            <img
              className="w-[126px] h-[122px] relative rounded-17xl object-cover"
              loading="lazy"
              alt=""
              src="/seria-a@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-[24.2px]">
              <b className="w-[72px] relative inline-block min-w-[72px] mq450:text-base">
                Seria A
              </b>
            </div>
          </div>
          <div className="h-[158px] w-[152px] shrink-0 flex flex-col items-end justify-start py-0 pr-7 pl-0 box-border gap-[16px] [debug_commit:f6aba90]">
            <img
              className="self-stretch h-28 relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/screenshot-20240326-105034@2x.png"
            />
            <div className="flex flex-row items-start justify-end py-0 pr-[28.3px] pl-[29px]">
              <b className="w-[67px] relative inline-block min-w-[67px] mq450:text-base">
                Ligue 1
              </b>
            </div>
          </div>
          <div className="h-40 w-[124px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[16px] shrink-0 [debug_commit:f6aba90]">
              <img
                className="self-stretch h-28 relative rounded-17xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/eredivisie@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-0 pr-[9.5px] pl-[15px]">
                <b className="w-[99px] relative inline-block min-w-[99px] mq450:text-base">
                  Eredivisie
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch w-44 shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[1px] shrink-0 [debug_commit:f6aba90]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pr-[24.4px] pl-[26px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
                  <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-17xl bg-white box-border border-[1px] border-solid border-dimgray-100" />
                  <img
                    className="h-28 flex-1 relative rounded-17xl max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/champions-league@2x.png"
                  />
                </div>
              </div>
              <b className="self-stretch relative mq450:text-base">
                <p className="m-0">UEFA Champions</p>
                <p className="m-0">League</p>
              </b>
            </div>
          </div>
          <div className="self-stretch w-[115px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="w-[52px] flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[1px] shrink-0 [debug_commit:f6aba90]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[1.8px]">
                <img
                  className="h-28 w-[126px] relative rounded-17xl object-cover"
                  loading="lazy"
                  alt=""
                  src="/europa-league@2x.png"
                />
              </div>
              <b className="w-32 h-[60px] relative inline-block mq450:text-base">
                <p className="m-0">UEFA Europa</p>
                <p className="m-0">League</p>
              </b>
            </div>
          </div>
          <div className="self-stretch w-[199px] shrink-0 flex flex-col items-start justify-start gap-[1px] [debug_commit:f6aba90]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[38px] pl-[36.5px]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[-3px] bottom-[0px] rounded-17xl bg-white box-border border-[1px] border-solid border-dimgray-100" />
                <div className="self-stretch flex-1 rounded-17xl bg-white flex flex-row items-start justify-start py-0 pr-[21px] pl-7 z-[1] border-[1px] border-solid border-dimgray-100">
                  <div className="self-stretch w-[124px] relative rounded-17xl bg-white box-border hidden border-[1px] border-solid border-dimgray-100" />
                  <img
                    className="h-28 flex-1 relative rounded-7xl max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/allnewuefaconferenceleaguelogo-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <b className="self-stretch h-[60px] relative inline-block mq450:text-base">
              <p className="m-0">{`UEFA Europa `}</p>
              <p className="m-0">{`Conference League `}</p>
            </b>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PopularLeagues;
