import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const MatchPredictions = () => {
  const previousMatches = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      date: "2024-01-15",
      result: "India won by 6 wickets",
      prediction: "India 75%",
      accuracy: "Correct"
    },
    {
      id: 2,
      team1: "England",
      team2: "Pakistan",
      date: "2024-01-12",
      result: "England won by 23 runs",
      prediction: "England 68%",
      accuracy: "Correct"
    },
    {
      id: 3,
      team1: "South Africa",
      team2: "New Zealand",
      date: "2024-01-10",
      result: "New Zealand won by 4 wickets",
      prediction: "South Africa 65%",
      accuracy: "Incorrect"
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
            <Trophy className="text-cricket-gold" />
            Match Predictions
          </h1>
        </div>

        <div className="grid gap-6 animate-fade-in">
          <Card className="border-2 border-cricket-gold/20 hover:border-cricket-gold/40 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-cricket-gold flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Previous Match Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {previousMatches.map((match) => (
                  <div key={match.id} className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 hover:shadow-glow transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-cricket-ball" />
                        <span className="text-sm text-muted-foreground">{match.date}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        match.accuracy === "Correct" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {match.accuracy}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{match.team1} vs {match.team2}</h3>
                    <p className="text-cricket-gold mb-1">Our Prediction: {match.prediction}</p>
                    <p className="text-muted-foreground">Actual Result: {match.result}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Upcoming Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Trophy className="h-16 w-16 text-cricket-gold mx-auto mb-4 animate-float" />
                <p className="text-lg text-muted-foreground">New predictions coming soon!</p>
                <Button variant="hero" className="mt-4">
                  Get Notified
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatchPredictions;