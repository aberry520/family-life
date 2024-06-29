import Link from "next/link";
import { useEffect, useState } from "react";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import { About } from "./about";
import Values from "./values";

export default function Home() {
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
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
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
              href="#"
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
      <About />
      <Values />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Upcoming Events</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Us for Upcoming Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our upcoming events and activities. We have something for everyone, from worship services to
                community outreach programs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/images/preaching.jpeg"
              width="550"
              height="310"
              alt="Event"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Sunday Worship</h3>
                    <p className="text-muted-foreground">
                      Join us every Sunday at 10 AM for our weekly worship service.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Bible Study</h3>
                    <p className="text-muted-foreground">
                      Dive deeper into the Word of God with our weekly Bible study group.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Community Outreach</h3>
                    <p className="text-muted-foreground">
                      Join us as we serve our local community through various outreach programs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
