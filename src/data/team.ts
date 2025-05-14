export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  github?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Srijan Sarkar",
    role: "Chairperson",
    bio: "Undergraduate with a focus on data mining and machine learning applications in social networks.",
    photo: "/Srijan.jpg",
    email: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Saakshi Pandey",
    role: "Vice Chair",
    bio: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    photo: "/Saakshi.jpg",
    email: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Priyanshu Singh",
    role: "Secretary",
    bio: "Undergraduate with a passion for data visualization and communicating insights through storytelling.",
    photo: "/jordy.jpg",
    email: "",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Nilesh Kanti",
    role: "Web Master",
    bio: "Just a chill guy focusing on Web3 world and cloud computing frameworks for scalable solutions.",
    photo: "/NILESH.jpg",
    email: "nk8797@srmist.edu.in",
    github: "https://github.com/kantinilesh",
    linkedin: "https://linkedin.com/in/nileshkanti"
  },
  {
    name: "Harsh Sharma",
    role: "Treasurer",
    bio: "Handles all club finances, budgeting, and resource planning with precision and responsibility.",
    photo: "/Harsh.jpg",
    email: "",
    github: "https://github.com"
  },
  {
    name: "Aditya Pratap Singh",
    role: "Membership Chair",
    bio: "AI enthusiast with practical experience in Machine Learning and Deep Learning, focusing on building intelligent, data-driven systems that solve real-world problems.",
    photo: "/Aditya.jpg",
    email: "",
    linkedin: "https://linkedin.com"
  },
  
];