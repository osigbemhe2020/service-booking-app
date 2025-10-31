import {Booking} from "@/components/PaulComponents/BookingCard";
import spaFacialImg from "@/assets/spa-facial.jpg";
import trainingSessionImg from "@/assets/training-session.jpg";
import massageTherapyImg from "@/assets/massage-therapy.jpg";


const bookings: Booking[] = [
    {
      id: "1",
      title: "Luxury Spa Facial Treatment",
      provider: "Serenity Day Spa",
      image: spaFacialImg,
      date: "Wednesday, October 10, 2025 at 14:00",
      duration: "90 minutes",
      location: "Downtown Spa District",
      price: 120,
      status: "upcoming",
    },
    {
      id: "2",
      title: "Personal Training Session",
      provider: "FitLife Studio",
      image: trainingSessionImg,
      date: "Sunday, October 12, 2025 at 09:00",
      duration: "60 minutes",
      location: "FitLife Studio",
      price: 75,
      status: "upcoming",
    },
    {
      id: "3",
      title: "Therapeutic Massage",
      provider: "Healing Touch Wellness",
      image: massageTherapyImg,
      date: "Thursday, September 25, 2025 at 16:00",
      duration: "75 minutes",
      location: "Wellness Center East",
      price: 95,
      status: "completed",
    },
    {
      id: "4",
      title: "Deep Tissue Massage",
      provider: "Healing Touch Wellness",
      image: massageTherapyImg,
      date: "Monday, September 15, 2025 at 11:00",
      duration: "60 minutes",
      location: "Wellness Center East",
      price: 85,
      status: "completed",
    },
    {
      id: "5",
      title: "Yoga Class",
      provider: "Zen Studio",
      image: trainingSessionImg,
      date: "Saturday, September 5, 2025 at 10:00",
      duration: "45 minutes",
      location: "Zen Studio Downtown",
      price: 30,
      status: "cancelled",
    },
  ];

  export default bookings