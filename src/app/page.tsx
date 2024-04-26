import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      className={styles.main}
      // style={{ background: "red" }}
    >
      <img
        src="/familyLife-logo.png"
        alt="Family Life Church Logo"
        style={{ position: "absolute", opacity: 0.1, zIndex: 0 }}
      />
      <div className={styles.description}>
        {/* <p>Statemnet of Faith Here</p> */}
        <img
          src="/familyLife-logo.png"
          alt="Family Life Church Logo"
          style={{ width: 75 }}
          // style={{ position: "absolute", opacity: 0.1, zIndex: 0 }}
        />
        <img
          src="/familyLife-words.png"
          alt="Family Life Church Logo"
          style={{ height: 75 }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            href="https://www.instagram.com/familylifechurchsc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 10 }}>
            <Image
              src="/instagram-rd-trs.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
          <a
            href="https://www.facebook.com/people/Family-Life-Church-Iva/61558998081855/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 10 }}>
            <Image
              src="/facebook-rd-trs.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
          <a
            href="mailto:mike@familylifechurchsc.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 10 }}>
            <Image
              src="/email-rd-trs.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/familyLife.png"
          alt="Next.js Logo"
          width={750}
          height={450}
          priority
        /> */}
        <h1 style={{ textAlign: "right", fontSize: 100 }}>
          Welcome to
          <br />
          Family Life
          <br />
          Church
        </h1>
        <div>
          <h2>Join us for worship!</h2>
          <p>
            Sunday Morning Worship
            <br />
            10:00 am
          </p>
        </div>
      </div>

      <div
      // className={styles.grid}
      // style={{ height: "20%", width: "100%" }}
      >
        {/* <h1>Feel led </h1>
        <h2>Join us for worship!</h2>
        <p>
          Sunday Morning Worship
          <br />
          10:00 am
        </p> */}
        <p>Statement of faith here</p>
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Contact Us <span>-&gt;</span>
          </h2>
          <p>Reach out to our pastoral team and we will get back as soon as possible!</p>
        </a> */}

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Giving <span>-&gt;</span>
          </h2>
          <p>Feel led to help finacially? You can donate online here!</p>
        </a>

        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Facebook <span>-&gt;</span>
          </h2>
          <p>Follow us on Facebook!</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Instagram <span>-&gt;</span>
          </h2>
          <p>Follow us on Instagram!</p>
        </a> */}
      </div>
    </main>
  );
}
