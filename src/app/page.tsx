import MainSection from "@/Components/MainSection";
import Skills from "@/Components/Skills";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
export default function Home() {
  return (
    <div className="flex min-h-screen  bg-(--main-background-color) p-20 mt-20  ">
      <main className="">
        <MainSection />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
