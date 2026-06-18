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
import imagen_11 from '../src/assets/gallery/imagen_11.jpeg';
import separator_2_2 from "../src/assets/separator/separator_2_2.jpeg";
import imagen_13 from '../src/assets/gallery/imagen_13.jpeg';

function App() {

  return (
    <main className="bg-ivory min-h-screen">

      <MusicButton />

      <Hero />

      <DividerImage image={separator_2_2} />

      <CountdownSection />

      <DividerImage image={imagen_11} />

      <CalendarSection />

      <DividerImage image={imagen_13} />

      <EventSection />

      <Gallery />

      <DressCode />
      
      <LluviaDeSobres />

      <RSVP />

    </main>
  );
}

export default App;