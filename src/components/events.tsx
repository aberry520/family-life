import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Events() {
  return (
    <section
      id="events"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Us for Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our upcoming events and activities. We have something for everyone, from worship services to
              community outreach programs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 p-5">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Sunday Worship: 10 AM</h3>
                  <p className="text-muted-foreground">
                    Join us every Sunday at the{" "}
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=205+W+Jackson+St%2C+Iva%2C+SC+29655"
                      className="underline underline-offset-4 text-primary">
                      Iva Civic Center
                    </Link>{" "}
                    for our weekly worship service.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Foundations: 9:45 AM</h3>
                  <p className="text-muted-foreground">
                    Kids can join our pre-sermon &quot;Foundations&quot; class, Sunday morning, where catechisms and
                    scripture help build a strong theological foundation in understanding the gospel.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Men&apos;s Bible Study: 7 PM</h3>
                  <p className="text-muted-foreground">
                    Hosted every Wednesday night at the D&apos;Avanzo household. Our mid-week study is a great way to
                    grow in your faith and understanding of the gospel.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Women&apos;s Bible Study: 7 PM</h3>
                  <p className="text-muted-foreground">
                    Join us Monday nights at{" "}
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=2640+Elberton+Hwy%2C+Iva%2C+SC+29655"
                      className="underline underline-offset-4 text-primary">
                      Breaking Bread Farms
                    </Link>{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ margin: "0 auto" }}>
            <Carousel
              autoPlay
              infiniteLoop
              useKeyboardArrows={false}
              width={"100%"}
              showThumbs={false}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              stopOnHover={true}
              swipeable={true}
              interval={4500}>
              <div
                key={1}
                style={{ minWidth: "100%" }}>
                <img src="images/bible-study.png" />
              </div>
              <div
                key={2}
                style={{ minWidth: "100%" }}>
                <img src="images/family-discipleship.png" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
