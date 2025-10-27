import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Salon Owner",
    content: "BookIt has transformed my business. We were able to fill 70% more appointments and manage our schedule effortlessly.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Home Service Pro",
    content: "The scheduling made my work easy. It's incredibly user-friendly and my clients love how easy it is to book.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Fitness Trainer",
    content: "Thanks to this booking service my client count just grew. The quality of this service is top-notch and professional.",
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">Don't just take our word for it</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;