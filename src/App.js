import CustomerExperience from "./components/CustomerExperience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Service from "./components/Service";
import Result from "./components/Result";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CustomerExperience />
      <Partners />
      <Service />
      <Result />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
