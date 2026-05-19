import Hero from "./components/hero";
import DividerImage from "./components/DividerImage";
import CountdownSection from "./components/CountdownSection";
import CalendarSection from "./components/CalendarSection";
import EventSection from "./components/EventSection";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import MusicButton from "./components/MusicButton";

function App() {

  return (
    <main className="bg-ivory min-h-screen">

      <MusicButton />

      <Hero />

      <DividerImage image="/src/assets/separator_1.jpg" />

      <CountdownSection />

      <DividerImage image="/src/assets/separator_2.jpg" />

      <CalendarSection />

      <DividerImage image="/src/assets/separator_3.jpg" />

      <EventSection />

      <Gallery />

      <RSVP />

    </main>
  );
}

export default App;