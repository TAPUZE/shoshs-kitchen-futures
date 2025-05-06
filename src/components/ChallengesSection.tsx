
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, MapPin, Scroll, Users } from 'lucide-react';

const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: <DollarSign className="h-10 w-10 text-culinary-terra" />,
      title: "Securing Funding",
      description: "Obtaining grants, investments, and community support to establish and maintain the school.",
      solution: "Research and apply for relevant grants, prepare compelling presentations for potential investors."
    },
    {
      icon: <MapPin className="h-10 w-10 text-culinary-terra" />,
      title: "Finding the Right Location",
      description: "Identifying an accessible, suitable space that meets our needs and budget constraints.",
      solution: "Network with local real estate agents and community leaders to find the perfect space."
    },
    {
      icon: <Scroll className="h-10 w-10 text-culinary-terra" />,
      title: "Navigating Regulations",
      description: "Complying with educational, food safety, and business requirements.",
      solution: "Consult with legal experts in education and food service, develop comprehensive compliance protocols."
    },
    {
      icon: <Users className="h-10 w-10 text-culinary-terra" />,
      title: "Outreach to Teens",
      description: "Connecting with and recruiting teenagers who would benefit most from our program.",
      solution: "Begin outreach through community centers and schools to identify potential students."
    }
  ];

  return (
    <section id="challenges" className="bg-culinary-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Challenges & Solutions</h2>
        <p className="text-lg max-w-3xl mb-12">
          Every meaningful project faces obstacles. Here are the challenges we anticipate 
          in establishing The Knead for Change, along with our strategies to overcome them.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <Card key={index} className="h-full border-t-4 border-t-culinary-terra hover:shadow-lg transition-all-300">
              <CardHeader className="pb-2">
                <div className="mb-2">{item.icon}</div>
                <CardTitle className="text-culinary-brown text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-4">
                  {item.description}
                </CardDescription>
                <h4 className="font-medium text-culinary-brown mb-2">Our Approach:</h4>
                <p className="text-sm text-gray-600">{item.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-culinary-brown">Action Plan</h3>
          <ul className="list-disc pl-6 text-gray-700 grid md:grid-cols-2 gap-x-8 gap-y-3">
            <li><span className="font-medium">Funding Strategy:</span> Research and apply for relevant grants, prepare compelling presentations for potential investors.</li>
            <li><span className="font-medium">Location Search:</span> Network with local real estate agents and community leaders to find the perfect space.</li>
            <li><span className="font-medium">Curriculum Development:</span> Consult with educators, chefs, and youth development specialists to create engaging program.</li>
            <li><span className="font-medium">Community Outreach:</span> Begin outreach through community centers and schools to identify potential students.</li>
            <li><span className="font-medium">Build Partnerships:</span> Connect with local businesses, restaurants, and community organizations for support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
