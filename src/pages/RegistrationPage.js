import { useCallback } from "react";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const onDontHaveAnClick = useCallback(() => {
    // Please sync "Registration page" to the project
  }, []);

  return (
    <div className={styles.registrationPage}>
      <img
        className={styles.digitalScreenWithEnvironmenIcon}
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <div className={styles.welcomeBack}>Welcome back</div>
      <div className={styles.pleaseEnterYour}>Please enter your detail</div>
      <form className={styles.sign}>
        <div className={styles.signChild} />
        <div className={styles.signItem} />
        <div className={styles.email}>Email</div>
        <div className={styles.password}>Password</div>
        <div className={styles.signInner} />
        <div className={styles.rememberMe}>Remember Me</div>
        <div className={styles.dontHaveAn} onClick={onDontHaveAnClick}>
          Don’t have an account ? Sign up
        </div>
        <div className={styles.forgotPassword}>Forgot password</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.signIn}>Sign In</div>
      </form>
    </div>
  );
};

export default RegistrationPage;
