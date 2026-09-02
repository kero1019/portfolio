import MainSection from "@/Components/MainSection";
import Skills from "@/Components/Skills";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
export default function Home() {
  return (
    <div className="min-h-screen bg-(--main-background-color) px-4 py-12 pt-24 sm:px-8 sm:py-16 sm:pt-28 lg:px-20 lg:py-20 lg:pt-32">
      <main className="mx-auto w-full max-w-7xl">
        <MainSection />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
