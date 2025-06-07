export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
  image: string;
}

export const eventsData: Event[] = [
    {
    title: "Tech Talk",
    description: "Mastering the Path to Product-Based Companies organized by SRMIST ACM SIGKDD",
    date: "2025-03-28",
    time: "9:00 AM - 12:00 PM",
    location: "Turing Hall",
    type: "Workshop",
    attendees: 60,
    image: "/Picture2.jpg"
  },
   {
    title: "Orientation Session 2025",
    description: "The beginning of a New Chapter was marked, filled with Fresh Energy, Innovative Ideas and Exciting Opportunities for students passionate about Technology and Data Science.",
    date: "2025-02-26",
    time: "9:00 AM - 12:00 PM",
    location: "Turing Hall",
    type: "Orientation",
    attendees: 60,
    image: ""
  },
  {
    title: "Hack Of Duty",
    description: "Hack of Duty (Hackathon) – 28th and 29th October 2024",
    date: "2024-10-28",
    time: "24 hr hackathon",
    location: "TP 401-402",
    type: "Hackathon",
    attendees: 180,
    image: "/Picture1.jpg"
  },
    {
    title: "Tresure Hunt",
    description: "The Event was exclusively designed to Foster Teamwork, Problem Solving and Logical Thinking in an Exciting and Competitive Environment.",
    date: "2024-08-30",
    time: "12:00 PM - 04:30 PM",
    location: "Seminar Hall-1",
    type: "Tresure Hunt",
    attendees: 100,
    image: "/Treasure.png"
  },
    {
    title: "Tech Talk",
    description: "An Insightful Tech Talk on 'AI & ML Non-Computing Industries: Deep Dive in Smart Grids' was made by Mr. Venkatesh Sarangan (Chief Scientist at Tata Consultancy Services Research, Chennai)",
    date: "2024-08-30",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall-1",
    type: "Tech Talk",
    attendees: 100,
    image: "/Tech.jpg"
  },
  
];