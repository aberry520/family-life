"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function HomePage() {
  return (
    <>
      <Header />
      <div
        id={"leadership"}
        className={"flex flex-col items-center justify-center"}
        style={{ minHeight: "100vh" }}>
        <text>Leadership</text>
      </div>
      <Footer />
    </>
  );
}
