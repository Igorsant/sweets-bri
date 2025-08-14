import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Flavors from './pages/Flavors';
import About from './pages/About';
import Contact from './pages/Contact';
import Valentines from './pages/Valentines';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flavors" element={<Flavors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="valentines" element={<Valentines />} />
        </Route>
      </Routes>
    </Router>
  );
}
