"use client";
import styles from "./page.module.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowDimensions from "../../utils";
export default function HomePage() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <main
        className={styles.main}
        style={{ paddingBottom: width > 700 ? undefined : "30%" }}>
        <div className={styles.description}>
          {width > 700 && (
            <>
              <div style={{ width: "20%" }}>
                <img
                  src="/icons/familyLife-logo.png"
                  alt="Family Life Church Logo"
                  style={{ width: width > 700 ? "4em" : "8em" }} // style={{ position: 'absolute', opacity: 0.1, zIndex: 0 }}
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
                src="/icons/instagram-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                style={{ width: width > 700 ? "4em" : "8em" }}
              />
            </a>
            <a
              href="https://www.facebook.com/people/Family-Life-Church-Iva/61558998081855/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: width > 700 ? 10 : 0 }}>
              <img
                src="/icons/facebook-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                style={{ width: width > 700 ? "4em" : "8em" }}
              />
            </a>
            <a
              href="mailto:mike@familylifechurchsc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: width > 700 ? 10 : 0 }}>
              <img
                src="/icons/email-rd-trs.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                style={{ width: width > 700 ? "4em" : "8em" }}
              />
            </a>
            {width < 700 && (
              <a
                href="https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: width > 700 ? 10 : 0 }}>
                <img
                  src="/icons/navigation-rd-trs.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  style={{ width: width > 700 ? "4em" : "8em" }}
                />
              </a>
            )}
          </div>
        </div>

        <div className={styles.center}>
          {/* <img
            src="/icons/familyLife-logo.png"
            alt="Family Life Church Logo"
            style={{ opacity: 0.25, height: "15em", position: "absolute", top: 0, zIndex: 0 }}
          /> */}
          <img
            src="/icons/welcome.png"
            alt="Family Life Church Logo"
            style={{ width: "40em", marginBottom: "-3.25em", zIndex: 1 }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "4em",
              width: "100%",
              color: "#0b4465",
              fontFamily: "sinkin_sans600_semibold",
              zIndex: 1,
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
        <div>
          <div
            // className={styles.grid}
            style={{
              // height: "20%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: 1,
              // backgroundColor: "#0b4465",
            }}>
            <p style={{ fontSize: "3em", fontWeight: "bold" }}>Sunday 10am</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=205%20W%20Jackson%20St%20Iva%2C%20SC%2029655"
              target="_blank"
              style={{ fontSize: "1.5em", fontFamily: "sinkin_sans600_semibold" }}>
              Iva Civic Center
            </a>
          </div>
          <div
            // className={styles.grid}
            style={{
              // height: "20%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: 1,
              margin: "1em 0",
            }}>
            <p style={{ fontSize: "3em", fontWeight: "bold" }}>Wednesday 7pm</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2640%20Elberton%20Highway%2C%20Iva%2C%20SC%2029655"
              target="_blank"
              style={{ fontSize: "1.5em", fontFamily: "sinkin_sans600_semibold" }}>
              Breaking Bread Farms
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
