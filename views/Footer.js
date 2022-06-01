import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./chiara-footer.jpg" alt="chiara-portrait"></img>

      <card className={styles.footerCard}>
        <h1>HI, I AM CHIARA !</h1>
        <h5>HOLISTIC HEALTH & WELNESS COACH</h5>
        <p>
          Creating a life you love takes a willingness to dig under the surface
          of who you are and reveal what it is you want for your life. Having a
          coach to support, challenge and motivate you can make the sometimes
          daunting task of discovery one that is easier, and feel more do-able.
          In this one-hour introductory coaching call you will discover what
          health coaching is and how it can be used to help you reach your
          health and lifestyle goals. We will talk about your wellness needs and
          goals. You will receive advice on where you could start in reaching
          those goals, and what, if any, coaching package is right for you.
        </p>

        <form
          action="https://www.instagram.com/alignwithchiara/?hl=fr"
          target="_blank"
        >
          <input
            type="submit"
            value="LEARN MORE"
          />
        </form>
      </card>
    </footer>
  );
}

export default Footer;
