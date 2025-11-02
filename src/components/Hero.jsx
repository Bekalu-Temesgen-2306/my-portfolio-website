import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import jsPDF from 'jspdf';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Web Developer',
    'UX/UI Designer', 
    'Content Creator'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bekalu-Temesgen-2306', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Bekalu-Temesgen2306', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bekalutemesgen74@gmail.com', label: 'Email' },
  ];

  const handleDownloadCV = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Colors
    const primaryColor = [0, 123, 255];
    const textColor = [51, 51, 51];
    const lightGray = [200, 200, 200];
    const darkGray = [102, 102, 102];

    // Header Section background first
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');
    
    // Load and add profile image
    let imgData = null;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/bekalu.jpg';
    
    await new Promise((resolve) => {
      img.onload = () => {
        try {
          // Convert image to canvas for better PDF compatibility
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Create circular clipping
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, 0, 0);
          
          // Convert canvas to data URL
          imgData = canvas.toDataURL('image/jpeg', 0.9);
          
          // Add profile image at the header (right side, on top of header background)
          const imgSize = 32; // Size in mm
          const imgX = 210 - 25; // Right side with margin
          const imgY = 8; // Top position
          
          // Draw white circle background for border effect
          const centerX = imgX + imgSize / 2;
          const centerY = imgY + imgSize / 2;
          const radius = imgSize / 2;
          doc.setFillColor(255, 255, 255);
          doc.circle(centerX, centerY, radius + 2, 'F');
          
          // Add circular image
          doc.addImage(imgData, 'JPEG', imgX, imgY, imgSize, imgSize, undefined, 'FAST');
          
          resolve();
        } catch (error) {
          console.error('Error adding image:', error);
          resolve(); // Continue even if image fails
        }
      };
      img.onerror = () => {
        console.warn('Failed to load profile image');
        resolve(); // Continue without image
      };
    });
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    // Adjust text position to leave space for image on right
    doc.text('BEKALU TEMESGEN', 105, 18, { align: 'center', maxWidth: 150 });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Front-End Developer | UX/UI Designer', 105, 26, { align: 'center', maxWidth: 150 });
    
    doc.setFontSize(9);
    doc.text('Email: bekalutemesgen74@gmail.com | GitHub: github.com/Bekalu-Temesgen-2306', 105, 32, { align: 'center', maxWidth: 170 });
    doc.text('LinkedIn: linkedin.com/in/Bekalu-Temesgen2306', 105, 37, { align: 'center', maxWidth: 170 });

    let yPosition = 50;

    // Professional Summary
    doc.setTextColor(...textColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', 15, yPosition);
    
    doc.setDrawColor(...lightGray);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summary = [
      'Passionate Front-End Developer dedicated to creating user-friendly, accessible, and visually',
      'appealing digital experiences. Specialized in building responsive web applications using',
      'modern technologies including React, TypeScript, and Node.js. Strong problem-solving skills',
      'with experience in UI/UX design and full-stack development. Continuously learning and',
      'adapting to emerging technologies to deliver high-quality, efficient solutions.'
    ];
    
    summary.forEach(line => {
      doc.text(line, 15, yPosition);
      yPosition += 5;
    });
    
    yPosition += 5;

    // Technical Skills
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', 15, yPosition);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const skills = {
      'Frontend': 'HTML, CSS, JavaScript, React, TypeScript, Next.js',
      'Backend': 'Node.js, Express.js, MongoDB, PostgreSQL, Firebase',
      'Design': 'UI/UX Design, Figma, Adobe XD, Photoshop, Illustrator',
      'Tools': 'Git & GitHub, VS Code, Docker, AWS, Vercel'
    };
    
    Object.entries(skills).forEach(([category, techs]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${category}:`, 15, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.text(techs, 45, yPosition);
      yPosition += 6;
    });
    
    yPosition += 5;

    // Professional Experience
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', 15, yPosition);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    
    const experiences = [
      {
        title: 'Front-End Developer Intern',
        company: 'Alyah Software Development Plc.',
        period: 'June 2025 - August 2025',
        achievements: [
          'Developed responsive web applications using React and modern JavaScript',
          'Collaborated with team members to implement UI/UX designs',
          'Participated in code reviews and maintained clean, maintainable code',
          'Assisted in debugging and optimizing application performance'
        ]
      }
    ];
    
    experiences.forEach(exp => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.title, 15, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...darkGray);
      doc.text(`${exp.company} | ${exp.period}`, 15, yPosition + 5);
      
      doc.setTextColor(...textColor);
      yPosition += 10;
      
      exp.achievements.forEach(achievement => {
        doc.text('•', 18, yPosition);
        doc.text(achievement, 22, yPosition);
        yPosition += 5;
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
      });
      
      yPosition += 3;
    });

    // Projects
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('KEY PROJECTS', 15, yPosition);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    
    const projects = [
      {
        name: 'Hotel Website',
        tech: 'React.js, Node.js, MySQL, Tailwind CSS',
        desc: 'Full-stack hotel booking application with traditional ceremony features and historical place visits'
      },
      {
        name: 'EthioTour Website',
        tech: 'React, Node.js, MongoDB, Express',
        desc: 'Tourism platform showcasing Ethiopian destinations with booking system and interactive maps'
      },
      {
        name: 'Portfolio Website',
        tech: 'React, TypeScript, Framer Motion',
        desc: 'Modern, responsive portfolio with smooth animations, dark mode, and SEO optimization'
      },
      {
        name: 'E-Commerce Platform',
        tech: 'Next.js, TypeScript, Stripe, PostgreSQL',
        desc: 'Complete e-commerce solution with payment processing and user authentication'
      }
    ];
    
    projects.forEach(project => {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(project.name, 15, yPosition);
      
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...darkGray);
      doc.setFontSize(9);
      doc.text(`Technologies: ${project.tech}`, 15, yPosition + 5);
      
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...textColor);
      doc.setFontSize(9);
      const descLines = doc.splitTextToSize(project.desc, 180);
      doc.text(descLines, 15, yPosition + 10);
      
      yPosition += 10 + (descLines.length * 4) + 3;
      
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
    });

    // Education
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', 15, yPosition);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    
    const education = [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Bahir Dar University',
        period: '2023 - Present',
        focus: 'Focus on Web Development & UX/UI Design'
      }
    ];
    
    education.forEach(edu => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, 15, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...darkGray);
      doc.text(`${edu.institution} | ${edu.period}`, 15, yPosition + 5);
      
      doc.setTextColor(...textColor);
      doc.text(edu.focus, 15, yPosition + 10);
      
      yPosition += 15;
    });

    // Certifications
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATIONS & TRAINING', 15, yPosition);
    doc.line(15, yPosition + 2, 195, yPosition + 2);
    
    yPosition += 8;
    
    const certifications = [
      { name: 'Web Programming Certificate', issuer: 'Udacity', year: '2023' },
      { name: 'SSS Training Certification', issuer: 'Bahir Dar University', year: '2022' }
    ];
    
    certifications.forEach(cert => {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(cert.name, 15, yPosition);
      
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...darkGray);
      doc.text(`${cert.issuer} - ${cert.year}`, 15, yPosition + 5);
      
      doc.setTextColor(...textColor);
      yPosition += 10;
    });

    // Footer
    const pageCount = doc.internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(...darkGray);
      doc.text(`Page ${i} of ${pageCount}`, 105, 287, { align: 'center' });
      doc.text('Bekalu Temesgen - Resume', 105, 290, { align: 'center' });
    }

    // Save the PDF
    doc.save('Bekalu_Temesgen_Resume.pdf');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="grid grid-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hero__title"
              >
                <span className="text-gradient"> hi, I'm Bekalu  Temsgen</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-muted"
              >
                I'm a{' '}
                <span className="text-primary min-h-[3.5rem] inline-block">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-text-muted max-w-2xl"
            >
              A passionate developer focused on building user-friendly web experiences. 
              I specialize in creating accessible and visually appealing digital solutions 
              that solve real-world problems.
            </motion.p>


            
 {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-6"
            >
              <span className="text-text-muted">Follow me On:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="p-3 rounded-full bg-light dark:bg-dark-light hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >




              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight size={15} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={handleDownloadCV}
              >
                <Download size={15} />
                Download CV
              </motion.button>
            </motion.div>

           
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src="/images/bekalu.jpg"
                alt="Bekalu Temesgen - Web Developer and UX Designer"
                className="relative rounded-full object-cover avatar-img"
                whileHover={{ rotate: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-bold">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-bold">💻</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 