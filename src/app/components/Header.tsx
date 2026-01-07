import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#009B3A] text-white py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> 888-ONE-LOVE
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <Mail size={14} /> covid19@moh.gov.jm
            </span>
          </div>
          <div className="flex gap-2 font-bold">
            <span>JAMAICA COVID-19 RELIEF</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          {/* Logo Placeholder - simplified Jamaica Coat of Arms vibe or Medical Cross */}
          <div className="w-10 h-10 bg-[#FED100] rounded-full flex items-center justify-center border-2 border-black text-black font-bold text-xl shadow-sm">
            JM
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl leading-tight text-slate-800">
              Ministry of Health & Wellness
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Covid Relief Fund
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-medium transition-colors hover:text-[#009B3A] ${
                currentPage === item.id ? 'text-[#009B3A] font-bold' : 'text-slate-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-[#009B3A] hover:bg-[#007a2d] text-white px-5 py-2 rounded-full font-medium transition-colors"
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left font-medium p-2 rounded hover:bg-slate-50 ${
                    currentPage === item.id ? 'text-[#009B3A] bg-slate-50' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setIsOpen(false);
                }}
                className="bg-[#009B3A] text-white py-3 rounded-lg font-medium text-center mt-2"
              >
                Apply for Relief
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
