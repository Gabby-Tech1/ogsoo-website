import Footer1 from "../components/Footer1";
import Testimonial1 from "../components/Testimonial1";
import AboutPageNav from "../components/AboutPageNav";

const About = () => {
  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-start justify-start gap-[74px] tracking-[normal] mq450:gap-[18px_74px] mq800:gap-[37px_74px]">
      <AboutPageNav />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-11xl text-white font-poppins-medium-25">
        <div className="w-[994px] flex flex-col items-end justify-start gap-[73px] max-w-full mq800:gap-[18px_73px] mq1125:gap-[36px_73px]">
          <div className="w-[688px] flex flex-row items-start justify-end py-0 px-1 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[562px] w-[403px] absolute !m-[0] bottom-[-132px] left-[-340px] rounded-17xl object-cover"
                loading="lazy"
                alt=""
                src="/8219@2x.png"
              />
              <div className="flex-1 rounded-11xl bg-salmon-100 box-border flex flex-col items-start justify-start pt-[54px] pb-[74px] pr-[21px] pl-[59px] gap-[24px] max-w-full z-[1] border-[1px] border-solid border-dimgray-100 mq800:pl-[29px] mq800:box-border">
                <div className="w-[680px] h-[347px] relative rounded-11xl bg-salmon-100 box-border hidden max-w-full border-[1px] border-solid border-dimgray-100" />
                <div className="w-[536px] flex flex-row items-start justify-center max-w-full">
                  <div className="relative font-medium z-[2] mq450:text-lg mq800:text-5xl">
                    Introducing OG ODDS
                  </div>
                </div>
                <div className="self-stretch relative text-xl font-medium z-[2] mq450:text-base">
                  The Bigger the sports event the more interest, excitement and
                  media attention on the action. And the more betting markets we
                  have available here at enokay69 to turn your opinions into
                  winning bets. Bigger sports event coming up!!.
                </div>
              </div>
            </div>
          </div>
          <Testimonial1 />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default About;
