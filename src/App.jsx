import Hero from "./components/hero";
import DividerImage from "./components/DividerImage";
import CountdownSection from "./components/CountdownSection";
import CalendarSection from "./components/CalendarSection";
import EventSection from "./components/EventSection";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import DressCode from "./components/DressCode";
import LluviaDeSobres from "./components/LluviaDeSobres";
import MusicButton from "./components/MusicButton";
import separator_1 from "/separator_1.jpg";
import separator_2_2 from "../src/assets/separator/separator_2_2.jpeg";
import imagen_7_2 from "../src/assets/separator/imagen_7_2.jpeg";

function App() {

  return (
    <main className="bg-ivory min-h-screen">

      <MusicButton />

      <Hero />

      <DividerImage image={separator_1} />

      <CountdownSection />

      <DividerImage image={separator_2_2} />

      <CalendarSection />

      <DividerImage image={imagen_7_2} />

      <EventSection />

      <Gallery />

      <DressCode />
      
      <LluviaDeSobres />

      <RSVP />

    </main>
  );
}

export default App;