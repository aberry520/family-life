import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import { About } from "./about";
import Values from "./values";
import Landing from "./landing";
import Events from "./events";
import Gospel from "./gospel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Landing />
      <About />
      <Values />
      <Events />
      <Gospel />
      <Contact />
      <Footer />
    </div>
  );
}
