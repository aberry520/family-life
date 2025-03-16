"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Globe, User, Coffee, Flower2 } from "lucide-react";
import * as React from "react";
type MinistryDetails = {
  [key: string]: {
    description: string;
    opportunities: string[];
    contact: string;
  };
};
export default function LeadershipSection() {
  const ministryTeams = [
    { name: "Kids Ministry Team", icon: <Heart className="h-8 w-8 text-[#2563eb]" /> },
    { name: "Missions Team", icon: <Globe className="h-8 w-8 text-[#2563eb]" /> },
    { name: "Men's Ministry Team", icon: <User className="h-8 w-8 text-[#2563eb]" /> },
    { name: "Women's Ministry Team", icon: <Flower2 className="h-8 w-8 text-[#2563eb]" /> },
    { name: "Hospitality/Events Team", icon: <Coffee className="h-8 w-8 text-[#2563eb]" /> },
  ];

  // Add state to track selected ministry
  const [selectedMinistry, setSelectedMinistry] = React.useState<string>(ministryTeams[0].name);

  // Extended ministry details
  const ministryDetails: MinistryDetails = {
    "Kids Ministry Team": {
      description:
        "Our kids ministry team seeks to point children to Jesus through the teaching of Scripture and developing relationships. We desire for our kids to live their lives “by the Word of God” so that they can join the adults in being “family finding life in Christ”",
      opportunities: [
        "Foundations: This is a kids small group that takes place at 9:45am on Sundays. Kids learn core components of theology and how that points them to Christ and applies to their lives.",
        "Kids Activities: Throughout the year we will plan several events and activities for kids. These activities are intended to be fun but also to invest in kids and create opportunities to point them to Jesus.",
        "Pre-Service Playtime: Each week many of our kids come early for a chance to play together before church starts. It can get loud, but the kids love having a fun time building relationships and seeing that church is for kids too!",
      ],
      contact: "kids@familylifechurch.example",
    },
    "Missions Team": {
      description:
        "A core part of Family Life Church is that we are on mission to share Jesus with others and make disciples. Our missions team exists to create and seek out opportunities for our church to share Jesus with a lost world.",
      opportunities: [
        "Evangelistic Events: We are intentional about planning community events that will create opportunities to share the gospel.",
        "Door-to-Door Prayer: We seeks to regularly go door to door in our community in order to prayer for people and show them the love of Jesus. This will also be an opportunity to share the gospel with them.",
        "Local Ministries: Our Missions Team will also seek out other local ministries that are making a gospel impact in our area so that we can support them in their work.",
        "Mission Trips: We are intentionally planning mission trips each year. Sometimes these will be international trips (we have a partnership with a house church network in Cuba). Other times these will be local or domestic mission trips. Either way, we will be going and sharing Jesus wherever we are!",
      ],
      contact: "missions@familylifechurch.example",
    },
    "Men's Ministry Team": {
      description:
        "We believe that God desires strong men in the church. We strive to disciple men and teach them to disciple other men as they lead their families, study Scripture, live as faithful examples, and point people to Jesus.",
      opportunities: ["We have a discussion based Bible study specifically for men every Wednesday night at 7pm."],
      contact: "mens@familylifechurch.example",
    },
    "Women's Ministry Team": {
      description:
        "We believe that God desires women who are strong in their faith, loving their families, faithful in their living, and putting the beauty of Christ on display with their lives. We strive to teach these things and more to women as they encourage and disciple one another and raise up more godly women.",
      opportunities: ["We have a discussion based Bible study specifically for women every Monday night at 7pm."],
      contact: "womens@familylifechurch.example",
    },
    "Hospitality/Events Team": {
      description:
        "As we seek opportunities to point one another to Jesus, our Hospitality/Events team seeks to organize welcoming environments for fellowship and community.",
      opportunities: ["Various events throughout the year during which we can love one another."],
      contact: "hospitality@familylifechurch.example",
    },
  };

  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elder Led
              <br />
              Church Leadership
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Serving our congregation with wisdom and grace
            </p>
          </div>
        </div>

        <div className="relative mx-auto mb-24">
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#3e568b81]"></div>
            {/* <CardHeader className="text-center pt-10 pb-6">
              <div className="mx-auto mb-6 p-4 rounded-full bg-[#2563eb]/10 w-fit">
                <Users className="h-12 w-12 text-[#2563eb]" />
              </div>
              <CardTitle className="text-3xl font-bold text-[#2563eb]">Elder Led</CardTitle>
              <p className="text-lg text-muted-foreground mt-2">Biblical Guidance & Spiritual Direction</p>
            </CardHeader> */}
            <CardContent className="pt-4 pb-10 text-center max-w-3xl mx-auto">
              <p className="text-lg">
                Family Life Church is led by a <span className="font-semibold">plurality of biblical elders</span> who
                provide doctrinal instruction, vision, spiritual nourishment, and direction. Our elders are committed to
                shepherding the congregation according to Scripture and guiding the church in fulfilling its mission.
              </p>
              <div className="mt-6 p-4 bg-[#2563eb]/5 rounded-lg border border-[#2563eb]/10">
                <p className="italic">
                  &quot;Let the elders who rule well be considered worthy of double honor, especially those who labor in
                  preaching and teaching.&quot;
                </p>
                <p className="text-sm mt-2">1 Timothy 5:17</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">Ministry Teams</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our ministry teams work together to serve the church body and community, each focused on specific areas of
              service and outreach. Click on a team to learn more.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="w-full max-w-4xl mx-auto flex justify-between">
              {ministryTeams.map((team, index) => (
                <button
                  key={index}
                  className={`px-3 md:px-4 py-3 text-sm font-medium transition-all relative flex-1 min-w-0 ${
                    selectedMinistry === team.name
                      ? "text-[#2563eb] border-b-0 border-[#2563eb] bg-[#2563eb]/5 rounded-t-lg border"
                      : "text-muted-foreground hover:text-[#2563eb]/70 bg-muted rounded-t-lg border border-b-[#2563eb]"
                  }`}
                  onClick={() => setSelectedMinistry(team.name)}
                  title={team.name}>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                    <div
                      className={`transition-colors ${
                        selectedMinistry === team.name ? "text-[#2563eb] drop-shadow" : "text-muted-foreground"
                      }`}>
                      {React.cloneElement(team.icon, { className: "h-5 w-5" })}
                    </div>
                    {/* <span className="hidden md:inline truncate">
                      {team.name.replace(" Ministry Team", "").replace(" Team", "")}
                    </span> */}
                    <span className="hidden md:inline truncate">{team.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {selectedMinistry ? (
              <div className="animate-in fade-in duration-300">
                <Card
                  className="border-[#2563eb] bg-[#2563eb]/5 border-t-0 min-h-[600px]"
                  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {ministryTeams.find((team) => team.name === selectedMinistry)?.icon}
                      <CardTitle>{selectedMinistry}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#2563eb] mb-1">About This Ministry</h4>
                      <p>{ministryDetails[selectedMinistry].description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#2563eb] mb-1">Serving Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {ministryDetails[selectedMinistry].opportunities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-[#2563eb] mb-1">Get Involved</h4>
                      <p>
                        Interested in serving with this team?{" "}
                        <a
                          href="/contact#contact"
                          className="text-[#2563eb] underline underline-offset-2">
                          Contact us!
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center p-8 border rounded-lg bg-muted/10">
                <p className="text-muted-foreground">Select a ministry team above to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

