
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChefHat, BookOpen, Heart, ClipboardList } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <ChefHat className="h-8 w-8 text-culinary-terra" />,
      name: 'Culinary Expertise',
      description: 'Professional cooking skills honed through years of experience.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-culinary-terra" />,
      name: 'Teaching & Mentoring',
      description: 'Experienced in guiding others through their learning journey.'
    },
    {
      icon: <Heart className="h-8 w-8 text-culinary-terra" />,
      name: 'Patience & Empathy',
      description: 'Understanding the challenges teens face and providing support.'
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-culinary-terra" />,
      name: 'Organizational Skills',
      description: 'Structured approach to managing complex projects and curriculum.'
    }
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Shosh</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Shosh Pandany"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-culinary-cream p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-culinary-brown">Shosh Pandany</h3>
              <p className="mb-1"><span className="font-medium">Age:</span> 23</p>
              <p className="mb-1"><span className="font-medium">Location:</span> Menahamia, Israel</p>
              <p><span className="font-medium">Field of Passion:</span> Culinary Arts & Youth Empowerment</p>
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              For years, I've combined my passion for culinary arts with a deep desire to support young people. My dream is to create "The Knead for Change," a culinary school that empowers teens through cooking skills and mentorship.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Growing up in Menahamia, I discovered the transformative power of food—how it brings people together, builds confidence, and provides practical life skills. Now, I want to share this gift with teenagers who may be facing various challenges in their lives.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-culinary-brown">Skills & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="p-4 border border-culinary-cream hover:shadow-md transition-all-300">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1">{skill.icon}</div>
                    <div>
                      <h4 className="font-medium text-culinary-brown">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
