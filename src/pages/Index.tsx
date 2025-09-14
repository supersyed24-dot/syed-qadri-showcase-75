import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, FileText, Code, Palette, Globe, User, Briefcase, GraduationCap, Mail, Check, ExternalLink, Star } from "lucide-react";
const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check which sections are visible
      const sections = document.querySelectorAll('.fade-in-section');
      const newVisibleSections = new Set<string>();
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) {
            newVisibleSections.add(sectionId);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('qadrisyedd@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };
  const skills = [{
    name: "Python",
    icon: Code,
    proficiency: "expert"
  }, {
    name: "Microsoft Office",
    icon: FileText,
    proficiency: "expert"
  }, {
    name: "HTML/CSS",
    icon: Palette,
    proficiency: "expert"
  }, {
    name: "MySQL",
    icon: Code,
    proficiency: "expert"
  }, {
    name: "Web Design",
    icon: Palette,
    proficiency: "intermediate"
  }, {
    name: "JavaScript",
    icon: Code,
    proficiency: "intermediate"
  }, {
    name: "Node.js",
    icon: Code,
    proficiency: "intermediate"
  }, {
    name: "Power BI",
    icon: Globe,
    proficiency: "intermediate"
  }, {
    name: "Tableau",
    icon: Globe,
    proficiency: "intermediate"
  }, {
    name: "TypeScript",
    icon: Code,
    proficiency: "intermediate"
  }, {
    name: "React",
    icon: Code,
    proficiency: "intermediate"
  }, {
    name: "Git",
    icon: Code,
    proficiency: "beginner"
  }];
  const education = [{
    title: "Our Lady of Mount Carmel",
    degree: "Highschool Diploma, OSSD",
    period: "2021 - 2025",
    description: "Graduated with Honours",
    icon: GraduationCap
  }];
  const experiences = [{
    title: "Freelance Developer",
    organization: "Python & Web Developer",
    period: "2023 - present",
    description: [
      "Gained experience developing diverse projects in Python, applying the language to tasks such as problem-solving, automation, and process optimization, while strengthening logical thinking and coding efficiency",
      "Worked with HTML and CSS to design and enhance web features, focusing on structure, responsiveness, and user-friendly layouts",
      "Built a strong foundation in both programming and front-end development",
      "Managed tasks independently and adapted solutions to meet varying requirements"
    ],
    icon: Code
  }, {
    title: "Merchandiser Co-op",
    organization: "Shoppers Drug Mart",
    period: "Sept 2023 – July 2024",
    description: [
      "Delivered exceptional customer service by assisting shoppers at checkout and answering product-related inquiries in a friendly and professional manner",
      "Stocked and restocked shelves, rotated products by expiry dates, and ensured compliance with store merchandising standards",
      "Organized and maintained the backroom by managing overstock and preparing items for shelf display",
      "Monitored inventory and conducted regular checks to ensure proper product facing, expiry tracking, and packaging integrity (bailor box compliance)",
      "Collaborated with team members during busy hours to ensure smooth store operations and timely completion of tasks"
    ],
    icon: Briefcase
  }, {
    title: "Lead Coordinator",
    organization: "MNN Volunteer",
    period: "Jan 2023 - Dec 2023",
    description: [
      "Led and managed community events, coordinating logistics from planning to execution",
      "Supervised and guided volunteers, delegating tasks to ensure smooth operations",
      "Directed outreach efforts through surveys and engagement strategies to boost participation",
      "Managed event budgets and tracked expenses with accuracy and responsibility",
      "Demonstrated strong leadership, organization, and project management skills by balancing multiple priorities and ensuring successful outcomes"
    ],
    icon: User
  }];

  const projects = [{
    title: "Skyguard Roofing Company Professional Website",
    technologies: ["HTML/CSS", "JavaScript", "API"],
    description: [
      "Designed and developed a professional company website using HTML, CSS, and JavaScript",
      "Built a service showcase page allowing visitors to view all offerings in a clean, user-friendly layout",
      "Integrated a quote request and booking system, enabling customers to easily schedule services online",
      "Added a customer reviews section to highlight client feedback and build trust",
      "Focused on responsive design, ensuring seamless performance across desktop and mobile devices",
      "Delivered a modern, functional, and visually appealing site that enhanced the company's online presence and customer engagement"
    ],
    link: "https://github.com/qadrisyedd/Skyguard-Roofing.git",
    icon: Globe
  }, {
    title: "Essentials",
    technologies: ["Python"],
    description: [
      "Developed a multi-functional desktop application using Python and Tkinter to enhance productivity and minimize distractions",
      "Includes a suite of essential tools, such as a music player, to-do list, calculator, notes, whiteboard, password generator, and stopwatch",
      "Designed an intuitive and user-friendly interface, allowing seamless navigation between individual apps",
      "Implemented features to improve focus and efficiency, helping users manage tasks, track time, and organize information in one centralized application",
      "Built modular and maintainable code to allow for easy updates and future expansions"
    ],
    link: "#",
    icon: Code
  }, {
    title: "Cipher Program",
    technologies: ["Python"],
    description: [
      "Developed a Python program that encrypts and decrypts messages using a 4-digit PIN and a simple shift cipher",
      "Allows users to encrypt messages by inputting a lowercase text and a valid 4-digit PIN",
      "Enables decryption of previously encrypted messages with the correct PIN",
      "Implemented input validation to ensure only lowercase letters and valid PINs are accepted",
      "Provides a user-friendly interface with clear instructions and robust error handling",
      "Features a menu-driven program flow allowing users to choose between encryption, decryption, or exiting the application",
      "Designed for simplicity and security, helping users manage basic encrypted communications effectively"
    ],
    link: "#",
    icon: Code
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold rainbow-text mb-8 lg:text-7xl">
            Syed Qadri
          </h1>
          
          <div className="mt-8 animate-fade-in">
            <p className="font-bold text-gray-300 text-base">Computer Science Undergraduate | Aspiring Programmer & Data Analyst  </p>
          </div>
        </div>

      </section>

      {/* About Me Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('about') ? 'visible' : ''}`} data-section="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8" style={{ color: 'hsl(var(--section-about-glow))' }} />
            <h2 className="text-4xl font-bold" style={{ color: 'hsl(var(--section-about-glow))' }}>About Me</h2>
          </div>
          
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a developer, programmer, freelancer, and data analyst pursuing a Computer Science degree. 
                I'm passionate about technology and continuously expanding my skills. I'm proficient in Python and experienced 
                with HTML/CSS, with growing knowledge of SQL, Tableau, and Power BI.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('skills') ? 'visible' : ''}`} data-section="skills">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8" style={{ color: 'hsl(var(--section-skills-glow))' }} />
            <h2 className="text-4xl font-bold" style={{ color: 'hsl(var(--section-skills-glow))' }}>Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`skill-card skill-${skill.proficiency}`} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon 
                      className="w-6 h-6" 
                      style={{ 
                        color: skill.proficiency === 'expert' ? 'hsl(0 100% 50%)' :
                               skill.proficiency === 'intermediate' ? 'hsl(35 100% 55%)' :
                               'hsl(120 100% 50%)'
                      }} 
                    />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <span className={`proficiency-${skill.proficiency}`}>
                    {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className={`progress-bar progress-${skill.proficiency}`}
                      style={{
                        transitionDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('projects') ? 'visible' : ''}`} data-section="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Star className="w-8 h-8" style={{ color: 'hsl(var(--section-projects-glow))' }} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: 'hsl(var(--section-projects) / 0.2)', borderColor: 'hsl(var(--section-projects) / 0.3)' }}>
                        <project.icon className="w-6 h-6" style={{ color: 'hsl(var(--section-projects-glow))' }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 text-xs rounded-full"
                              style={{ 
                                backgroundColor: 'hsl(var(--section-projects) / 0.3)', 
                                color: 'hsl(var(--section-projects-glow))',
                                border: '1px solid hsl(var(--section-projects) / 0.5)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {project.description.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--section-projects-glow))' }} />
                        <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-all duration-300"
                    style={{ 
                      borderColor: 'hsl(var(--section-projects) / 0.5)',
                      color: 'hsl(var(--section-projects-glow))'
                    }}
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300"
              style={{ 
                borderColor: 'hsl(var(--section-projects) / 0.5)',
                color: 'hsl(var(--section-projects-glow))'
              }}
              onClick={() => window.open('https://github.com/qadrisyedd', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('experience') ? 'visible' : ''}`} data-section="experience">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8" style={{ color: 'hsl(var(--section-experience-glow))' }} />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 transition-all duration-300 hover:bg-card/50" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'hsl(var(--section-experience) / 0.2)', borderColor: 'hsl(var(--section-experience) / 0.3)' }}>
                      <experience.icon className="w-6 h-6" style={{ color: 'hsl(var(--section-experience-glow))' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                      <p className="font-medium mb-1" style={{ color: 'hsl(var(--section-experience-glow))' }}>{experience.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                      <div className="space-y-2">
                        {experience.description.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--section-experience-glow))' }} />
                            <p className="text-muted-foreground leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <p className="text-muted-foreground">
              Let's Connect!
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={copyEmailToClipboard}
              className="h-8 px-3 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 hover:border-primary/50 transition-all duration-300"
            >
              {emailCopied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email</span>
                </>
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Syed Qadri.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
