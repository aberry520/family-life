import Link from "next/link";
import useWindowDimensions from "../../utils";
import { HandCoins, MapPinned } from "lucide-react";

export default function Footer() {
  const { width } = useWindowDimensions();
  function FacebookIcon(props: any) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

  function InstagramIcon(props: any) {
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
        <rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="5"
          ry="5"
        />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line
          x1="17.5"
          x2="17.51"
          y1="6.5"
          y2="6.5"
        />
      </svg>
    );
  }

  function MailIcon(props: any) {
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
        <rect
          width="20"
          height="16"
          x="2"
          y="4"
          rx="2"
        />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  function TwitterIcon(props: any) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    );
  }

  return (
    <footer className="bg-[#f5f5f5] py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#333]">Let the Word of Christ Dwell in You</h3>
        <div className="relative mb-8">
          <p className="text-lg italic text-[#555] leading-relaxed">
            <span className="font-calligraphy text-s">
              {`"Let the word of Christ dwell in you richly, teaching and\n admonishing one another in all wisdom, singing psalms and hymns\n and spiritual songs, with thankfulness in your hearts to God. And\n whatever you do, in word or deed, do everything in the name of\n the Lord Jesus, giving thanks to God the Father through him."`}
            </span>
            <br />
            <span className="text-sm font-medium">- Colossians 3:16-17 ESV</span>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="https://www.facebook.com/people/Family-Life-Church-Iva/61558998081855/"
            className="inline-flex items-center justify-center  rounded-xl bg-[#cccccc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#555]"
            prefetch={false}>
            <FacebookIcon className="mr-2 h-4 w-4 max-sm:mr-0" />
            {width > 640 && "Facebook"}
          </Link>
          <Link
            href="https://www.instagram.com/familylifechurchsc"
            className="inline-flex items-center justify-center  rounded-xl bg-[#cccccc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#555]"
            prefetch={false}>
            <InstagramIcon className="mr-2 h-4 w-4 max-sm:mr-0" />
            {width > 640 && "Instagram"}
          </Link>
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=205+W+Jackson+St%2C+Iva%2C+SC+29655"
            className="inline-flex items-center justify-center  rounded-xl bg-[#cccccc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#555]"
            prefetch={false}>
            <MapPinned className="mr-2 h-4 w-4 max-sm:mr-0" />
            {width > 640 && "Location"}
          </Link>
          <Link
            href="https://familylifechurchsc.churchcenter.com/giving"
            className="inline-flex items-center justify-center rounded-xl bg-[#cccccc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#555] "
            prefetch={false}>
            <HandCoins className="mr-2 h-4 w-4 max-sm:mr-0" />
            {width > 640 && "Giving"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
