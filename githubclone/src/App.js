import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
