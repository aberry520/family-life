"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Us</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We welcome you to join our community for worship, fellowship, and spiritual growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <Card className="overflow-hidden ">
              <CardHeader>
                <CardTitle>Service Times & Information</CardTitle>
                <CardDescription>Join us for worship and fellowship</CardDescription>
              </CardHeader>
              <CardContent className="space-y-10">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Sunday Services</h3>
                    <p className="text-sm text-muted-foreground">9:45 AM - Kids Foundations</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - Sunday Service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Address</h3>
                    <p className="text-sm text-muted-foreground">123 Faith Street</p>
                    <p className="text-sm text-muted-foreground">Anytown, ST 12345</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New Here?</CardTitle>
                <CardDescription>What to expect on your first visit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're excited to welcome you! Our services are casual and friendly. When you arrive, our greeters will
                  help you find your way around and answer any questions you might have.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full">
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
              <CardDescription>We're located in the heart of the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.7327938958038!2d-82.66910902417582!3d34.306352873062416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885876143d1eb91f%3A0xec20a5e7468c338!2s205%20W%20Jackson%20St%2C%20Iva%2C%20SC%2029655!5e0!3m2!1sen!2sus!4v1742094711121!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location"
                  className="aspect-square h-full w-full"></iframe>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                asChild
                className="w-full">
                <a
                  href="https://www.google.com/maps/dir//123+Example+St,+New+York,+NY+10006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center">
                  Get Directions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
