import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Star, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Reviews = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: 5,
    review: ""
  });

  const existingReviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      review: "Excellent predictions! This website has helped me understand cricket better.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Singh", 
      rating: 4,
      review: "Great analysis and user-friendly interface. Love the live updates feature.",
      date: "2024-01-14"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      rating: 5,
      review: "The most accurate cricket predictions I've seen. Highly recommended!",
      date: "2024-01-13"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send data to backend - need Supabase integration
    console.log("Review submitted:", reviewData);
    alert("Thank you for your review! Please connect Supabase to save reviews permanently.");
    setReviewData({ name: "", rating: 5, review: "" });
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating 
            ? "fill-cricket-gold text-cricket-gold" 
            : "text-gray-300"
        } ${interactive ? "cursor-pointer hover:text-cricket-gold transition-colors" : ""}`}
        onClick={interactive ? () => setReviewData({...reviewData, rating: i + 1}) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="icon" className="hover-scale">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary flex items-center gap-3">
            <MessageSquare className="text-cricket-gold" />
            User Reviews
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
          {/* Write Review Section */}
          <Card className="border-2 border-cricket-gold/20 hover:border-cricket-gold/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-cricket-gold flex items-center gap-2">
                <Send className="h-6 w-6" />
                Write a Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    type="text"
                    value={reviewData.name}
                    onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                    placeholder="Enter your name"
                    required
                    className="border-cricket-field/30 focus:border-cricket-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {renderStars(reviewData.rating, true)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <Textarea
                    value={reviewData.review}
                    onChange={(e) => setReviewData({...reviewData, review: e.target.value})}
                    placeholder="Share your experience with our cricket predictions..."
                    className="min-h-[120px] border-cricket-field/30 focus:border-cricket-gold"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* All Reviews Section */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Star className="h-6 w-6" />
                All Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {existingReviews.map((review) => (
                  <div key={review.id} className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 hover:shadow-glow transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-cricket-gold">{review.name}</h4>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.review}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="hover-scale">
                  Load More Reviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="mt-8 border-2 border-cricket-ball/20 hover:border-cricket-ball/40 transition-all duration-300 hover-scale">
          <CardHeader>
            <CardTitle className="text-2xl text-cricket-ball text-center">Review Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cricket-gold mb-2">4.8</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cricket-gold mb-2">1,247</div>
                <div className="text-muted-foreground">Total Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cricket-gold mb-2">96%</div>
                <div className="text-muted-foreground">Positive Feedback</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;