export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  image: string;
  objectives: string[];
  requirements: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  career: string[];
  certification: string;
  fee: string;
  nextBatch: string;
}

export const courses: Course[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    duration: '6 months',
    level: 'Intermediate',
    description: 'Master both frontend and backend development with modern technologies and frameworks. Build complete web applications from scratch.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&h=1200',
    objectives: [
      'Build complete web applications using modern frameworks',
      'Master frontend and backend technologies',
      'Learn database design and management',
      'Implement authentication and authorization',
      'Deploy applications to cloud platforms'
    ],
    requirements: [
      'Basic programming knowledge',
      'Understanding of HTML, CSS, and JavaScript',
      'Computer with minimum 8GB RAM',
      'Stable internet connection'
    ],
    curriculum: [
      {
        module: 'Frontend Development',
        topics: [
          'HTML5, CSS3, and JavaScript ES6+',
          'React.js and Next.js',
          'State Management with Redux',
          'Responsive Design and CSS Frameworks',
          'TypeScript Fundamentals'
        ]
      },
      {
        module: 'Backend Development',
        topics: [
          'Node.js and Express.js',
          'RESTful API Design',
          'Database Management with MongoDB',
          'Authentication and Authorization',
          'API Security and Best Practices'
        ]
      },
      {
        module: 'DevOps and Deployment',
        topics: [
          'Git Version Control',
          'Docker Containerization',
          'CI/CD Pipelines',
          'Cloud Deployment (AWS/Azure)',
          'Performance Optimization'
        ]
      }
    ],
    career: [
      'Full Stack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Software Engineer',
      'Technical Lead'
    ],
    certification: 'Industry-recognized Full Stack Developer Certification',
    fee: '₹75,000',
    nextBatch: '2024-04-01'
  },
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    duration: '8 months',
    level: 'Advanced',
    description: 'Learn to analyze data, build predictive models, and derive meaningful insights using statistical methods and machine learning.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&h=1200',
    objectives: [
      'Master data analysis and visualization',
      'Build machine learning models',
      'Implement deep learning solutions',
      'Perform statistical analysis',
      'Create data-driven insights'
    ],
    requirements: [
      'Basic mathematics and statistics',
      'Programming fundamentals',
      'Computer with minimum 16GB RAM',
      'GPU recommended for deep learning'
    ],
    curriculum: [
      {
        module: 'Foundations',
        topics: [
          'Python Programming',
          'Statistics and Probability',
          'Data Structures and Algorithms',
          'Linear Algebra',
          'Calculus for Machine Learning'
        ]
      },
      {
        module: 'Machine Learning',
        topics: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Model Evaluation',
          'Feature Engineering',
          'Ensemble Methods'
        ]
      },
      {
        module: 'Deep Learning',
        topics: [
          'Neural Networks',
          'Computer Vision',
          'Natural Language Processing',
          'Reinforcement Learning',
          'Deep Learning Frameworks'
        ]
      }
    ],
    career: [
      'Data Scientist',
      'Machine Learning Engineer',
      'AI Researcher',
      'Data Analyst',
      'Business Intelligence Developer'
    ],
    certification: 'Advanced Data Science Professional Certification',
    fee: '₹95,000',
    nextBatch: '2024-04-15'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing and DevOps',
    duration: '5 months',
    level: 'Intermediate to Advanced',
    description: 'Master cloud platforms, infrastructure automation, and modern DevOps practices for scalable applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&h=1200',
    objectives: [
      'Design cloud architecture',
      'Implement DevOps practices',
      'Master containerization',
      'Automate deployment pipelines',
      'Manage cloud security'
    ],
    requirements: [
      'Basic Linux administration',
      'Command line familiarity',
      'Networking fundamentals',
      'Computer with 8GB RAM minimum'
    ],
    curriculum: [
      {
        module: 'Cloud Platforms',
        topics: [
          'AWS Core Services',
          'Azure Fundamentals',
          'Google Cloud Platform',
          'Cloud Architecture Design',
          'Cost Optimization'
        ]
      },
      {
        module: 'DevOps Practices',
        topics: [
          'Git and GitHub',
          'Jenkins CI/CD',
          'Infrastructure as Code',
          'Configuration Management',
          'Monitoring and Logging'
        ]
      },
      {
        module: 'Container Orchestration',
        topics: [
          'Docker Containerization',
          'Kubernetes Orchestration',
          'Service Mesh',
          'Microservices Architecture',
          'Container Security'
        ]
      }
    ],
    career: [
      'Cloud Architect',
      'DevOps Engineer',
      'Site Reliability Engineer',
      'Cloud Security Engineer',
      'Platform Engineer'
    ],
    certification: 'Certified Cloud and DevOps Professional',
    fee: '₹85,000',
    nextBatch: '2024-04-10'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Professional',
    duration: '6 months',
    level: 'Advanced',
    description: 'Learn to protect systems, networks, and data from cyber threats. Master security tools and techniques.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070&h=1200',
    objectives: [
      'Implement security measures',
      'Perform penetration testing',
      'Conduct security audits',
      'Handle incident response',
      'Master security tools'
    ],
    requirements: [
      'Networking fundamentals',
      'Basic programming knowledge',
      'Linux basics',
      'Computer with 16GB RAM minimum'
    ],
    curriculum: [
      {
        module: 'Network Security',
        topics: [
          'Network Protocols',
          'Firewall Configuration',
          'VPN Setup',
          'IDS/IPS Systems',
          'Network Monitoring'
        ]
      },
      {
        module: 'Application Security',
        topics: [
          'Web Application Security',
          'Secure Coding Practices',
          'API Security',
          'Mobile App Security',
          'Cloud Security'
        ]
      },
      {
        module: 'Ethical Hacking',
        topics: [
          'Penetration Testing',
          'Vulnerability Assessment',
          'Social Engineering',
          'Wireless Security',
          'Cryptography'
        ]
      }
    ],
    career: [
      'Security Analyst',
      'Penetration Tester',
      'Security Consultant',
      'SOC Analyst',
      'Security Engineer'
    ],
    certification: 'Certified Cybersecurity Professional',
    fee: '₹90,000',
    nextBatch: '2024-05-01'
  }
];