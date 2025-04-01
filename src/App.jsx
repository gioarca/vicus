import { BrowserRouter as Router } from "react-router-dom";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
// import LanguageSelector from "./locales/LanguageSelector";
import "./App.css";
import "./i18n";

function App() {
  return (
    <>
      <Head />
      <Router>
        <Pages />
      </Router>
      <Footer />
    </>
  );
}

export default App;
