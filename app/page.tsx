import { Header } from "@/components/header";
import { Contact, Education, Hero, Hobbies, Projects, SectionDivider, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <SectionDivider />
        <Education />
        <section className="bg-[#f0f2ed] dark:bg-white/[0.02]">
          <Projects />
        </section>
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
