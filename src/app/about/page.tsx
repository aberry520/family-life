"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Values from "@/components/values";
import Gospel from "@/components/gospel";
import { AboutCards } from "@/components/aboutCards";
export default function HomePage() {
  return (
    <>
      <Header />
      <Values />
      <AboutCards />
      <Gospel />
      <Footer />
    </>
  );
}
