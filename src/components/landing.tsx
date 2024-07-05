import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landing() {
  const [currentBgUrl, setCurrentBgUrl] = useState("/images/waterday/IMG_8130.JPG");
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
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

    const changeBackground = () => {
      console.log("Changing background");
      setTimeout(() => {
        setCurrentBgUrl(backgrounds[currentIndex]);
        setCurrentIndex(currentIndex + 1);
        if (currentIndex >= backgrounds.length - 1) {
          setCurrentIndex(0); // Loop back to the start
        }
      }, 12000);
    };

    changeBackground();
  }, [currentBgUrl]);
  return (
    <section
      className="w-full pb-12 pt-20 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40 xl:pb-48 xl:pt-56 bg-cover bg-center flex justify-center items-center fade-bg"
      style={{
        backgroundImage: `url(${currentBgUrl})`,
        height: "80vh",
      }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1
            className="text-2xl font-bold tracking-normal text-primary-foreground sm:text-4xl md:text-6xl drop-shadow-lg"
            style={{ fontFamily: "sinkin_sans600_semibold" }}>
            BY THE WORD OF GOD
          </h1>
          <Link
            href="#about"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Learn More
          </Link>
          <p className="max-w-[600px] text-primary-foreground md:text-xl drop-shadow-lg">
            A new church plant in Iva, SC!
            <br /> Here to serve Jesus and this community!
          </p>
        </div>
      </div>
    </section>
  );
}
