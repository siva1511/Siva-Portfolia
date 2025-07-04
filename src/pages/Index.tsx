
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, User, Code, Briefcase, GraduationCap, Award, ChevronDown, ExternalLink } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_scvq32m',
        'template_dawntl7',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Boya Siva Sai Kumar',
        },
        'RZ-3AUkizlIcfNxir'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
              <a href="https://www.linkedin.com/in/siva-sai-251b04280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:sivasai78342@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/siva1511" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
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
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">GrainPalette</h3>
                    <p className="text-sm">Rice Classification</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">GrainPalette - Rice Grain Classification System</h3>
                  <a href="https://github.com/siva1511" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">
                  A deep learning-based classification system for different rice grain types including Arborio, Basmati, Ipsala, Jasmine, and Karacadag. 
                  Developed using TensorFlow and CNNs with a well-organized dataset and Streamlit-based user interface for predictions.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center p-2 bg-gray-700 rounded">
                    <div className="text-green-400 font-bold text-lg">94%</div>
                    <div className="text-gray-300">accuracy</div>
                  </div>
                  <div className="text-center p-2 bg-gray-700 rounded">
                    <div className="text-blue-400 font-bold text-lg">5</div>
                    <div className="text-gray-300">models</div>
                  </div>
                  <div className="text-center p-2 bg-gray-700 rounded">
                    <div className="text-purple-400 font-bold text-lg">1K+</div>
                    <div className="text-gray-300">datasets</div>
                  </div>
                  <div className="text-center p-2 bg-gray-700 rounded">
                    <div className="text-yellow-400 font-bold text-sm">Real-time</div>
                    <div className="text-gray-300">predictions</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Multi-class rice grain classification</li>
                    <li>• Deep learning CNN architecture</li>
                    <li>• Interactive Streamlit web interface</li>
                    <li>• Comprehensive dataset management</li>
                    <li>• Real-time prediction capabilities</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">Python</Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">TensorFlow</Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">Streamlit</Badge>
                  <Badge variant="secondary" className="bg-red-600 text-white">CNN</Badge>
                  <Badge variant="secondary" className="bg-yellow-600 text-white">Deep Learning</Badge>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 flex items-center justify-center p-4">
                <img src="/lovable-uploads/680036e6-41b5-49ab-93d1-ea358a9ea671.png" alt="Password Manager" className="w-full h-full object-contain" />
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
                  <h3 className="text-xl font-semibold text-white mb-2">SkillDzire</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-blue-400">Artificial Intelligence Internship</h4>
                    <p className="text-gray-400 text-sm mb-2">May 2025 - June 2025</p>
                    <p className="text-gray-300">Successfully completed a comprehensive short-term internship program focused on Artificial Intelligence technologies and applications.</p>
                    <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                      <div>
                        <span className="text-gray-400">Certificate ID:</span>
                        <span className="text-white ml-2">SDST-25-16945</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white ml-2">6 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Make Skilled</h3>
                  <div>
                    <h4 className="font-medium text-blue-400">Full Stack Development Bootcamp</h4>
                    <p className="text-gray-300">Comprehensive training in full-stack web development covering modern technologies and best practices.</p>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" 
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400" 
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
