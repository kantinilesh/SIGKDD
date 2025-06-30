export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  github?: string;
  linkedin?: string;
  category: 'board' | 'head' | 'lead';
}

export const teamMembers: TeamMember[] = [
  // --- Board Members ---
  {
    name: "Srijan Sarkar",
    role: "Chairperson",
    bio: "Undergraduate with a focus on data mining and machine learning applications in social networks.",
    photo: "/Srijan.jpg",
    email: "",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/srijan-sarkar-90177b288/",
    category: "board"
  },
  {
    name: "Saakshi Pandey",
    role: "Vice Chair",
    bio: "Undergrad coder turning ideas into slick websites & smart data-driven solutions — fueled by curiosity, caffeine, and clean code.",
    photo: "/Saakshi.jpg",
    email: "",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/saakshi-pandey/",
    category: "board"
  },
  {
    name: "Priyanshu Singh",
    role: "Secretary",
    bio: "Undergraduate with a passion for data visualization and communicating insights through storytelling.",
    photo: "/jordy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/priyanshu-singh-560b16253/",
    category: "board"
  },
    {
  name: "Nilesh Kanti",
  role: "Web Master",
  bio: "Just a chill guy focusing on Web3 world and cloud computing frameworks for scalable solutions.",
  photo: "/NILESH.jpg",
  email: "nk8797@srmist.edu.in",
  github: "https://github.com/kantinilesh",
  linkedin: "https://linkedin.com/in/nileshkanti",
  category: "board" 
},
{
  name: "Harsh Sharma",
  role: "Treasurer",
  bio: "Handles all club finances, budgeting, and resource planning with precision and responsibility.",
  photo: "/Harsh.jpg",
  email: "",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/harsh-sharma-99a73824b/",
  category: "board"
},
{
  name: "Aditya Pratap Singh",
  role: "Membership Chair",
  bio: "AI enthusiast with practical experience in Machine Learning and Deep Learning, focusing on building intelligent, data-driven systems that solve real-world problems.",
  photo: "/Aditya.jpg",
  email: "",
  linkedin: "https://www.linkedin.com/in/aditya-singhpratapsingh8a4a62287/",
  category: "board" 
},

  // --- Heads ---
  {
    name: "Rishit Vats",
    role: "R&D Head",
    bio: "At the helm of curiosity and innovation — where deep dives into research ignite real-world breakthroughs.",
    photo: "/Rishit.jpg",
    email: "",
    github: "https://github.com/rishit2264",
    linkedin: "https://www.linkedin.com/in/rishit-vats-56a5a5296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    category: "head"
  },
  {
    name: "Ishan Goel",
    role: "Web/App Dev Head",
    bio: "Building smooth, scalable and sleek websites — turning ideas into digital experiences that leave a lasting impact.",
    photo: "/Ishan.jpg",
    email: "",
    github: "https://github.com/ishangoel2005",
    linkedin: "https://www.linkedin.com/in/ishangoel2005/",
    category: "head"
  },
  {
    name: "Hardik Sharma",
    role: "Corporate Head",
    bio: "Fostering impactful partnerships, driving strategic collaborations — connecting ambition with opportunity.",
    photo: "/Hardik.JPG",
    email: "",
    github: "https://github.com/xixhardik",
    linkedin: "https://www.linkedin.com/in/hardik-sharma-4075b5272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    category: "head"
  },
  {
    name: "Ashmit Singh",
    role: "Creatives Head",
    bio: "Breathing life into ideas — designing identities, shaping stories and leading with creativity at the core.",
    photo: "/yash.jpg",
    email: "",
    github: "https://github.com/Ashmit-Singh",
    linkedin: "https://www.linkedin.com/in/ashmit-singh-085544324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    category: "head"
  },

  // --- Leads ---
  {
    name: "Krish Keshab Banik",
    role: "R&D Lead",
    bio: "",
    photo: "/Krishna.jpg",
    email: "",
    github: "https://github.com/krishnakeshab-banik",
    linkedin: "https://www.linkedin.com/in/krishna-keshab-banik-067819324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    category: "lead"
  },
  {
    name: "Piyush Saini ",
    role: "R&D Lead",
    bio: "",
    photo: "/Piyush.jpeg",
    email: "",
    github: "https://github.com/kunalraj",
    linkedin: "",
    category: "lead"
  },
  {
    name: "Gourav Thakur",
    role: "Web/App Dev Lead",
    bio: "",
    photo: "/Gourav.JPG",
    email: "",
    github: "",
    linkedin: "https://linkedin.com",
    category: "lead"
  },
  {
    name: "Shambhavi Akhouri",
    role: "Web/App Dev Lead",
    bio: "",
    photo: "/Shambhavi.jpg",
    email: "",
    github: "https://github.com/shambhaviakhouri",
    linkedin: "https://www.linkedin.com/in/shambhavi-akhouri-1979b5283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    category: "lead"
  },
  {
    name: "K Arun Teja",
    role: "Corporate Lead",
    bio: "",
    photo: "/Arun.jpg",
    email: "",
    github: "https://github.com/PRED263",
    linkedin: "https://www.linkedin.com/in/arun-teja-reddy -051927324",
    category: "lead"
  },
  {
    name: "Ankit Sengupta",
    role: "Corporate Lead",
    bio: "",
    photo: "/Ankit.jpg",
    email: "",
    github: "https://github.com/kunalraj",
    linkedin: "",
    category: "lead"
  },
  {
    name: "Soubhik Sadhu",
    role: "Creatives Lead",
    bio: "",
    photo: "/Soubhik.jpg",
    email: "",
    github: "https://github.com/SoubhLance",
    linkedin: "http://www.linkedin.com/in/soubhiksadhu",
    category: "lead"
  },
  {
    name: "Aryan Singh",
    role: "Creatives Lead",
    bio: "",
    photo: "/Aryan.jpg",
    email: "",
    github: "https://www.linkedin.com/in/aryan-singh-70b498224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkedin: "",
    category: "lead"
  },

];
