import Footer1 from "../components/Footer1";
import LoginLeft from "../components/LoginLeft";
import LoginRight from "../components/LogInRight";

const Login = () => {
  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-start justify-start gap-[30px] tracking-[normal]">
      <section className="self-stretch h-[743px] relative max-w-full mq800:h-auto mq800:min-h-[743]">
        <LoginRight />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[862px] max-w-full">
          <div className="absolute top-[0px] left-[0px] w-[862px] h-[743px] z-[4] flex items-center justify-center">
            <img
              className="w-full h-full z-[4] object-contain absolute left-[3px] top-[7px] [transform:scale(1.019)]"
              alt=""
              src="/path-8.svg"
            />
          </div>
          <LoginLeft />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default Login;
