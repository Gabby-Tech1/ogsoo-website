import Footer1 from "../components/Footer1";
import HomeIntro from "../components/HomeIntro";
import PopularLeagues from "../components/PopularLeagues";
import BetSlips from "../components/BetSlips";

const Home = () => {
  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[107px] tracking-[normal] mq800:gap-[53px_107px] mq450:gap-[27px_107px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[61px] max-w-full mq800:gap-[30px_61px] mq450:gap-[15px_61px]">
        
        <HomeIntro />
        <PopularLeagues />
        <BetSlips />
      </main>
      <Footer1 />
    </div>
  );
};

export default Home;
