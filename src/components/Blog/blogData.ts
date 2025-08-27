import fullstack from '../../assets/fullstack.png';
import AI from '../../assets/AI.jpg';
import cloud from '../../assets/cloud.jpg';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  h3: string;
  p: string;
  p1: string;
  content: {
    introduction: string;
    keyConcepts: string[];
  };
  author: {
    name: string;
    avatar: string;
    bio: string;
    social: {
      twitter?: string;
      instagram?: string;
      facebook?: string;
      github:string;
      linkedin?:string;
    };
  };
  image: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image1: string;
  image2: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Becoming a Full Stack Developer in 2024',
    excerpt: 'Learn the essential skills and technologies needed to become a proficient full stack developer in today competitive market.',
    h3: 'Mastering the Modern Development Stack',
    p: 'Full stack development has evolved significantly in recent years. The modern developer needs to be proficient in frontend frameworks like React or Angular, backend technologies like Node.js or Django, and database management with SQL or NoSQL solutions.',
    p1: 'The demand for full stack developers continues to grow as companies seek professionals who can handle both client and server-side development. According to industry surveys, full stack developers are among the top 5 most in-demand tech jobs globally.',
    content: {
      introduction: 'Full stack development offers a comprehensive approach to building web applications. This guide covers the essential technologies, best practices, and learning paths to help you become a successful full stack developer in 2024.',
      keyConcepts: [
        'Frontend fundamentals: HTML5, CSS3, JavaScript (ES6+)',
        'Popular frameworks: React, Vue.js, Angular',
        'Backend technologies: Node.js, Express, Python (Django/Flask)',
        'Database management: MongoDB, PostgreSQL, Firebase',
        'DevOps basics: Docker, CI/CD pipelines, cloud deployment'
      ]
    },
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      bio: 'Senior Full Stack Developer with 8+ years of experience building scalable web applications. Tech lead at a Fortune 500 company and mentor for aspiring developers.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: ""
      }
    },
    image: fullstack,
    date: '15 Jan 2024',
    category: 'Full Stack Development',
    tags: ['Web Development', 'Programming', 'Career'],
    readTime: '8 min read',
    image1: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    image2: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    excerpt: 'Discover the core concepts of machine learning and how to implement them in real-world applications.',
    h3: 'Demystifying AI and Machine Learning',
    p: 'Machine learning has transformed industries from healthcare to finance. Understanding the fundamental algorithms and their practical applications is crucial for anyone looking to enter this field.',
    p1: 'With the global AI market projected to reach $500 billion by 2024, professionals with ML skills are in high demand. This article breaks down complex concepts into digestible insights for beginners.',
    content: {
      introduction: 'Machine learning is no longer just for researchers - it has become an essential skill for developers across industries. This guide provides a structured approach to learning ML concepts and applying them using Python and popular frameworks.',
      keyConcepts: [
        'Supervised vs unsupervised learning paradigms',
        'Essential algorithms: Linear Regression, Decision Trees, Neural Networks',
        'Popular frameworks: TensorFlow, PyTorch, Scikit-learn',
        'Model evaluation and hyperparameter tuning',
        'Real-world applications and case studies'
      ]
    },
    author: {
      name: 'Dr. Priya Sharma',
      avatar: 'https://images.pexels.com/photos/3762807/pexels-photo-3762807.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      bio: 'AI Researcher with a PhD in Computer Science. Currently leading ML initiatives at a top tech company and teaching advanced ML courses online.',
      social: {
        twitter: '#',
        github: '#'
      }
    },
    image: AI,
    date: '10 Jan 2024',
    category: 'Artificial Intelligence',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    readTime: '10 min read',
    image1: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    image2: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  },
  {
    id: '3',
    title: 'Cloud Architecture: Designing Scalable Systems on AWS',
    excerpt: 'Learn the principles of cloud architecture and how to design systems that scale with your business needs.',
    h3: 'Building for Scale in the Cloud Era',
    p: 'Cloud architecture has become fundamental to modern software development. Understanding how to leverage cloud services effectively can make the difference between a system that scales and one that crumbles under load.',
    p1: 'With 85% of enterprises now using cloud services, cloud architects are among the highest-paid professionals in IT. This guide covers the essential patterns and practices for designing robust cloud solutions.',
    content: {
      introduction: 'Cloud architecture requires a different mindset than traditional infrastructure design. This article explores the core principles of building scalable, resilient systems using AWS services and cloud-native patterns.',
      keyConcepts: [
        'Core AWS services: EC2, S3, Lambda, RDS',
        'Architecture patterns: Microservices, Serverless, Event-Driven',
        'Scalability and performance considerations',
        'Security best practices in the cloud',
        'Cost optimization strategies'
      ]
    },
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      bio: 'AWS Solutions Architect with 10+ years of experience designing cloud systems. Holder of all AWS certifications and author of "Cloud Patterns for Scalable Applications".',
      social: {
        twitter: '#',
        linkedin: '#',
        github: ""
      }
    },
    image: cloud,
    date: '5 Jan 2024',
    category: 'Cloud Computing',
    tags: ['AWS', 'Cloud Architecture', 'DevOps'],
    readTime: '9 min read',
    image1: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    image2: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
  }
];

export const categories = [
  'Full Stack Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'Machine Learning',
  'Data Science',
  'DevOps'
];

export const tags = [
  'Web Development',
  'Programming',
  'Career',
  'JavaScript',
  'Python',
  'AWS',
  'Cloud Architecture',
  'Neural Networks',
  'Education',
  'MERN',
  'MEAN'
];