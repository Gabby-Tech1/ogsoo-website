import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
import Footer1 from "../components/Footer1";

const Contact = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpBtnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-start justify-start gap-[131px] tracking-[normal] mq800:gap-[65px_131px] mq450:gap-[33px_131px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-full mq800:gap-[39px_78px] mq450:gap-[19px_78px]">
        <Navbar
          logoIconHeight="98px"
          logoIconFlex="unset"
          onHOMETextClick={onHOMETextClick}
          onABOUTUSTextClick={onABOUTUSTextClick}
          onLoginBtnClick={onLoginBtnClick}
          onSignUpBtnClick={onSignUpBtnClick}
        />
        <ContactCard />
      </section>
      <Footer1
        propMarginRight="unset"
        propMargin="unset"
        propMargin1="unset"
        propMargin2="unset"
        propMargin3="unset"
        propMargin4="unset"
      />
    </div>
  );
};

export default Contact;
