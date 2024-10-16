import { BrowserRouter as Router } from "react-router-dom";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
  return (
    <div>
      <Head />
      <Router>
        <Pages />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
