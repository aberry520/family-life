'use client';
import styles from "./page.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowDimensions from "../../utils";
export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {width < 500 && (
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
            style={{ opacity: 0.1, height: "50em" }}
          />
        </div>
      )}
      <main className={styles.main}>
        <div className={styles.description}>
          {width > 700 && (
            <>
              <div style={{ width: "20%" }}>
                <img
                  src="/familyLife-logo.png"
                  alt="Family Life Church Logo"
                  style={{ width: "4.5em" }}
                  // style={{ position: 'absolute', opacity: 0.1, zIndex: 0 }}
                />
              </div>
            </>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: width > 700 ? "flex-end" : "center",
            }}>
            <a
              href="https://www.instagram.com/familylifechurchsc/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: width > 700 ? 10 : 0 }}>
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
              style={{ marginLeft: width > 700 ? 10 : 0 }}>
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
              style={{ marginLeft: width > 700 ? 10 : 0 }}>
              <img
                src="/email-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={"50em"}
              />
            </a>
            {width < 700 && (
              <a
                href="https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: width > 700 ? 10 : 0 }}>
                <img
                  src="/navigation-rd-trs.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={"50em"}
                />
              </a>
            )}
          </div>
        </div>

        <div className={styles.center}>
          <img
            src="/welcome.png"
            alt="Family Life Church Logo"
            style={{ width: "40em", marginBottom: "-3.25em" }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "4em",
              width: "100%",
              color: "#0b4465",
              fontFamily: "sinkin_sans600_semibold",
            }}>
            FAMILY LIFE CHURCH
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2em",
              width: "100%",
              color: "#0b4465",
              fontFamily: "sinkin_sans600_semibold",
              fontWeight: 100,
            }}>
            BY THE WORD OF GOD
          </h2>
        </div>

        <div
          // className={styles.grid}
          style={{
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <p>Statement of faith here</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655"
            target="_blank">
            Click here for map
          </a>
        </div>
      </main>
    </>
  );
}
