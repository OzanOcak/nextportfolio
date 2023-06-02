import About from "./components/About";
import Archive from "./components/Archive";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Archive />
    </main>
  );
}
