import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Experience } from "./components/Experience";
import { WhyChoose } from "./components/WhyChoose";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <Experience />
      <WhyChoose />
      <Contact />
    </div>
  );
}
