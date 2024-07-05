export default function Events() {
  return (
    <section
      id="events"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
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
            src="/images/family-theology.jpeg"
            width="550"
            height="550"
            alt="Event"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
            // style={{ backgroundColor: "red", aspectRatio: "3/2" }}
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Sunday Worship: 10 AM</h3>
                  <p className="text-muted-foreground">
                    Join us every Sunday at the Iva Civic Center for our weekly worship service.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Wednesday Night Study: 7 PM</h3>
                  <p className="text-muted-foreground">
                    Hosted every Wednesday night at Breaking Bread Farms. Our mid-week study is a great way to grow in
                    your faith and understanding of the gospel.
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
  );
}
