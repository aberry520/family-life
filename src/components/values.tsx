export default function Values() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 justify-center flex">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="grid gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            At the heart of our community are these core beliefs that guide our ministry and outreach.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Scriptural Fidelity</h3>
            </div>
            <p className="text-muted-foreground">
              Scripture is our rule. If we cannot base it upon Scripture then we don&apos;t do it. We strive to do all
              that Scripture teaches and nothing that it doesn&apos;t. This applies to all areas of church and life.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <CompassIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Missionality</h3>
            </div>
            <p className="text-muted-foreground">
              God has placed us in Iva in order to be on mission for Him. We are called to share the gospel, love
              others, and serve. We will be intentional about engaging this community and beyond with the good news of
              Jesus! Evangelism and making disciples for the glory of God is what we are all about doing.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Family</h3>
            </div>
            <p className="text-muted-foreground">
              We believe in the importance of being a church family and building up individual families. We desire to
              invest in families in our church, in our community, in the larger kingdom of God, and to specifically
              focus on discipling the next generation.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <BookIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Theology</h3>
            </div>
            <p className="text-muted-foreground">
              We are convinced that a right understand of God leads to right worship and practice. As we study the
              deeper things of who God is and how He works, we believe that will draw people to Him for salvation as
              well as bring people to their knees in adoration. Theology, evangelism, discipleship, and practicality are
              not mutually exclusive, but rather a biblical theology motivates, empowers, and guides each of these
              things.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <MinimizeIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Simplicity</h3>
            </div>
            <p className="text-muted-foreground">
              We believe that church should be simple (though not easy). We are not called to do everything, fill every
              calendar slot, or run every program. However, Scripture does call us to do a few things very well. If we
              can&apos;t do it faithfully and biblically then we don&apos;t need to do it.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <TargetIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Intentionality</h3>
            </div>
            <p className="text-muted-foreground">
              We want to be intentional about doing the things God has called us to do. We want to purposefully take the
              steps necessary to reach others with the gospel, make space for family worship time, invest in
              discipleship, prioritize the things of the Lord, build relationships, and more. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BookOpenIcon(props: any) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CompassIcon(props: any) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle
        cx="12"
        cy="12"
        r="10"
      />
    </svg>
  );
}

function MinimizeIcon(props: any) {
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
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function TargetIcon(props: any) {
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
        cy="12"
        r="10"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
      />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle
        cx="9"
        cy="7"
        r="4"
      />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
