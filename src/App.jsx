import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Head />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
