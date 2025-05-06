
import React from 'react';
import { ChefHat, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-culinary-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Brief */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat size={24} className="text-culinary-terra" />
              <span className="font-playfair text-xl font-bold">Shosh's Culinary School</span>
            </div>
            <p className="text-culinary-cream/80 mb-4">
              Empowering teens through culinary education and mentorship.
              Building skills, confidence, and brighter futures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-culinary-terra transition-all-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-culinary-terra transition-all-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-culinary-terra transition-all-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-culinary-terra transition-all-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-culinary-cream/80 hover:text-white transition-all-300">
                  About
                </a>
              </li>
              <li>
                <a href="#mission" className="text-culinary-cream/80 hover:text-white transition-all-300">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-culinary-cream/80 hover:text-white transition-all-300">
                  Challenges
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-culinary-cream/80 hover:text-white transition-all-300">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="text-culinary-cream/80 hover:text-white transition-all-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Journey</h3>
            <p className="text-culinary-cream/80 mb-4">
              Sign up to receive updates about The Knead for Change and ways to get involved.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-md flex-1 text-culinary-brown focus:outline-none focus:ring-2 focus:ring-culinary-terra"
              />
              <button 
                type="submit" 
                className="bg-culinary-terra hover:bg-culinary-terra/80 text-white px-4 py-2 rounded-md transition-all-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-white/20 text-center">
          <p className="text-culinary-cream/60 text-sm">
            © {currentYear} The Knead for Change | Shosh's Culinary School | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
