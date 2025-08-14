import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, BarChart3, Users } from "lucide-react";
import cricketHero from "@/assets/cricket-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cricketHero})` }}
      >
        <div className="absolute inset-0 bg-cricket-dark/70"></div>
      </div>
      
      {/* Floating Cricket Ball Animation */}
      <div className="absolute top-20 right-20 w-16 h-16 cricket-ball-bounce">
        <div className="w-full h-full bg-cricket-ball rounded-full shadow-glow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cricket
            <span className="text-cricket-gold block animate-float">Predictions</span>
            <span className="text-cricket-ball">Pro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get accurate cricket match predictions powered by AI analysis of historical data, 
            player performance, and real-time insights.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          <Button variant="hero" size="lg" className="h-16 text-lg">
            <TrendingUp className="mr-2" />
            Match Predictions
          </Button>
          
          <Button variant="cricket" size="lg" className="h-16 text-lg">
            <BarChart3 className="mr-2" />
            Live Analysis
          </Button>
          
          <Button variant="gold" size="lg" className="h-16 text-lg">
            <Users className="mr-2" />
            Player Stats
          </Button>
          
          <Button variant="hero" size="lg" className="h-16 text-lg">
            <MessageCircle className="mr-2" />
            Expert Tips
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-cricket-gold mb-2">95%</div>
            <div className="text-white/80">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cricket-gold mb-2">10K+</div>
            <div className="text-white/80">Matches Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cricket-gold mb-2">50K+</div>
            <div className="text-white/80">Happy Users</div>
          </div>
        </div>
      </div>
      
      {/* Chatbot Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button variant="hero" size="icon" className="w-16 h-16 rounded-full animate-float">
          <MessageCircle size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;