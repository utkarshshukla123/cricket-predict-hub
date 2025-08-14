import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, MessageSquare, Award } from "lucide-react";

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Virat Sharma",
      rating: 5,
      review: "Absolutely phenomenal! The predictions are spot-on and helped me win my fantasy league consistently. The real-time analysis during matches is incredible.",
      date: "2 days ago",
      verified: true,
      helpful: 24,
      avatar: "VS"
    },
    {
      id: 2,
      name: "Alex Thompson",
      rating: 5,
      review: "As a cricket betting enthusiast, this platform has been a game-changer. The accuracy rate is outstanding, and the detailed statistics help make informed decisions.",
      date: "1 week ago",
      verified: true,
      helpful: 18,
      avatar: "AT"
    },
    {
      id: 3,
      name: "Rohit Gupta",
      rating: 5,
      review: "The breaking news feature is amazing! I get updates faster than any other sports app. The AI predictions have improved my understanding of the game significantly.",
      date: "3 days ago",
      verified: true,
      helpful: 31,
      avatar: "RG"
    },
    {
      id: 4,
      name: "Lisa Chen",
      rating: 5,
      review: "Fantastic platform for cricket analysis. The user interface is clean, predictions are reliable, and the community features make it even better. Highly recommended!",
      date: "5 days ago",
      verified: true,
      helpful: 15,
      avatar: "LC"
    },
    {
      id: 5,
      name: "Arjun Patel",
      rating: 5,
      review: "Been using this for the entire IPL season. The match predictions and player performance insights are incredibly detailed and accurate. Worth every penny!",
      date: "1 week ago",
      verified: true,
      helpful: 27,
      avatar: "AP"
    },
    {
      id: 6,
      name: "Emma Wilson",
      rating: 5,
      review: "Love the social features and how easy it is to follow my favorite teams. The chatbot is super helpful for quick queries. Great job on this platform!",
      date: "4 days ago",
      verified: true,
      helpful: 12,
      avatar: "EW"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-cricket-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              User Reviews
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Read what our community says about their experience with Cricket Predictions Pro
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cricket-gold mb-1">4.9</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cricket-gold text-cricket-gold" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2.5K+</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cricket-ball mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="hover-lift bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-3">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-semibold text-card-foreground mr-2">{review.name}</h4>
                        {review.verified && (
                          <div className="w-4 h-4 bg-cricket-field rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cricket-gold text-cricket-gold" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <Button variant="ghost" size="sm" className="h-auto p-1">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-auto p-1">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Write a Review
          </Button>
          <Button variant="outline" size="lg">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;