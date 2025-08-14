import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Clock, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertTips = () => {
  const rules = [
    {
      category: "Basic Rules",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { question: "How many balls in an over?", answer: "There are 6 balls in an over in cricket." },
        { question: "How many players in a cricket team?", answer: "Each cricket team has 11 players on the field at any time." },
        { question: "What are the different formats?", answer: "Test Cricket (5 days), ODI (50 overs), T20 (20 overs), and T10 (10 overs)." }
      ]
    },
    {
      category: "Match Duration",
      icon: <Clock className="h-5 w-5" />,
      items: [
        { question: "How long is a Test match?", answer: "A Test match can last up to 5 days, with each day having 3 sessions of 2 hours each." },
        { question: "How long is an ODI match?", answer: "An ODI match typically lasts 7-8 hours with each team playing 50 overs." },
        { question: "How long is a T20 match?", answer: "A T20 match lasts approximately 3 hours with each team playing 20 overs." }
      ]
    },
    {
      category: "Playing Positions",
      icon: <Users className="h-5 w-5" />,
      items: [
        { question: "What is a wicket-keeper?", answer: "The wicket-keeper stands behind the stumps and is the only player allowed to wear gloves and pads." },
        { question: "What are fielding positions?", answer: "Common positions include slip, point, cover, mid-off, mid-on, square leg, fine leg, and third man." },
        { question: "What is the powerplay?", answer: "In limited-overs cricket, powerplay restricts the number of fielders outside the 30-yard circle." }
      ]
    },
    {
      category: "Scoring & Dismissals",
      icon: <Target className="h-5 w-5" />,
      items: [
        { question: "How are runs scored?", answer: "Runs are scored by hitting the ball and running between wickets, or by hitting boundaries (4 or 6 runs)." },
        { question: "What are the ways to get out?", answer: "Bowled, caught, LBW, run out, stumped, hit wicket, handled ball, obstructing field, timed out, and hit ball twice." },
        { question: "What is LBW?", answer: "Leg Before Wicket - when the ball hits the batsman's leg in line with the stumps and would have hit the stumps." }
      ]
    }
  ];

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
            <BookOpen className="text-cricket-gold" />
            Expert Tips & Rules
          </h1>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {rules.map((category, index) => (
            <Card key={index} className="border-2 border-cricket-gold/20 hover:border-cricket-gold/40 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-xl text-cricket-gold flex items-center gap-2">
                  {category.icon}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                      <AccordionTrigger className="text-left hover:text-cricket-ball transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pro Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Batting Tips</h4>
                  <p className="text-sm text-muted-foreground">Watch the ball closely, play straight, and build your innings gradually.</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Bowling Tips</h4>
                  <p className="text-sm text-muted-foreground">Focus on line and length, vary your pace, and study the batsman's weaknesses.</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Fielding Tips</h4>
                  <p className="text-sm text-muted-foreground">Stay alert, communicate with teammates, and practice catching regularly.</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Strategy Tips</h4>
                  <p className="text-sm text-muted-foreground">Analyze conditions, plan your approach, and adapt to match situations.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExpertTips;