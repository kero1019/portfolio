import Image from "next/image";
import MainSection from "@/Components/MainSection";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-(--main-background-color)">
      <main className="flex min-h-screen  ">
        <MainSection />
      </main>
    </div>
  );
}
