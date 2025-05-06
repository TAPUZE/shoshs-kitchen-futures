
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-culinary-cream overflow-hidden" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          The <span className="text-culinary-mustard">Knead</span> for Change
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-culinary-cream font-light mb-8 max-w-3xl mx-auto animate-slide-up">
          Empowering Teens Through Culinary Skills
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className={cn(
              "bg-culinary-terra hover:bg-culinary-terra/90 text-white px-6 py-3 rounded-md text-lg"
            )}
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
          <Button
            className={cn(
              "bg-transparent hover:bg-white/20 border-2 border-white text-white px-6 py-3 rounded-md text-lg"
            )}
            asChild
          >
            <a href="#contact">Get Involved</a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <ChevronDown size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
