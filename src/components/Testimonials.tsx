import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Cricket Analyst",
      rating: 5,
      text: "The predictions are incredibly accurate! I've been using this platform for 6 months and my betting success rate has improved dramatically.",
      avatar: "RK"
    },
    {
      name: "Sarah Johnson",
      role: "Sports Enthusiast",
      rating: 5,
      text: "Amazing insights and real-time analysis. The AI predictions helped me understand the game better and make informed decisions.",
      avatar: "SJ"
    },
    {
      name: "Mohammed Ali",
      role: "Fantasy Cricket Player",
      rating: 5,
      text: "Best cricket prediction platform I've used. The detailed player stats and match analysis are game-changers for fantasy cricket.",
      avatar: "MA"
    },
    {
      name: "Priya Sharma",
      role: "Cricket Fan",
      rating: 5,
      text: "The breaking news feature keeps me updated instantly. Love the user-friendly interface and accurate match predictions!",
      avatar: "PS"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of cricket enthusiasts who trust our predictions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cricket-gold text-cricket-gold" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-card-foreground italic pl-4">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;