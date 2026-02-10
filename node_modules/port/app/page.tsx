import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      <About />
      <Projects />
      <Footer />
    </main>
  );
}
