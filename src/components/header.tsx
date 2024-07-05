import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { use, useEffect, useState } from "react";
import { time } from "console";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 10000);
  }, [menuOpen === true]);
  return (
    <>
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
            href="#about"
            className="hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#events"
            className="hover:underline underline-offset-4"
            prefetch={false}>
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          variant="secondary"
          className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      {menuOpen && (
        <nav
          className="absolute top-16 right-6 bg-secondary shadow-lg rounded-md px-12 py-6 flex flex-col gap-6 items-center"
          style={{ color: "#0b4465" }}>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#events"
            onClick={() => setMenuOpen(false)}
            className="hover:underline underline-offset-4"
            prefetch={false}>
            Services
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
      )}
    </>
  );
}
