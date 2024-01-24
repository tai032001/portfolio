import "./app.scss";
import Hero from "./components/herosection/herosection";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section id="Service">Service</section>
      <section id="Portfolio">Parallax</section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
