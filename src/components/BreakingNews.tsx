import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

const BreakingNews = () => {
  const newsItems = [
    "India vs Australia: Kohli scores brilliant century in Adelaide Test",
    "IPL 2024 Auction: Record-breaking bid for young spinner",
    "World Cup Qualifiers: Pakistan secures semi-final spot",
    "Champions Trophy: England announces squad for upcoming tournament",
    "T20 World Cup: New venue announced for final match"
  ];

  return (
    <section className="bg-gradient-news py-4 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4">
          <Button variant="news" size="sm" className="flex-shrink-0">
            <Clock className="mr-2" size={16} />
            BREAKING
          </Button>
          
          <div className="flex-1 overflow-hidden">
            <div className="news-ticker whitespace-nowrap">
              {newsItems.map((item, index) => (
                <span key={index} className="text-white mr-16 text-lg">
                  • {item}
                </span>
              ))}
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 flex-shrink-0">
            <ExternalLink size={16} className="mr-2" />
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;