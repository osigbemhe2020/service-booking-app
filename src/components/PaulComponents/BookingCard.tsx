import Image, { StaticImageData } from "next/image";
import { Calendar, Clock, MapPin, MoreVertical } from "lucide-react";
import React from "react";

// Define the shape of a booking object
export interface Booking {
  id: string;
  title: string;
  provider: string;
  image: string | StaticImageData;
  date: string;
  duration: string;
  location: string;
  price: number;
  status: "upcoming" | "completed" | "cancelled";
}

// Define props type for the BookingCard component
interface BookingCardProps {
  booking: Booking;
}

// Functional component with explicit return type
const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  const getStatusBadgeClasses = (status: Booking["status"]): string => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";

    switch (status) {
      case "upcoming":
        return `${baseClasses} bg-primary-light text-primary-dark`;
      case "completed":
        return `${baseClasses} bg-success/10 text-success`;
      case "cancelled":
        return `${baseClasses} bg-destructive/10 text-destructive`;
      default:
        return `${baseClasses} bg-muted text-muted-foreground`;
    }
  };

  return (
    <div className=" rounded-xl overflow-hidden  border border-black/30  hover:shadow-lg transition-smooth">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Image */}
        <div className="w-full sm:w-32 h-32 flex-shrink-0">
          {typeof booking.image === "string" ? (
            <img
              src={booking.image}
              alt={booking.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <Image
              src={booking.image}
              alt={booking.title}
              className="w-full h-full object-cover rounded-lg"
              width={128}
              height={128}
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-lg mb-1">{booking.title}</h3>
                <p className="text-sm text-muted-foreground">{booking.provider}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={getStatusBadgeClasses(booking.status)}>
                  {booking.status}
                </span>
                <button className="p-1 hover:bg-accent rounded transition-smooth">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{booking.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{booking.location}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">
              ${booking.price}
            </span>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-smooth font-medium">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
