import Footer2 from "../components/Footer2";
import RegisterDetails from "../components/RegisterDetails";
import RegisterRightDetails from "../components/RegisterRightDetails";

const Register = () => {
  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-start justify-start gap-[30px] tracking-[normal]">
      <section className="self-stretch h-[743px] relative max-w-full mq450:h-auto mq450:min-h-[743]">
        <RegisterRightDetails />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[862px] max-w-full mq450:h-auto mq450:min-h-[743]">
          <div className="absolute top-[0px] left-[0px] w-[862px] h-[743px] z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[3px] top-[7px] [transform:scale(1.019)]"
              alt=""
              src="/path-8.svg"
            />
          </div>
          <RegisterDetails />
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Register;
