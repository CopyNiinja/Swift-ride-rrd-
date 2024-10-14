import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
export default function Home() {
  return (
    <div className="h-dvh flex flex-col">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
