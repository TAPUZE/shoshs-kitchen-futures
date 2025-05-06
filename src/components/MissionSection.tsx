
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { UtensilsCrossed, Users, GraduationCap, Sparkles } from 'lucide-react';

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <UtensilsCrossed className="h-8 w-8 text-culinary-cream" />,
      title: "Culinary Excellence",
      description: "Teaching proper cooking techniques and food appreciation"
    },
    {
      icon: <Users className="h-8 w-8 text-culinary-cream" />,
      title: "Inclusivity",
      description: "Creating a welcoming environment for teens from all backgrounds"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-culinary-cream" />,
      title: "Life Skills",
      description: "Building confidence, teamwork, and practical abilities"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-culinary-cream" />,
      title: "Creative Expression",
      description: "Encouraging personal growth through culinary creativity"
    }
  ];

  return (
    <section id="mission" className="bg-culinary-brown text-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">Our Vision</h2>
            <div className="bg-white/10 p-6 rounded-lg mb-8">
              <p className="text-xl italic font-light leading-relaxed">
                "Cooking Up Brighter Futures"
              </p>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              At The Knead for Change, we envision a space where teens can explore the art of cooking 
              while developing essential life skills. Our kitchen will be more than a place to learn about food—it 
              will be a sanctuary for growth, creativity, and community.
            </p>
            <p className="text-lg leading-relaxed">
              We aim to become a recognized institution that transforms young lives through the 
              power of culinary education, creating pathways to success for our students.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed">
              "The Knead for Change isn't just a school; it's a promise of a brighter future. Through the power of food, we will heal, teach, and empower the next generation."
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <div className="space-y-6 mt-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-culinary-terra p-3 rounded-full">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">{value.title}</h4>
                    <p className="text-culinary-cream/90">{value.description}</p>
                    {index < values.length - 1 && <Separator className="mt-4 bg-white/20" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
