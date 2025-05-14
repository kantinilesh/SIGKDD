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
    title: "Hack Of Duty",
    description: "Hack of Duty (Hackathon) – 28th and 29th October 2024",
    date: "2024-10-28",
    time: "24 hr hackathon",
    location: "TP 401-402",
    type: "Hackathon",
    attendees: 60,
    image: "/Picture1.jpg"
  },
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
  
];