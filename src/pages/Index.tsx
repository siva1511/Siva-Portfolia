import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, User, Code, Briefcase, GraduationCap, Award, ChevronDown } from "lucide-react";
const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  return <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400">BOYA SIVA SAI KUMAR</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Skills', 'Experience', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}>
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Boya Siva Sai Kumar
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-400 font-light">
                Computer Science & AI Engineer
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Final-year B.Tech student passionate about AI, full-stack development, and turning innovative ideas into digital solutions.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button onClick={() => scrollToSection('portfolio')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium">
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="https://linkedin.com/in/siva-sai-kumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:sivasai78342@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/sivasaikumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2 flex items-center justify-center">
                <img src="/lovable-uploads/f0ad1ff2-c2b4-4afd-bef1-12739b12282b.png" alt="Boya Siva Sai Kumar" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white">Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate final-year B.Tech student specializing in Computer Science and Engineering with AI at 
                  G. Pullaiah College of Engineering and Technology, Kurnool. My journey in technology began with a 
                  diploma in Mechanical Engineering, which gave me a strong foundation in problem-solving and analytical thinking.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">Beyond coding, I express my creativity through painting, music, and writing, which helps me approach technical challenges with innovative perspectives.</p>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="font-semibold text-white">B.Tech in CSE-AI (2022-2026)</h4>
                    <p className="text-gray-400">G. Pullaiah College of Engineering and Technology, Kurnool</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="font-semibold text-white">Diploma in Mechanical Engineering (2020-2023)</h4>
                    <p className="text-gray-400">ESC Govt Polytechnic College Nandyal</p>
                  </div>
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h4 className="font-semibold text-white">SSC (2020)</h4>
                    <p className="text-gray-400">Sri Chaithyna EM High School</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Portfolio</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 flex items-center justify-center p-4">
                <img src="/lovable-uploads/b0e6836f-b75d-4916-979e-2d6730258926.png" alt="Restaurant Chatbot" className="w-full h-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Restaurant Chatbot Project</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered chatbot that automates customer interactions for restaurant reservations and menu queries. 
                  Built with natural language processing capabilities to provide seamless customer service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">AI/ML</Badge>
                  <Badge variant="secondary" className="bg-gray-600 text-white">Python</Badge>
                  <Badge variant="secondary" className="bg-gray-600 text-white">NLP</Badge>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 flex items-center justify-center p-4">
                <img src="/lovable-uploads/067db98c-700d-4f55-af51-491b2ac52038.png" alt="Password Manager" className="w-full h-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Password Manager Project</h3>
                <p className="text-gray-300 mb-4">
                  Full-stack application enabling secure password management and categorization. Features encryption, 
                  user authentication, and intuitive interface for managing digital credentials safely.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-600 text-white">Full Stack</Badge>
                  <Badge variant="secondary" className="bg-gray-600 text-white">Java</Badge>
                  <Badge variant="secondary" className="bg-gray-600 text-white">MySQL</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="space-y-3">
                {['Java', 'Python', 'HTML', 'CSS'].map(skill => <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>)}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Databases</h3>
              <div className="space-y-3">
                {['MySQL', 'MongoDB'].map(skill => <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>)}
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Soft Skills</h3>
              <div className="space-y-2">
                <Badge className="bg-purple-600 text-white mr-2 mb-2">Team Leadership</Badge>
                <Badge className="bg-purple-600 text-white mr-2 mb-2">Communication</Badge>
                <Badge className="bg-purple-600 text-white mr-2 mb-2">Problem Solving</Badge>
                <Badge className="bg-purple-600 text-white mr-2 mb-2">Creative Thinking</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Experience & Certifications</h2>
          
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AICTE Virtual Internships</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-400">Embedded Systems (Cohort 8)</h4>
                      <p className="text-gray-300">Gained hands-on experience with embedded system design and programming.</p>
                    </div>
                    <Separator className="bg-gray-600" />
                    <div>
                      <h4 className="font-medium text-blue-400">Cybersecurity (Cohort 9)</h4>
                      <p className="text-gray-300">Learned security protocols, threat analysis, and defense mechanisms.</p>
                    </div>
                    <Separator className="bg-gray-600" />
                    <div>
                      <h4 className="font-medium text-blue-400">Java Full Stack Development (Cohort 10)</h4>
                      <p className="text-gray-300">Comprehensive training in full-stack development using Java ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or just having a 
                conversation about technology and AI. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">sivasai78342@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+91 6300389607</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Kurnool, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-900 border-gray-700 p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" placeholder="Your message..."></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Boya Siva Sai Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;