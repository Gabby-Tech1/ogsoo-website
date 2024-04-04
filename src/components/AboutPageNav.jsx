import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AboutPageNav = memo(() => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
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
    <section className="self-stretch h-[161px] flex flex-row items-start justify-start pt-0 px-0 pb-[63px] box-border max-w-full">
      <Navbar
        logoIconHeight="unset"
        logoIconFlex="1"
        onHOMETextClick={onHOMETextClick}
        onCONTACTTextClick={onCONTACTTextClick}
        onLoginBtnClick={onLoginBtnClick}
        onSignUpBtnClick={onSignUpBtnClick}
      />
    </section>
  );
});

export default AboutPageNav;
