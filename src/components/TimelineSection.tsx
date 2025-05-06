
import React from 'react';
import { 
  FileText, Search, Users, BookOpen, School, Handshake, Award, ArrowRightCircle
} from 'lucide-react';

const TimelineSection: React.FC = () => {
  const shortTermPlans = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Develop Business Plan & Seek Funding",
      description: "Create a comprehensive business plan and identify potential funding sources."
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Identify & Secure School Location",
      description: "Find and secure an appropriate facility for our culinary school."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Build Core Team & Advisory Board",
      description: "Assemble a dedicated team and advisors with relevant expertise."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Develop Curriculum & Pilot Program",
      description: "Create our educational framework and test it with a small group."
    }
  ];

  const longTermPlans = [
    {
      icon: <School className="h-6 w-6 text-white" />,
      title: "Established School with Full Enrollment",
      description: "Fully operational school with multiple classes and cohorts."
    },
    {
      icon: <Handshake className="h-6 w-6 text-white" />,
      title: "Industry Partnerships for Student Opportunities",
      description: "Collaborations with local restaurants and food businesses for internships."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Successful Graduate Program",
      description: "Alumni network and ongoing support for graduates."
    },
    {
      icon: <ArrowRightCircle className="h-6 w-6 text-white" />,
      title: "Potential for Expansion",
      description: "Growth opportunities to reach more communities and teens."
    }
  ];

  return (
    <section id="timeline" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Future Plans & Timeline</h2>
        <p className="text-lg max-w-3xl mb-12">
          Turning our vision into reality requires careful planning and strategic implementation. 
          Here's our roadmap for bringing The Knead for Change to life.
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
          <p className="text-lg font-medium text-culinary-brown mb-2">Action Plan</p>
          <p className="max-w-2xl mx-auto text-gray-700">
            Every step of our journey will be purposeful and mission-driven. We are committed to careful planning, 
            thoughtful execution, and continuous improvement to ensure the success of The Knead for Change and, 
            most importantly, the success of our students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
