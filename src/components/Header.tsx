
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ChefHat, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all-300",
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-culinary-brown">
          <ChefHat size={28} className="text-culinary-terra" />
          <span className="font-playfair text-lg md:text-xl font-bold">Shosh's Culinary School</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-culinary-brown hover:text-culinary-terra transition-all-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-culinary-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-culinary-brown hover:text-culinary-terra transition-all-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
