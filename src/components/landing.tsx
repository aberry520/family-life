import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils";

export default function Landing() {
  const { width } = useWindowDimensions();
  const backgrounds = [
    "/images/waterday/IMG_8130.JPG",
    "/images/waterday/IMG_8192.JPG",
    "/images/waterday/IMG_8240.JPG",
    "/images/waterday/IMG_8293.JPG",
    "/images/waterday/IMG_8337.JPG",
    "/images/waterday/IMG_8398.JPG",
    "/images/waterday/IMG_8538.JPG",
    "/images/waterday/IMG_8879.JPG",
    "/images/waterday/IMG_8919.JPG",
  ];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [currentBgUrl, setCurrentBgUrl] = useState("/images/waterday/IMG_8130.JPG");
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (width > 768) {
      const changeBackground = () => {
        setTimeout(() => {
          setCurrentBgUrl(backgrounds[currentIndex]);
          setCurrentIndex(currentIndex + 1);
          if (currentIndex >= backgrounds.length - 1) {
            setCurrentIndex(0); // Loop back to the start
          }
        }, 12000);
      };
      changeBackground();
    }
  }, [currentBgUrl, width]);
  return (
    <section
      className="w-full pb-12 pt-20 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40 xl:pb-48 xl:pt-56 bg-cover bg-center flex justify-center items-center fade-bg"
      style={{
        backgroundImage: `url(${width > 768 ? currentBgUrl : backgrounds[randomIndex]})`,
        height: "80vh",
      }}>
      <div className="container md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1
            className="text-3xl font-bold tracking-normal text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl"
            style={{
              fontFamily: "sinkin_sans600_semibold",
              textUnderlineOffset: 10,
              textDecorationThickness: 5,
              textShadow: "2px 2px 14px #00000068",
            }}>
            BY THE WORD OF GOD
          </h1>
          <h2
            className="max-w-[600px] text-primary-foreground text-md sm:text-xl md:text-3xl drop-shadow-lg p-2"
            style={{ fontFamily: "sinkin_sans600_semibold", textShadow: "2px 2px 10px #00000083" }}>
            Sunday Service - 10 AM
          </h2>
          <p
            className="max-w-[600px] text-primary-foreground md:text-xl drop-shadow-lg"
            style={{ textShadow: "2px 2px 10px #00000083" }}>
            A new church plant in Iva, SC!
            <br /> Here to serve Jesus and this community!
          </p>
        </div>
      </div>
    </section>
  );
}
