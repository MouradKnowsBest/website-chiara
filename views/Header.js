import React from "react";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <title>Align With Chiara</title>
      <meta name="description" content="Align With Chiara" />
      <div>
        <div className={styles.title}>
          <h1>
            Align With{" "}
            <b>
              {" "}
              <a
                href="https://www.instagram.com/alignwithchiara/?hl=fr"
                target="_blank"
              >
                {" "}
                Chiara!
              </a>
            </b>
          </h1>
        </div>

        <div className={styles.subtitle}>
          <h3>HOLISTIC HEALTH & WELLNESS COACH</h3>
        </div>
      </div>

      <div className={styles.presentation}>
        <p>HELPING YOU TO DISCOVER HOW TO LIVE YOUR BEST LIFE</p>
        <img src="./chiara-portrait.png" alt="chiara-portrait"></img>
      </div>

      <div className={styles.description}>
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
          <input type="submit" value="EXPLORE" />
        </form>
      </div>
    </header>
  );
}

export default Header;
