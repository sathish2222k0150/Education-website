import { Activity, ActivitySquare, BadgeCheck, BookOpen, Brain, Briefcase, CloudCog, Code, GraduationCap, Layers, Lightbulb, LucideIcon, Server, ServerCog, ShieldCheck, Target, User, Users } from "lucide-react";
import { ReactNode } from "react";
import fullstack from '../../assets/fullstack.png';
import AI from '../../assets/AI.jpg';
import cloud from '../../assets/cloud.jpg';

export interface LearningCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhoCanLearnData {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  cards: LearningCard[];
}

export interface Course {
  eligibility: ReactNode;
  id: number;
  slug:string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  fee: string;
  emi:string;
  month:string;
  originalFee?: string;
  image: string;
  videoUrl:string;
  category: string;
  level: string;
  students: string;
  rating: number;
  tags: string[];
  popular?: boolean;
  new?: boolean;
  mode: string;
  batchStart: string;
  skills: string[];
  learningOutcomes: string[];
  hiringPartners: string[];
   whoCanLearn: WhoCanLearnData;
  instructor: {
    name: string;
    title: string;
    experience: string;
    image: string;
    bio: string;
    duration:string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  certificates: Array<{
    icon:string;
    title:string;
    description:string;
  }>;
  curriculum: Array<{
    module: string;
    title: string;
    lessons: number;
    topics: string[];
    description: string;
  }>;
  careers: Array<{
    role: string;
    salary: string;
    growth: string;
  }>;
  schedule: Array<{
    type: string;
    days: string;
    time: string;
    status: string;
  }>;
  Benefit: Array<{
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    highlighted?: boolean;
  }>;
  SalarayData: Array<{
    role: string;
    min: number;
    avg: number;
    max: number;
    demand: string;
  }>;
  
}

export const coursesData: Course[] = [
 {
  id: 1,
  slug: 'full-stack-development-courses-in-coimbatore-tamilnadu',
  title: "Full Stack Development",
  subtitle: "Master Frontend and Backend Development",
  description: "KGPATH Full Stack Course: Learn React, Node, Angular, MongoDB, and more with live projects. Get certified in MERN, MEAN, Python, or Java stacks. Online/offline in Coimbatore & Tamil Nadu with placement support.",
  duration: "6 Months",
  fee: "₹1,19,999",
  emi: "₹6,901.63/month",
  month: "Interest amount changes depending on the initial payment.",
  originalFee: "₹1,75,000",
  image: fullstack,
  videoUrl: "https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
  category: "Technology",
  level: "Intermediate",
  students: "2.5k+",
  rating: 4.9,
  tags: ["Certificate", "Live Projects", "Job Guarantee", "Full Stack Course with Placement", "Full Stack Certification"],
  new: true,
  mode: "Online/Offline",
  batchStart: "Jan 20, 2025",
  eligibility: "Basic programming knowledge required",
  skills: [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
    "MongoDB", "SQL", "Git and GitHub", "AWS", "REST APIs", "GraphQL",
    "Docker", "Microservices", "DevOps for developers"
  ],
    hiringPartners: [
      "Google", "Microsoft", "Amazon", "Netflix", "Meta",
      "Swiggy", "Zomato", "Flipkart", "Paytm", "Uber",
      "Adobe", "Spotify", "Airbnb", "Tesla"
    ],
    learningOutcomes: [
    "Build responsive web applications with HTML CSS JavaScript course content",
    "Develop backend APIs with Node.js and Express",
    "Work with databases (MongoDB, SQL) covered in our SQL for developers section",
    "Deploy applications to cloud using AWS and Docker for developers",
    "Implement authentication, REST API course modules, and security best practices",
    "Use Git and GitHub for version control",
    "Build full stack real time projects for your portfolio",
    "Understand latest full stack technologies and microservices architecture"
  ],
  instructor: {
    name: "Alex Thompson",
    title: "Senior Full Stack Developer at Microsoft",
    experience: "12+ years",
    duration: "520 Hours of Classroom Training",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
    bio: "With 12+ years of software development experience, Alex has led teams building front end and back end applications, REST APIs, and deploying microservices using Docker and AWS. His expertise covers React.js, Node.js, Angular, and DevOps for developers."
  },
      curriculum: [
    {
      module: 'Module 1',
      title: 'Frontend Fundamentals',
      lessons: 12,
      topics: ['HTML5', 'CSS3', 'JavaScript ES6+'],
      description: "Start your full stack developer syllabus by mastering HTML CSS JavaScript course content, responsive web design course topics, and front end and back end integration basics."
    },
    {
      module: 'Module 2',
      title: 'React Development',
      lessons: 15,
      topics: ['React Basics', 'Hooks', 'State Management'],
      description: "Dive deep into React js course module, building interactive UIs and single page applications, as part of our best full stack bootcamp content."
    },
    {
      module: 'Module 3',
      title: 'Backend Development',
      lessons: 18,
      topics: ['Node.js', 'Express', 'REST APIs'],
      description: "Learn backend API development course content, including Express js course modules, and REST API course best practices to become full stack developer."
    },
    {
      module: 'Module 4',
      title: 'Database Management',
      lessons: 10,
      topics: ['MongoDB', 'SQL', 'Database Design'],
      description: "Master MongoDB course and SQL for developers, essential parts of any full stack development certification."
    },
    {
      module: 'Module 5',
      title: 'Deployment & DevOps',
      lessons: 8,
      topics: ['AWS', 'Docker', 'CI/CD'],
      description: "Cover Docker for developers, Git and GitHub course content, DevOps for developers, and cloud deployment course modules to deploy full stack apps."
    },
    {
      module: 'Module 6',
      title: 'Capstone Project',
      lessons: 12,
      topics: ['Full Stack App', 'Testing', 'Documentation'],
      description: "Apply everything in a full stack internship style capstone, building real time projects full stack and showcasing full stack developer skills to employers."
    }
  ],
    careers: [
      { role: "Frontend Developer", salary: "₹4-8 LPA", growth: "High" },
      { role: "Backend Developer", salary: "₹5-10 LPA", growth: "Very High" },
      { role: "Full Stack Developer", salary: "₹6-15 LPA", growth: "Excellent" },
      { role: "Software Engineer", salary: "₹7-18 LPA", growth: "Excellent" },
      { role: "Tech Lead", salary: "₹12-25 LPA", growth: "Very High" },
      { role: "Solution Architect", salary: "₹15-35 LPA", growth: "Excellent" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your skills",
    description: "Build job-ready capabilities through hands-on, guided learning",
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Get expert mentorship, personalised learning, and guidance to overcome roadblocks",
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Apply concepts through real-world exercises and drills",
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live, mentor-led sessions",
  },
  {
    icon: "🌟",
    title: "Showcase your skills",
    description: "Earn a certificate that reflects your commitment, growth, skills, and capabilities",
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Short-term focus, practical skills, long-term career value",
  },
],
Benefit: [
  {
    id: 1,
    icon: Code,
    title: "Hands-On Training",
    description:
      "Gain practical coding experience through intensive hands-on full stack training, covering front end and back end course modules like React js course, Node js course, and REST API course."
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "Industry-Recognized Certification",
    description:
      "Receive a professional full stack development certification upon completion, recognized by top tech companies, helping you become a certified full stack developer with placement assistance full stack.",
    highlighted: true  // middle (orange) card
  },
  {
    id: 3,
    icon: Server,
    title: "Real-Time Projects",
    description:
      "Build fully functional real-world applications with live full stack project training, using latest full stack technologies like MongoDB course, Express js course, and Docker for developers."
  },
  {
    id: 4,
    icon: User,
    title: "One-on-One Coaching",
    description:
      "Get personalized mentorship while you learn full stack from scratch, covering MERN stack course, MEAN stack course, Python full stack course, and Java full stack course topics."
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Industry Integration",
    description:
      "Collaborate with industry experts and gain practical knowledge aligned with our full stack developer syllabus, including cloud deployment course and microservices course modules."
  },
  {
    id: 6,
    icon: Users,
    title: "Dedicated Mentorship Ratio",
    description:
      "One dedicated trainer for every 15 students ensures focused attention, making our full stack course online and offline among the best full stack developer course choices in India."
  }
],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Your Journey to Becoming a <span class="text-teal-600">Full Stack Developer</span> Starts Here',
      description: "This Full Stack Development course is crafted for students, aspiring developers, and career switchers who want to master both frontend and backend technologies. Covering everything from HTML, CSS, JavaScript, React, and Node.js to databases like MongoDB and MySQL, this program equips you to build complete, production-ready web applications. Learn to design responsive UIs, build secure APIs, manage databases, and deploy projects on cloud platforms. Whether you're preparing for a developer job, freelancing, or launching your own tech startup, this hands-on course will help you become a job-ready full stack web developer with real-world project experience and the confidence to tackle any coding challenge.",
      cards: [
        {
            id: "cs-students",
            title: "Computer Science Students",
            description: "Ideal for students pursuing CS or IT degrees looking to master full stack development.",
            icon: GraduationCap
          },
          {
            id: "career-switchers",
            title: "Career Switchers",
            description: "Perfect for professionals from non-tech backgrounds transitioning into full stack development.",
            icon: Briefcase
          },
          {
            id: "junior-devs",
            title: "Junior Developers",
            description: "For early-career developers looking to gain hands-on experience and build full stack applications.",
            icon: Users
          },
          {
            id: "startup-founders",
            title: "Startup Founders",
            description: "Great for entrepreneurs who want to build and manage their own web platforms end-to-end.",
            icon: BookOpen
          }

      ]
    },
    SalarayData: [
    { role: 'Software Engineer', min: 6, avg: 12, max: 24, demand: 'High' },
    { role: 'Data Analyst', min: 4, avg: 8, max: 16, demand: 'High' },
    { role: 'UI/UX Designer', min: 3, avg: 7, max: 14, demand: 'Medium' },
    { role: 'Digital Marketer', min: 3, avg: 6, max: 12, demand: 'Medium' },
    { role: 'Cloud Engineer', min: 8, avg: 14, max: 22, demand: 'Very High' },
    { role: 'Product Manager', min: 10, avg: 18, max: 35, demand: 'High' }
  ],
  faqs: [
        {
          question: "Do I need prior coding experience?",
          answer: "No prior experience is necessary. This course covers everything from basic HTML/CSS to advanced backend development."
        },
        {
          question: "Which technologies will I learn?",
          answer: "You'll learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deployment on cloud platforms."
        },
        {
          question: "Will I build real projects?",
          answer: "Yes, you'll work on full-stack applications, APIs, and end-to-end projects to build your portfolio."
        },
        {
          question: "Is placement support provided?",
          answer: "Yes, we offer resume guidance, mock interviews, and connect you with hiring partners."
        }
      ],
  },
  {
    id: 2,
    slug: 'ai-&-ml-courses-in-coimbatore-tamilnadu',
    title: "AI & Machine Learning",
    subtitle: "Master Artificial Intelligence and Machine Learning",
    description: "This intensive AI & ML course will equip you with the skills to build intelligent systems, predictive models, and deep learning applications. Learn from industry experts and work on real-world projects.",
    duration: "6 Months",
    fee: "₹75,000",
    emi:"₹6,901.63/month",
    month:"Interest amount changes depending on the initial payment.",
    originalFee: "₹90,000",
    image: AI,
    videoUrl:"https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
    category: "Technology",
    level: "Advanced",
    students: "1.8k+",
    rating: 4.7,
    tags: ["Certificate", "Capstone Project", "Research Support"],
    popular: true,
    mode: "Online/Offline & Offline",
    batchStart: "Feb 5, 2025",
    eligibility:"Basic programming experience recommended",
    skills: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks",
      "Deep Learning", "Natural Language Processing", "Computer Vision",
      "Data Preprocessing", "Model Deployment", "AI Ethics", "Reinforcement Learning"
    ],
    hiringPartners: [
      "Google", "Microsoft", "Amazon", "NVIDIA", "Tesla",
      "Apple", "Netflix", "Adobe", "IBM", "Samsung",
      "Uber", "Airbnb", "Paytm", "Flipkart"
    ],
    learningOutcomes: [
      "Understand fundamental AI/ML concepts and algorithms",
      "Build and train machine learning models using Python",
      "Implement deep learning architectures with TensorFlow/PyTorch",
      "Work with NLP and Computer Vision applications",
      "Deploy ML models in production environments",
      "Evaluate model performance and optimize results",
      "Understand ethical considerations in AI",
      "Complete a substantial capstone project"
    ],
    instructor: {
      name: "Dr. Rajesh Kumar",
      title: "AI Research Scientist at NVIDIA",
      experience: "15+ years",
      duration:"420 Hours of Classroom Training",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "PhD in Machine Learning with 15+ years of experience in AI research and development. Former lead researcher at Google Brain and IBM Watson."
    },
    curriculum: [
  {
    module: "Module 1",
    title: "Python for AI/ML",
    lessons: 10,
    topics: ["NumPy", "Pandas", "Matplotlib", "Data Structures"],
    description: "Kickstart your machine learning course journey with Python fundamentals, data preprocessing, and visualization for AI and data science applications."
  },
  {
    module: "Module 2",
    title: "Machine Learning Fundamentals",
    lessons: 16,
    topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
    description: "Learn key AI and ML algorithms, model training techniques, and evaluation metrics used in real-world predictive analytics and data science projects."
  },
  {
    module: "Module 3",
    title: "Deep Learning",
    lessons: 20,
    topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"],
    description: "Master deep learning training with TensorFlow and PyTorch, covering neural network architectures for computer vision and natural language processing."
  },
  {
    module: "Module 4",
    title: "Natural Language Processing",
    lessons: 14,
    topics: ["Text Processing", "Word Embeddings", "BERT", "GPT Models"],
    description: "Explore NLP techniques, build text classification models, and work with state-of-the-art transformer models like BERT and GPT."
  },
  {
    module: "Module 5",
    title: "Computer Vision",
    lessons: 12,
    topics: ["Image Processing", "Object Detection", "Image Segmentation"],
    description: "Develop AI solutions for visual data, learning techniques in image recognition, object detection, and segmentation."
  },
  {
    module: "Module 6",
    title: "Model Deployment & Ethics",
    lessons: 8,
    topics: ["MLOps", "Model Serving", "AI Ethics", "Bias Mitigation"],
    description: "Understand model deployment in production environments, AI ethics, bias mitigation, and MLOps practices for maintaining AI systems."
  }
],
    careers: [
      { role: "Machine Learning Engineer", salary: "₹8-15 LPA", growth: "Very High" },
      { role: "Data Scientist", salary: "₹7-14 LPA", growth: "Excellent" },
      { role: "AI Research Engineer", salary: "₹10-20 LPA", growth: "Excellent" },
      { role: "NLP Engineer", salary: "₹9-18 LPA", growth: "Very High" },
      { role: "Computer Vision Engineer", salary: "₹9-17 LPA", growth: "Very High" },
      { role: "AI Product Manager", salary: "₹12-25 LPA", growth: "High" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your AI skills",
    description: "Build job-ready AI and machine learning skills through hands-on, guided learning with Python, deep learning, and NLP."
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Receive expert mentorship and personalized guidance while exploring advanced AI topics like computer vision and reinforcement learning."
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Work on real-world AI projects, predictive analytics, and deploy models using MLOps techniques to strengthen your portfolio."
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live mentor-led sessions covering machine learning course essentials and deep learning training."
  },
  {
    icon: "🌟",
    title: "Showcase your AI certification",
    description: "Earn an AI & ML certificate recognized by industry leaders, highlighting your expertise in neural networks, NLP, and data science."
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Focus on practical AI development, real data sets, and job-ready skills to build a successful AI career in India and beyond."
  }
],
Benefit: [
  {
    id: 1,
    icon: Brain,
    title: "Expert AI Mentors",
    description:
      "Learn from industry professionals through hands-on AI and machine learning course modules, including deep learning training and real-world Python AI projects."
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "AI Certification",
    description:
      "Earn an industry-recognized AI certification that validates your skills in artificial intelligence, neural networks, natural language processing, and data science applications.",
    highlighted: true  // middle (orange) card
  },
  {
    id: 3,
    icon: Activity,
    title: "Project-Based Learning",
    description:
      "Work on real-world AI/ML projects covering computer vision, NLP, and predictive analytics using tools like TensorFlow, PyTorch, and scikit-learn."
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Cutting-Edge Curriculum",
    description:
      "Stay updated with the latest topics like generative AI, reinforcement learning, large language models (LLMs), and MLOps in our advanced AI & ML training program."
  },
  {
    id: 5,
    icon: Users,
    title: "Collaborative Community",
    description:
      "Join a vibrant AI learning community to discuss AI and machine learning course topics, share research ideas, and participate in group data science projects."
  },
  {
    id: 6,
    icon: Target,
    title: "Career-Focused Guidance",
    description:
      "Receive support for your AI career journey, including resume building, mock interviews, portfolio projects, and job referrals for machine learning engineer and data scientist roles."
  }
],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Become an <span class="text-teal-600">AI & Machine Learning</span> Expert',
      description: "This AI & Machine Learning course in Coimbatore and Tamil Nadu is ideal for anyone looking to master artificial intelligence and data science. Covering supervised and unsupervised learning, deep learning training, Python AI programming, NLP, computer vision, and model deployment, it prepares you for roles like machine learning engineer, AI researcher, or data scientist. Build real-world AI/ML models, gain AI certification, and develop skills in neural networks, reinforcement learning, and ethical AI practices. Perfect for those seeking an advanced AI training program or planning to pursue research and higher studies in machine learning.",
      cards: [
        {
            id: "cs-students",
            title: "Computer Science Students",
            description: "Perfect for students eager to explore AI and ML as part of their academic or research journey.",
            icon: GraduationCap
          },
          {
            id: "career-switchers",
            title: "Career Switchers",
            description: "Designed for professionals moving from traditional tech or non-tech roles into AI/ML careers.",
            icon: Briefcase
          },
          {
            id: "junior-engineers",
            title: "Junior AI Engineers",
            description: "For early-career engineers who want to specialize in artificial intelligence and machine learning.",
            icon: Users
          },
          {
            id: "ai-entrepreneurs",
            title: "AI Entrepreneurs",
            description: "Great for founders and product builders aiming to create AI-powered solutions.",
            icon: BookOpen
          }
      ]
    },
    SalarayData: [
    { role: 'Software Engineer', min: 6, avg: 12, max: 24, demand: 'High' },
    { role: 'Data Analyst', min: 4, avg: 8, max: 16, demand: 'High' },
    { role: 'UI/UX Designer', min: 3, avg: 7, max: 14, demand: 'Medium' },
    { role: 'Digital Marketer', min: 3, avg: 6, max: 12, demand: 'Medium' },
    { role: 'Cloud Engineer', min: 8, avg: 14, max: 22, demand: 'Very High' },
    { role: 'Product Manager', min: 10, avg: 18, max: 35, demand: 'High' }
  ],
   faqs: [
        {
          question: "Do I need prior programming knowledge?",
          answer: "Basic Python knowledge is recommended, but we start with Python essentials for beginners."
        },
        {
          question: "What topics are covered?",
          answer: "Supervised & unsupervised learning, neural networks, deep learning, NLP, and model deployment."
        },
        {
          question: "Will I work on real datasets?",
          answer: "Absolutely! You'll work on industry-relevant projects using real-world datasets."
        },
        {
          question: "Is this course suitable for working professionals?",
          answer: "Yes, we offer flexible batches including evenings and weekends."
        }
      ],
  },
  {
    id: 3,
    slug: 'cloud-architect-courses-in-coimbatore-tamilnadu',
    title: "Cloud Architect",
    subtitle: "Master Cloud Computing and Architecture",
    description: "Become a certified cloud architect with this comprehensive program covering AWS, Azure, and Google Cloud platforms. Learn to design, deploy, and manage scalable cloud solutions.",
    duration: "6 Months",
    fee: "₹75,000",
    emi:"₹6,901.63/month",
    month:"Interest amount changes depending on the initial payment.",
    originalFee: "₹90,000",
    image: cloud,
    videoUrl:"https://youtu.be/r0bKvw0oK4s?si=rBG-sduBj6Iy60qo",
    category: "Technology",
    level: "Intermediate",
    students: "2.2k+",
    rating: 4.8,
    tags: ["AWS Certified", "Azure Certified", "Hands-on Labs"],
    new: true,
    mode: "Online/Offline",
    batchStart: "Feb 10, 2025",
    eligibility:"Basic understanding of networking and operating systems",
    skills: [
      "AWS", "Azure", "Google Cloud", "Terraform", "Docker",
      "Kubernetes", "CI/CD", "Serverless", "Cloud Security",
      "Microservices", "Cloud Migration", "Infrastructure as Code"
    ],
    hiringPartners: [
      "Amazon", "Microsoft", "Google", "IBM", "Oracle",
      "VMware", "Adobe", "Spotify", "Netflix", "Uber",
      "Swiggy", "Zomato", "Paytm", "Flipkart"
    ],
    learningOutcomes: [
      "Design and implement cloud solutions on AWS, Azure, and GCP",
      "Configure and manage virtual networks and storage",
      "Implement security and compliance in cloud environments",
      "Automate deployments using Infrastructure as Code",
      "Containerize applications using Docker and Kubernetes",
      "Design for high availability and disaster recovery",
      "Optimize cloud costs and performance",
      "Prepare for major cloud certification exams"
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Principal Cloud Architect at Amazon Web Services",
      experience: "14+ years",
      duration:"420 Hours of Classroom Training",
      image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "14+ years of cloud architecture experience with expertise in multi-cloud environments. Holds 12+ cloud certifications. Former cloud architect at Microsoft and Google Cloud."
    },
    curriculum: [
      {
        module: "Module 1",
        title: "Cloud Fundamentals",
        lessons: 8,
        topics: ["Cloud Concepts", "Service Models", "Deployment Models"],
        description: ""
      },
      {
        module: "Module 2",
        title: "AWS Core Services",
        lessons: 15,
        topics: ["EC2", "S3", "VPC", "IAM", "RDS"],
        description: ""
      },
      {
        module: "Module 3",
        title: "Azure Core Services",
        lessons: 12,
        topics: ["Virtual Machines", "Blob Storage", "Azure AD", "SQL Database"],
        description: ""
      },
      {
        module: "Module 4",
        title: "Google Cloud Platform",
        lessons: 10,
        topics: ["Compute Engine", "Cloud Storage", "VPC Networks", "Cloud SQL"],
        description: ""
      },
      {
        module: "Module 5",
        title: "Cloud Architecture",
        lessons: 16,
        topics: ["High Availability", "Scalability", "Security", "Cost Optimization"],
        description: ""
      },
      {
        module: "Module 6",
        title: "DevOps in Cloud",
        lessons: 12,
        topics: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
        description: ""
      }
    ],
    careers: [
      { role: "Cloud Engineer", salary: "₹6-12 LPA", growth: "Very High" },
      { role: "Cloud Architect", salary: "₹10-25 LPA", growth: "Excellent" },
      { role: "DevOps Engineer", salary: "₹8-18 LPA", growth: "Excellent" },
      { role: "Cloud Security Specialist", salary: "₹9-20 LPA", growth: "Very High" },
      { role: "Site Reliability Engineer", salary: "₹12-28 LPA", growth: "Excellent" },
      { role: "Cloud Consultant", salary: "₹15-35 LPA", growth: "High" }
    ],
    schedule: [
      {
        type: "Weekday Batch - 1",
        days: "Monday to Friday",
        time: "07:00 AM - 09:00 AM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 2",
        days: "Monday to Friday",
        time: "09:00 AM - 05:00 PM",
        status: "Available"
      },
      {
        type: "Weekday Batch - 3",
        days: "Monday to Friday",
        time: "06:00 PM - 09:00 AM",
        status: "Available"
      },
    ],
    certificates: [
  {
    icon: "👨‍💻",
    title: "Quick-start your skills",
    description: "Build job-ready capabilities through hands-on, guided learning",
  },
  {
    icon: "💡",
    title: "Stay supported",
    description: "Get expert mentorship, personalised learning, and guidance to overcome roadblocks",
  },
  {
    icon: "📊",
    title: "Practice what you learn",
    description: "Apply concepts through real-world exercises and drills",
  },
  {
    icon: "💡",
    title: "Learn from the best",
    description: "Gain real-world insights through live, mentor-led sessions",
  },
  {
    icon: "🌟",
    title: "Showcase your skills",
    description: "Earn a certificate that reflects your commitment, growth, skills, and capabilities",
  },
  {
    icon: "🚀",
    title: "Designed for impact",
    description: "Short-term focus, practical skills, long-term career value",
  },
],
Benefit: [
  {
  id: 1,
  icon: CloudCog,
  title: "Cloud Expert Trainers",
  description:
    "Learn from certified cloud architects with experience in AWS, Azure, and Google Cloud infrastructure design."
},
{
  id: 2,
  icon: ShieldCheck,
  title: "Cloud Certification",
  description:
    "Get certified in cloud architecture and security, preparing you for roles like AWS Solutions Architect and DevOps Engineer.",
  highlighted: true  // middle (orange) card
},
{
  id: 3,
  icon: ServerCog,
  title: "Live Cloud Labs",
  description:
    "Deploy and manage real-world applications on the cloud with hands-on labs and guided architectural projects."
},
{
  id: 4,
  icon: Layers,
  title: "Multi-Cloud Strategies",
  description:
    "Gain practical knowledge in designing scalable, vendor-agnostic solutions across AWS, Azure, and GCP platforms."
},
{
  id: 5,
  icon: ActivitySquare,
  title: "Real-Time Monitoring & DevOps",
  description:
    "Master cloud automation, CI/CD pipelines, infrastructure as code (IaC), and monitoring tools like Prometheus and Grafana."
},
{
  id: 6,
  icon: Briefcase,
  title: "Career Mentorship & Placement",
  description:
    "Receive one-on-one career guidance, interview preparation, and referrals to top cloud-based companies and startups."
}


],
 whoCanLearn: {
      sectionTitle: "WHO CAN LEARN",
      mainHeading: 'Perfect for Aspiring <span class="text-teal-600">Cloud Experts</span>',
      description: "This comprehensive cloud architect program is ideal for students, IT professionals, and career switchers who are passionate about designing secure, scalable, and efficient cloud infrastructure. Whether you're preparing for certifications like AWS Certified Solutions Architect, Microsoft Azure Architect, or Google Cloud Professional Architect, this course equips you with in-demand skills in cloud design, deployment, and management. Learn how to architect modern cloud-native applications, implement DevOps best practices, and optimize cloud costs — all guided by industry experts. Perfect for anyone looking to advance their career in cloud computing and build the foundation for high-paying roles in top tech companies.",
      cards: [
       {
          id: "it-students",
          title: "IT & CS Students",
          description: "Ideal for students interested in building careers in cloud computing and infrastructure design.",
          icon: GraduationCap
        },
        {
          id: "career-switchers",
          title: "Career Switchers",
          description: "Perfect for professionals moving from on-premise or non-cloud roles into cloud architecture.",
          icon: Briefcase
        },
        {
          id: "junior-engineers",
          title: "Junior Cloud Engineers",
          description: "For early-career engineers looking to grow into cloud architect roles.",
          icon: Users
        },
        {
          id: "tech-leaders",
          title: "Tech Leaders & Founders",
          description: "Great for decision-makers designing scalable, cloud-native architectures for startups or enterprises.",
          icon: BookOpen
        }

      ]
    },
    SalarayData: [
    { role: 'Software Engineer', min: 6, avg: 12, max: 24, demand: 'High' },
    { role: 'Data Analyst', min: 4, avg: 8, max: 16, demand: 'High' },
    { role: 'UI/UX Designer', min: 3, avg: 7, max: 14, demand: 'Medium' },
    { role: 'Digital Marketer', min: 3, avg: 6, max: 12, demand: 'Medium' },
    { role: 'Cloud Engineer', min: 8, avg: 14, max: 22, demand: 'Very High' },
    { role: 'Product Manager', min: 10, avg: 18, max: 35, demand: 'High' }
  ],
  faqs: [
        {
          question: "Do I need prior cloud knowledge?",
          answer: "Not required, but basic understanding of IT and networking helps. We start from fundamentals."
        },
        {
          question: "Which cloud providers are covered?",
          answer: "You'll learn AWS, Microsoft Azure, and Google Cloud fundamentals, services, and architecture best practices."
        },
        {
          question: "Will I get certification support?",
          answer: "Yes, we guide you for certifications like AWS Solutions Architect, Azure Administrator, etc."
        },
        {
          question: "Do you cover DevOps topics?",
          answer: "Yes, basic DevOps practices like CI/CD, Docker, and Kubernetes are included."
        }
      ],
  }

];

export const getCourseById = (id: number) => {
  return coursesData.find(course => course.id === id);
};

// ✅ Keep getCourseBySlug for slug-based routing
export const getCourseBySlug = (slug: string) => {
  return coursesData.find(course => course.slug === slug);
};