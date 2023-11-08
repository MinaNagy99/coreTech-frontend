import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "./i18n";
import NotFound from "./components/shared/NotFound";
import Navbar from './components/shared/Navbar';
import { Home } from './pages/home/Home';
import Footer from './components/shared/Footer';

function App() {
  const textDirection = i18n.languages[0] === 'ar' ? 'rtl' : 'ltr';


  useEffect(() => {
    if (localStorage.getItem('lng'))
      i18next.changeLanguage(localStorage.getItem('lng'))
  }, []);

  return (
    <div className="App" style={{ direction: textDirection }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default withTranslation()(App);
