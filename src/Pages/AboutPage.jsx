import About from "../Components/About";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function AboutPage() {
  return (
    <div className=" flex flex-col">
      <Nav />
      <About />
      <Footer />
    </div>
  );
}
