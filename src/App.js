import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
