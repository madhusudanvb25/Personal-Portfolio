import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, FolderGit2, User, Phone, Camera, Calendar, ShoppingBag, Sun, Moon } from 'lucide-react';

const personalInfo = {
  name: "Madhusudan VB",
  title: "DevOps Engineer | Cloud Enthusiast | Automation Geek | CI/CD Pipeline Specialist | Support Engineer",
  about: "I'm a learning DevOps engineer passionate about automation, cloud computing, and CI/CD pipelines. I have hands-on experience with various DevOps tools and platforms and continuously strive to enhance my skills. 🚀 Aspiring DevOps Engineer | Cloud Enthusiast | Automation Geek",
  email: "madhusudanvb25@gmail.com",
  phone: "8553440951",
  github: "https://github.com/madhusudanvb25",
  linkedin: "https://www.linkedin.com/in/madhusudan-vb-087321297/",
};

const experience = [
  {
    company: "ConnectSecure",
    position: "Support and Manual QA Engineer",
    period: "Apr 2022 - Dec 2024",
    description: `As a dedicated manual QA engineer at Connectsecure, a leading vulnerability management company, I specialize in ensuring the security and integrity of our software solutions. With a strong foundation in vulnerability management and a deep understanding of the technical intricacies, I take pride in meticulously identifying and rectifying potential threats.

My journey in the tech industry has been a diverse one, having previously served as a support engineer, where I honed my skills in customer support. Handling calls and technical inquiries from clients, I've gained valuable experience in troubleshooting and resolving issues efficiently.

Beyond my QA expertise, I also manage and maintain critical components of the IT infrastructure, including Active Directory, Azure Active Directory, and virtual machines (VMs). This multifaceted experience equips me with a holistic view of IT operations, ensuring the seamless integration of security and functionality.

I am passionate about delivering results, fostering collaboration, and staying at the forefront of technology trends. If you're interested in connecting, discussing vulnerability management, or exploring potential synergies, feel free to reach out. Let's connect and make a difference in the realm of security and IT.`,
  },
];

const projects = [
  {
    title: "Jaya Films",
    description: "A Photography website that helps clients preview and book schedules for photo shoots. Features include portfolio showcase, booking system, and client management.",
    technologies: ["React", "TypeScript", "SQL", "Supabase", "Netlify"],
    link: "https://www.jayafilms.com",
    icon: Camera,
  },
  {
    title: "Sutra Events",
    description: "An Indian Events management website enabling clients to view past work and book events. Includes gallery, event planning tools, and booking management.",
    technologies: ["HTML", "JavaScript", "CSS", "Netlify"],
    link: "https://www.sutraevents.com",
    icon: Calendar,
  },
  {
    title: "E-commerce Website",
    description: "A boutique website for custom designer wear bookings. Features include product customization, measurement management, and order tracking.",
    technologies: ["React", "TypeScript", "SQL", "Supabase", "Netlify"],
    link: "",
    icon: ShoppingBag,
  },
];

function NavLink({ href, children, isDark }: { href: string; children: React.ReactNode; isDark: boolean }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg font-medium ${
        isDark 
          ? 'text-white hover:text-white hover:bg-gray-800' 
          : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
      } transition-all`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function Navigation({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm'
            : 'bg-white/95 shadow-lg backdrop-blur-sm'
          : isDark
            ? 'bg-gray-900/80 backdrop-blur-sm'
            : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1" /> {/* Spacer */}
        <div className="flex items-center gap-4">
          <NavLink href="#about" isDark={isDark}>About</NavLink>
          <NavLink href="#experience" isDark={isDark}>Experience</NavLink>
          <NavLink href="#projects" isDark={isDark}>Projects</NavLink>
          <NavLink href="#contact" isDark={isDark}>Contact</NavLink>
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
}

function ThemeToggle({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
        isDark ? 'bg-gray-700' : 'bg-yellow-400'
      } shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-8 h-8 relative rounded-full transform transition-transform duration-300 ${
          isDark ? 'translate-x-8 bg-gray-900' : 'translate-x-0 bg-white'
        } shadow-md`}
        layout
      >
        {isDark ? (
          <Moon className="absolute inset-1.5 text-yellow-300" />
        ) : (
          <Sun className="absolute inset-1.5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function Section({ title, icon: Icon, children, isDark, id }: { title: string; icon: any; children: React.ReactNode; isDark: boolean; id: string }) {
  return (
    <FadeInWhenVisible>
      <div id={id} className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg`}>
            <Icon className={`w-6 h-6 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
        </div>
        {children}
      </div>
    </FadeInWhenVisible>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[60vh] bg-cover bg-center relative" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-200"
              >
                {personalInfo.title}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Section title="About Me" icon={User} isDark={isDark} id="about">
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{personalInfo.about}</p>
        </Section>

        <Section title="Experience" icon={Briefcase} isDark={isDark} id="experience">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className={`${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{exp.position}</h3>
                <p className="text-blue-500 text-lg mb-2">{exp.company}</p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{exp.period}</p>
                <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} whitespace-pre-line`}>{exp.description}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Projects" icon={FolderGit2} isDark={isDark} id="projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg`}>
                      <project.icon className={`w-6 h-6 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 ${
                        isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-700'
                      } rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Contact" icon={Phone} isDark={isDark} id="contact">
          <div className={`${
            isDark ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-xl shadow-lg`}>
            <div className="space-y-6">
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-4 ${
                  isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6" />
                <span className="text-lg">{personalInfo.email}</span>
              </motion.a>
              <motion.p 
                className={`flex items-center gap-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-6 h-6" />
                <span className="text-lg">{personalInfo.phone}</span>
              </motion.p>
              <div className="flex gap-6 pt-6">
                <motion.a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="w-7 h-7" />
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin className="w-7 h-7" />
                </motion.a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;