import Footer from "./footer";
import Header from "./header";
import { About } from "./about";
import Landing from "./landing";
import JoinUs from "./joinUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Landing />
      <About />
      <JoinUs />
      <Footer />
    </div>
  );
}
