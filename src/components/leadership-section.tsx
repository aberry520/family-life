"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Globe, User, Coffee, Flower2 } from "lucide-react";
import * as React from "react";
type MinistryDetails = {
  [key: string]: {
    description: string;
    responsibilities: string[];
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
        "Our Kids Ministry Team is dedicated to nurturing the spiritual growth of children through age-appropriate Bible teaching, fun activities, and creating a safe environment where kids can learn about God's love.",
      responsibilities: [
        "Sunday school programs",
        "Vacation Bible School",
        "Children's worship",
        "Nursery care",
        "Family events",
      ],
      contact: "kids@familylifechurch.example",
    },
    "Missions Team": {
      description:
        "The Missions Team coordinates our church's local and global outreach efforts, supporting missionaries and organizing service projects to share God's love with those in need around the world.",
      responsibilities: [
        "Missionary support",
        "Short-term mission trips",
        "Community outreach",
        "Disaster relief",
        "Partnership with global ministries",
      ],
      contact: "missions@familylifechurch.example",
    },
    "Men's Ministry Team": {
      description:
        "The Men's Ministry Team focuses on discipleship and fellowship opportunities specifically for men, encouraging spiritual leadership in homes, church, and community through Bible studies and events.",
      responsibilities: [
        "Men's Bible studies",
        "Mentoring",
        "Retreats and conferences",
        "Service projects",
        "Accountability groups",
      ],
      contact: "mens@familylifechurch.example",
    },
    "Women's Ministry Team": {
      description:
        "Our Women's Ministry Team provides opportunities for women to grow in their faith through Bible studies, prayer groups, and special events designed to foster meaningful relationships and spiritual growth.",
      responsibilities: ["Women's Bible studies", "Prayer groups", "Retreats", "Mentoring", "Special events"],
      contact: "womens@familylifechurch.example",
    },
    "Hospitality/Events Team": {
      description:
        "The Hospitality and Events Team creates a welcoming atmosphere for church gatherings, coordinates special events, and ensures visitors feel welcomed and connected to our church family.",
      responsibilities: [
        "Sunday morning welcome",
        "Church-wide events",
        "Fellowship meals",
        "Visitor follow-up",
        "Church decorating",
      ],
      contact: "hospitality@familylifechurch.example",
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Church Leadership</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Serving our congregation with wisdom and grace
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Card className="border-none shadow-md">
            <CardHeader className="text-center bg-[#2563eb]/5 rounded-t-lg">
              <div className="mx-auto mb-4 p-2 rounded-full bg-[#2563eb]/10 w-fit">
                <Users className="h-8 w-8 text-[#2563eb]" />
              </div>
              <CardTitle className="text-2xl">Elder Leadership</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">
                Family Life Church is led by a plurality of biblical elders who provide doctrinal instruction, vision,
                spiritual nourishment, and direction. Additionally, FLC has a number of ministry teams that serve under
                the oversight of the elders.
              </p>
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
            <div className="w-full max-w-4xl mx-auto flex justify-between border-b mb-6 overflow-x-auto">
              {ministryTeams.map((team, index) => (
                <button
                  key={index}
                  className={`px-3 md:px-4 py-3 text-sm font-medium transition-all relative flex-1 min-w-0 ${
                    selectedMinistry === team.name
                      ? "text-[#2563eb] border-b-2 border-[#2563eb] -mb-px"
                      : "text-muted-foreground hover:text-[#2563eb]/70"
                  }`}
                  onClick={() => setSelectedMinistry(team.name)}
                  title={team.name}>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                    <div
                      className={`transition-colors ${
                        selectedMinistry === team.name ? "text-[#2563eb]" : "text-muted-foreground"
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
                <Card className="border-[#2563eb]/20 bg-[#2563eb]/5">
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
                      <h4 className="font-medium text-[#2563eb] mb-1">Key Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {ministryDetails[selectedMinistry].responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-[#2563eb] mb-1">Get Involved</h4>
                      <p>
                        Interested in serving with this team? Contact us at{" "}
                        <a
                          href={`mailto:${ministryDetails[selectedMinistry].contact}`}
                          className="text-[#2563eb] underline underline-offset-2">
                          {ministryDetails[selectedMinistry].contact}
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

