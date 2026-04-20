import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#08090b] text-slate-100 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
        {/* Background Mesh Gradients */}
        <div className="fixed -top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-28 px-4 md:px-8 pb-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <div className="px-4 md:px-8 pb-8 max-w-7xl mx-auto w-full">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}
