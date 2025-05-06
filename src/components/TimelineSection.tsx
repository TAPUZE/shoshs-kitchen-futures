
import React from 'react';
import { 
  FileText, Search, Users, BookOpen, School, Handshake, Award, ArrowRightCircle
} from 'lucide-react';

const TimelineSection: React.FC = () => {
  const shortTermPlans = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Develop Business Plan & Seek Funding",
      description: "Research grants, prepare investor presentations, build financial projections."
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Identify & Secure School Location",
      description: "Network with real estate agents, find accessible location with proper facilities."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Build Core Team & Advisory Board",
      description: "Recruit passionate professionals with complementary skills."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Develop Curriculum & Pilot Program",
      description: "Create engaging lesson plans and test with small group of students."
    }
  ];

  const longTermPlans = [
    {
      icon: <School className="h-6 w-6 text-white" />,
      title: "Established School with Full Enrollment",
      description: "Vibrant community of students learning culinary and life skills."
    },
    {
      icon: <Handshake className="h-6 w-6 text-white" />,
      title: "Industry Partnerships",
      description: "Connections with local restaurants and food businesses for internships."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Successful Graduates",
      description: "Alumni making their way in culinary careers and beyond."
    },
    {
      icon: <ArrowRightCircle className="h-6 w-6 text-white" />,
      title: "Potential to Expand Impact",
      description: "Additional locations or programs to reach more teens."
    }
  ];

  return (
    <section id="timeline" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Future Plans & Timeline</h2>
        <p className="text-lg max-w-3xl mb-8">
          The roadmap to making "The Knead for Change" a reality
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Short Term Plans */}
          <div>
            <div className="bg-culinary-sage p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Short-Term Plans (1-2 Years)</h3>
              <p className="text-white/90">
                Laying the foundation for our culinary school through careful planning and preparation.
              </p>
            </div>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:bottom-0 before:left-[22px] before:w-0.5 before:bg-culinary-sage/30">
              {shortTermPlans.map((item, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-0 bg-culinary-sage rounded-full p-2">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-medium text-culinary-brown mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Long Term Plans */}
          <div>
            <div className="bg-culinary-terra p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Long-Term Vision (3-5+ Years)</h3>
              <p className="text-white/90">
                Growing our impact and establishing a sustainable institution for youth empowerment.
              </p>
            </div>
            
            <div className="space-y-6 relative before:absolute before:top-0 before:bottom-0 before:left-[22px] before:w-0.5 before:bg-culinary-terra/30">
              {longTermPlans.map((item, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-0 bg-culinary-terra rounded-full p-2">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-medium text-culinary-brown mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-culinary-brown mb-2">Our Promise</p>
          <p className="max-w-2xl mx-auto text-gray-700 italic">
            "The Knead for Change isn't just a school; it's a promise of a brighter future. Through the power of food, 
            we will heal, teach, and empower the next generation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
