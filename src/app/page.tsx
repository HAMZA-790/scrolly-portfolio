import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Details from "@/components/Details";

export const metadata = {
  title: "Hamza Iftikhar | Software Engineer Portfolio",
  description: "A high-performance scrollytelling portfolio for Hamza Iftikhar, Software Engineer and AI enthusiast.",
};

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Projects />
      <Details />
    </main>
  );
}
