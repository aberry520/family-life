import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function About() {
  function BadgeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      </svg>
    );
  }

  function ChurchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
        <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
        <path d="M18 22V5l-6-3-6 3v17" />
        <path d="M12 7v5" />
        <path d="M10 9h4" />
      </svg>
    );
  }

  function WaypointsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle
          cx="12"
          cy="4.5"
          r="2.5"
        />
        <path d="m10.2 6.3-3.9 3.9" />
        <circle
          cx="4.5"
          cy="12"
          r="2.5"
        />
        <path d="M7 12h10" />
        <circle
          cx="19.5"
          cy="12"
          r="2.5"
        />
        <path d="m13.8 17.7 3.9-3.9" />
        <circle
          cx="12"
          cy="19.5"
          r="2.5"
        />
      </svg>
    );
  }
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 justify-center flex">
        <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Our Church</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to our vibrant church community! We are a place of worship, fellowship, and service, dedicated to
              spreading the love of God and making a positive impact in our local neighborhood and beyond.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Learn More
            </Link>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="About Us"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted justify-center flex">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 md:px-6">
          <Card>
            <CardHeader>
              <ChurchIcon className="h-8 w-8 text-primary" />
              <CardTitle>Our Beliefs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe that the Bible is the inerrant Word of God and that it is the final authority in all matters
                of faith and practice. We believe in the Trinity, the deity of Christ, and the necessity of salvation
                through faith in Him. This and much more is covered in the Baptist Faith and Message 2000. (link to
                https://bfm.sbc.net/bfm2000/ )
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <WaypointsIcon className="h-8 w-8 text-primary" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is for our lives, ministry, actions, and decisions to all be by the Word of God. We believe
                that all Scripture points us to Christ and is sufficient to lead to the fulfillment of our vision.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BadgeIcon className="h-8 w-8 text-primary" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our vision is to be a family that is finding our life in Jesus alone. He is our hope, rest, assurance,
                joy, salvation, and Lord. We have died to our old selves, and our life is hidden with Christ. No matter
                where you are in your journey, let's take your next step in finding life in Christ together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
