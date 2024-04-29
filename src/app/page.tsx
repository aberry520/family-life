"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowDimensions from "../../utils";
export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img
          src="/familyLife-logo.png"
          alt="Family Life Church Logo"
          style={{ opacity: 0.1, height: "30em" }}
        />
      </div>
      <main
        className={styles.main}
        // style={{ background: "red" }}
      >
        {/* <img
        src="/bg.png"
        alt="Family Life Church Logo"
        style={{ position: "absolute", zIndex: 0, top: 0, left: 0, right: 0, height: "100%" }}
      /> */}
        <div className={styles.description}>
          {width > 700 && (
            <>
              <div style={{ width: "20%" }}>
                <img
                  src="/familyLife-logo.png"
                  alt="Family Life Church Logo"
                  style={{ width: "4.5em" }}
                  // style={{ position: "absolute", opacity: 0.1, zIndex: 0 }}
                />
              </div>
              <div style={{ width: "59%", justifyContent: "center", display: "flex" }}>
                <img
                  src="/familyLife-words.png"
                  alt="Family Life Church Logo"
                  style={{ height: "5em" }}
                />
              </div>
            </>
          )}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: width > 700 ? "flex-end" : "center" }}>
            <a
              href="https://www.instagram.com/familylifechurchsc/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10 }}>
              <img
                src="/instagram-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={"50em"}
              />
            </a>
            <a
              href="https://www.facebook.com/people/Family-Life-Church-Iva/61558998081855/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10 }}>
              <img
                src="/facebook-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={"50em"}
              />
            </a>
            <a
              href="mailto:mike@familylifechurchsc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10 }}>
              <img
                src="/email-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={"50em"}
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

          <h1
            style={{
              textAlign: width > 700 ? "right" : "center",
              fontSize: "5em",
              width: width > 700 ? "49%" : "100%",
            }}>
            <img
              src="/welcome.png"
              alt="Family Life Church Logo"
              style={{ width: "5em" }}
            />
            <br />
            {/* Welcome to
            <br /> */}
            Family Life
            <br />
            Church
          </h1>
          <div style={{ width: width > 700 ? "49%" : "100%" }}>
            {/* <h2>Join us for worship!</h2>
          <p>
            Sunday Morning's
            <br />
            10:00 am
          </p> */}
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}>
              <div>
                <h2>Mission: "By the Word of God"</h2>
              </div>
              <div>
                <h2>Vision: "Family finding life in Christ" </h2>
              </div>
              <div>
                <h2>Church DNA: Scriptural Fidelity, Family, Theology, Simplicity, Intentionality</h2>
              </div>
            </Carousel>
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
          <a
            href="geo:124.028582,-29.201930"
            target="_blank">
            Click here for map
          </a>
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

          {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Giving <span>-&gt;</span>
          </h2>
          <p>Feel led to help finacially? You can donate online here!</p>
        </a> */}

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
    </>
  );
}
