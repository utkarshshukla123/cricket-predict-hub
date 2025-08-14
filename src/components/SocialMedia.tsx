import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, MessageCircle, Share2 } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      followers: "25K"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "bg-blue-600",
      followers: "40K"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "bg-sky-500",
      followers: "35K"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "bg-red-600",
      followers: "15K"
    }
  ];

  return (
    <section className="py-20 bg-cricket-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Stay updated with the latest cricket predictions, insights, and breaking news. 
            Join our growing community of cricket enthusiasts!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="hero" className="animate-glow">
              <MessageCircle className="mr-2" />
              Join Community
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cricket-dark">
              <Share2 className="mr-2" />
              Share with Friends
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <div key={index} className="text-center animate-float hover-lift">
              <div className={`w-20 h-20 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                <social.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{social.name}</h3>
              <p className="text-cricket-gold font-semibold mb-4">{social.followers} Followers</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-white text-white hover:bg-white hover:text-cricket-dark transition-all duration-300"
              >
                Follow Us
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Get Instant Updates</h3>
            <p className="text-white/80 mb-6">
              Subscribe to our notifications for real-time match predictions and breaking cricket news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Enable Notifications
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cricket-dark">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;