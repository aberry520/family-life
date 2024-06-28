import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header
      className="py-4 px-6 flex items-center justify-between w-screen"
      style={{ color: "#0b4465", backgroundColor: "rgba(255, 255, 255, 0.4)", position: "absolute" }}>
      <Link
        href="#"
        className="flex items-center gap-2"
        prefetch={false}>
        <img
          src="/icons/familyLife-logo.png"
          alt="Family Life Church Logo"
          className="h-8 w-8"
        />
        <span
          className="text-l font-bold sm:text-xl md:text-2xl"
          style={{ fontFamily: "sinkin_sans600_semibold", color: "#0b4465" }}>
          FAMILY LIFE CHURCH
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#"
          className="hover:underline underline-offset-4"
          prefetch={false}>
          About
        </Link>
        <Link
          href="#"
          className="hover:underline underline-offset-4"
          prefetch={false}>
          Services
        </Link>
        <Link
          href="#"
          className="hover:underline underline-offset-4"
          prefetch={false}>
          Contact
        </Link>
      </nav>
      <Button
        variant="secondary"
        className="md:hidden">
        {/* <MenuIcon className="h-6 w-6" /> */}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </header>
  );
}
