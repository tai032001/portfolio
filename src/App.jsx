import "./app.scss";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Service</section>
      <section>Parallax</section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
