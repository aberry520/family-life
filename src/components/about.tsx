import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpenIcon, ChurchIcon, UsersIcon } from "lucide-react";

export function About() {
  return (
    <div id="about">
      <section className="w-full py-12 md:py-24 lg:py-32 justify-center flex">
        <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Our Church</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to our vibrant church community! We are a place of worship, fellowship, and service, dedicated to
              spreading the love of God and making a positive impact in our local neighborhood and beyond.
            </p>
            <Link
              href="#values"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Learn More
            </Link>
          </div>
          <img
            src="/images/family3.JPG"
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
              <h3 className="text-lg font-semibold">Grounded in Faith</h3>
              <p className="text-muted-foreground">
                We believe that the Bible is the inerrant Word of God and that it is the final authority in all matters
                of faith and practice. We believe in the Trinity, the deity of Christ, and the necessity of salvation
                through faith in Him. This and much more is covered in the Baptist Faith and Message 2000.
              </p>
              <Link
                href="https://bfm.sbc.net/bfm2000/"
                className="flex h-10 w-48 my-2 md:mx-auto items-center text-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Baptist Faith & Message
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpenIcon className="h-8 w-8 text-primary" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">By the Word of God</h3>
              <p className="text-muted-foreground">
                Our mission is for our lives, ministry, actions, and decisions to all be by the Word of God. We believe
                that all Scripture points us to Christ and is sufficient to lead to the fulfillment of our vision.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <UsersIcon className="h-8 w-8 text-primary" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Family Finding Life in Christ</h3>
              <p className="text-muted-foreground">
                Our vision is to be a family that is finding our life in Jesus alone. He is our hope, rest, assurance,
                joy, salvation, and Lord. We have died to our old selves, and our life is hidden with Christ. No matter
                where you are in your journey, let&apos;s take your next step in finding life in Christ together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
