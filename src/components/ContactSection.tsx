
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would be connected to a real form submission in a production app
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-culinary-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Join Our Journey</h2>
        <p className="text-lg max-w-3xl mb-12">
          Interested in supporting The Knead for Change? Have questions or suggestions? 
          I'd love to hear from you. Let's work together to make this vision a reality.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold text-culinary-brown mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-culinary-terra p-2 rounded-full text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-culinary-brown">Email</h4>
                    <p className="text-gray-600">shosh@kneadforchange.example</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-culinary-terra p-2 rounded-full text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-culinary-brown">Phone</h4>
                    <p className="text-gray-600">+972 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-culinary-terra p-2 rounded-full text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-culinary-brown">Location</h4>
                    <p className="text-gray-600">Menahamia, Israel</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-medium text-culinary-brown mb-4">How You Can Help</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Donate to our startup fund</li>
                  <li>Volunteer your expertise</li>
                  <li>Spread the word about our mission</li>
                  <li>Partner with us as a business or organization</li>
                  <li>Mentor our future students</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-culinary-brown mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <Input id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="Email Address" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input id="subject" placeholder="How can I help?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="I'm interested in learning more about your project..." 
                    className="min-h-32"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-culinary-terra hover:bg-culinary-terra/90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
