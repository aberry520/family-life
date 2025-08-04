import Link from "next/link";

export function About() {
  return (
    <div id="about">
      <section className="w-full pt-20 md:pt-24 lg:pt-32 justify-center flex">
        <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Our Church</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to our vibrant church community! We are a place of worship, fellowship, and service, dedicated to
              spreading the love of God and making a positive impact in our local neighborhood and beyond.
            </p>
            <Link
              href="/about"
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
    </div>
  );
}
