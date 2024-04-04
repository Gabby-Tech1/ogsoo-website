import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginEmailField from "../components/LoginEmailField";
import Footer1 from "../components/Footer1";

const VIP = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpBtnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="w-full relative bg-mistyrose overflow-hidden flex flex-col items-end justify-start gap-[38.5px] tracking-[normal] mq800:gap-[19px_38.5px]">
      <Navbar
        logoIconHeight="98px"
        logoIconFlex="unset"
        onHOMETextClick={onHOMETextClick}
        onABOUTUSTextClick={onABOUTUSTextClick}
        onCONTACTTextClick={onCONTACTTextClick}
        onLoginBtnClick={onLoginBtnClick}
        onSignUpBtnClick={onSignUpBtnClick}
      />
      <LoginEmailField />
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

export default VIP;
