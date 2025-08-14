import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Brain, Users, TrendingUp, Shield } from "lucide-react";
import cricketIcon from "@/assets/cricket-icon.jpg";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze historical data and current performance trends"
    },
    {
      icon: Target,
      title: "95% Accuracy Rate",
      description: "Our predictions have consistently maintained a 95% accuracy rate across all major tournaments"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Updates",
      description: "Live match analysis and instant updates on changing conditions and player performance"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security and reliable data sources ensure your information is always protected"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-6">
              <img 
                src={cricketIcon} 
                alt="Cricket Icon" 
                className="w-16 h-16 mr-4 rounded-lg shadow-card"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                About Cricket Predictions Pro
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are the leading cricket prediction platform powered by cutting-edge AI technology. 
              Our mission is to provide cricket enthusiasts with the most accurate match predictions, 
              detailed analytics, and real-time insights to enhance their cricket experience.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-cricket-gold mr-3" />
                <span className="text-lg">Winner of Sports Tech Innovation Award 2024</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-cricket-gold mr-3" />
                <span className="text-lg">Trusted by 50,000+ cricket fans worldwide</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 text-cricket-gold mr-3" />
                <span className="text-lg">Analyzed over 10,000 international matches</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="mr-4">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;