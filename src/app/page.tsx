import MainSection from "@/Components/MainSection";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-(--main-background-color) p-20 mt-20 ">
      <main className="">
        <MainSection />
        <Skills />
      </main>
    </div>
  );
}
