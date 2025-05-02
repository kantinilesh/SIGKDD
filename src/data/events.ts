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
    description: "A hands-on workshop covering the basics of machine learning with practical examples.",
    date: "2024-10-17",
    time: "24 hr hackathon",
    location: "TP 401-402",
    type: "Hackathon",
    attendees: 60,
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  
];