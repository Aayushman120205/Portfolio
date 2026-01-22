// Mock data for portfolio - will be replaced with backend integration

export const portfolioData = {
  hero: {
    name: "Aayushman",
    tagline: "Developer, Problem Solver, Innovation Enthusiast",
    description: "Crafting innovative digital solutions with modern technologies"
  },
  
  about: {
    title: "About Me",
    description: "I'm a passionate Full-Stack Developer pursuing B.Tech in Information Technology at NSUT Delhi. With expertise in MERN stack, Django, and React Native, I transform ideas into scalable, user-centric applications. My experience spans from building industrial support portals to developing AI-powered social platforms. I thrive on solving complex problems and creating seamless digital experiences that make a real impact.",
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "LeetCode Problems", value: "400+" },
      { label: "Contest Rating", value: "1782" },
      { label: "CGPA", value: "8.21" }
    ]
  },
  
  skills: {
    categories: [
      {
        name: "Programming Languages",
        color: "purple",
        skills: ["Java", "JavaScript", "Python", "C++"]
      },
      {
        name: "Web Development",
        color: "blue",
        skills: ["React.js", "React Native", "HTML", "CSS", "Django", "Django REST Framework", "Node.js", "MongoDB"]
      },
      {
        name: "Tools & Technologies",
        color: "cyan",
        skills: ["Figma", "Chart.js", "REST APIs", "Token Authentication", "QR APIs", "Git"]
      },
      {
        name: "Computer Science Fundamentals",
        color: "purple",
        skills: ["Data Structures & Algorithms", "DBMS", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Software Engineering"]
      },
      {
        name: "Emerging Technologies",
        color: "blue",
        skills: ["Artificial Intelligence", "Mobile Computing", "Cloud Computing", "Machine Learning APIs"]
      }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "TEI Support App",
      description: "Cross-platform industrial support portal with secure authentication, QR-based document access, and role-based screens. Features email composer, order system, and camera integration.",
      technologies: ["React Native", "Django REST", "QR APIs", "Token Auth"],
      impact: "Enhanced security and usability for Skoda's industrial operations",
      githubUrl: "https://github.com/Aayushman120205/qr_scanner_app",
      color: "purple"
    },
    {
      id: 2,
      title: "Social Echo",
      description: "MERN stack social networking platform with automated content moderation using AI APIs. Features profile creation, post sharing, engagement tools, and context-based authentication.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "AI APIs"],
      impact: "Improved user safety through intelligent content moderation",
      githubUrl: "https://github.com/Aayushman120205/SOCIALECHO",
      color: "blue"
    },
    {
      id: 3,
      title: "PowerSense Dashboard",
      description: "Real-time IoT monitoring dashboard with Chart.js visualizations. Tracks temperature, humidity, voltage, and current with daily to yearly insights and API integration.",
      technologies: ["Django", "Chart.js", "REST APIs", "JavaScript"],
      impact: "Streamlined data accessibility and automation for IoT monitoring",
      githubUrl: "https://github.com/Aayushman120205/powerdash",
      color: "cyan"
    }
  ],
  
  experience: [
    {
      id: 1,
      type: "work",
      title: "Developer Intern",
      organization: "Taikisha Engineering India Pvt. Ltd.",
      location: "Gurugram, India",
      period: "Jun 2025 - Aug 2025",
      description: [
        "Developed TEI Support Portal (app and website) for Skoda with technical documents, videos, and part ordering",
        "Implemented QR code generation, automated email system, and secure document sharing",
        "Enhanced operational efficiency and user experience through innovative features"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "B.Tech in Information Technology",
      institution: "Netaji Subhas University of Technology, Delhi",
      period: "Aug 2023 - Present",
      grade: "CGPA: 8.21"
    },
    {
      id: 2,
      degree: "Class XII (Board)",
      institution: "Rahul Public School, Delhi",
      period: "Apr 2022 - Apr 2023",
      grade: "88%"
    },
    {
      id: 3,
      degree: "Class X (Board)",
      institution: "O.P. Jindal Modern School, Haryana",
      period: "Apr 2020 - Apr 2021",
      grade: "94.8%"
    }
  ],
  
  achievements: [
    "Solved 400+ DSA questions on LeetCode with 1782 contest rating",
    "1st Runner-Up in college Hackathon (Dcode Society)",
    "AIR 14,597 in JEE (Main)",
    "AIR 15,883 in JEE (Advanced)",
    "200+ problems solved on Code360"
  ],
  
  leadership: [
    {
      role: "Logistics Coordinator",
      organization: "MOKSHA Cultural Fest, NSUT",
      description: "Managed vendor interactions and on-ground operations. Assisted in budgeting and resource allocation."
    },
    {
      role: "Society Coordinator",
      organization: "Team Kalpna Society, NSUT",
      description: "Organized multiple weekly events and successful execution of MOKSHA '23 events."
    }
  ],
  
  contact: {
    email: "aayushmansingh120205@gmail.com",
    phone: "+91-9896444240",
    linkedin: "https://www.linkedin.com/in/aayushman-sehrawat-b7439728b/",
    github: "https://github.com/Aayushman120205",
    leetcode: "https://leetcode.com/u/Aayushman120205"
  }
};

// Mock function for contact form submission
export const submitContactForm = async (formData) => {
  // This will be replaced with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock form submission:', formData);
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};
