import Hero from "./components/hero";
import DividerImage from "./components/DividerImage";
import CountdownSection from "./components/CountdownSection";
import CalendarSection from "./components/CalendarSection";
import EventSection from "./components/EventSection";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import MusicButton from "./components/MusicButton";
import {separator_1, separator_2, separator_3} from "../../public/imagen_1.jpg";

function App() {

  return (
    <main className="bg-ivory min-h-screen">

      <MusicButton />

      <Hero />

      <DividerImage image={separator_1} />

      <CountdownSection />

      <DividerImage image={separator_2} />

      <CalendarSection />

      <DividerImage image={separator_3} />

      <EventSection />

      <Gallery />

      <RSVP />

    </main>
  );
}

export default App;