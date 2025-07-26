import Hero from "./components/hero/hero";
import Card from "./components/card/page";
import Contact from "./components/contact/page";
import Services from "./components/services/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card />
      <Services />
      <Contact />
    </div>
  );
}
