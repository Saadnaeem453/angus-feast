import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OpeningHours from './pages/OpeningHours';
import ContactUs from './pages/ContactUs';
import Navbar from "./components/Navbar";
import MenuPricing from './pages/MenuPricing';
import AboutUs from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/opening-hours" element={<OpeningHours />} />
        <Route path="/menuPrice" element={<MenuPricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
