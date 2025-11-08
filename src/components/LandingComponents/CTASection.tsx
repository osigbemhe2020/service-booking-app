import { ArrowRight, Star, MapPin, Users } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join BookIt today and experience the future of service booking
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            
            <Link href="/book-service">
            <button className="bg-blue-600 hover:bg-blue-700 flex gap-1 text-white px-8 py-3 rounded-md">
              Start Booking Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link href="/sign-up">
              <button className="px-8 py-3 text-primary500 bg-white rounded-md border-1 border-solid border-secondary300">
                Become a Provider
              </button>
            </Link>
          </div>
          <hr className="text-black/20" />
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mx-auto justify-center ">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-black/20" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-black/20" />
              <span>Easy cancellation</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-black/20" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
