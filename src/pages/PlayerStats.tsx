import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Trophy, Target, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const PlayerStats = () => {
  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      country: "India",
      role: "Batsman",
      matches: 274,
      runs: 12344,
      average: 57.32,
      centuries: 46
    },
    {
      id: 2,
      name: "Babar Azam",
      country: "Pakistan", 
      role: "Batsman",
      matches: 102,
      runs: 4942,
      average: 56.83,
      centuries: 17
    },
    {
      id: 3,
      name: "Steve Smith",
      country: "Australia",
      role: "Batsman",
      matches: 138,
      runs: 8010,
      average: 62.84,
      centuries: 29
    },
    {
      id: 4,
      name: "Jasprit Bumrah",
      country: "India",
      role: "Bowler",
      matches: 104,
      wickets: 149,
      average: 22.26,
      economy: 3.71
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
            <User className="text-cricket-gold" />
            Player Statistics
          </h1>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {players.map((player) => (
            <Card key={player.id} className="border-2 border-cricket-gold/20 hover:border-cricket-gold/40 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-xl text-cricket-gold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {player.name}
                  <span className="text-sm text-muted-foreground">({player.country})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 text-center">
                    <Activity className="h-6 w-6 text-cricket-ball mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-semibold">{player.role}</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 text-center">
                    <Target className="h-6 w-6 text-cricket-ball mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Matches</p>
                    <p className="font-semibold">{player.matches}</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 text-center">
                    <Trophy className="h-6 w-6 text-cricket-ball mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {player.runs ? 'Runs' : 'Wickets'}
                    </p>
                    <p className="font-semibold">{player.runs || player.wickets}</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20 text-center">
                    <Activity className="h-6 w-6 text-cricket-ball mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Average</p>
                    <p className="font-semibold">{player.average}</p>
                  </div>
                </div>
                {player.centuries && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-cricket-gold/20 text-cricket-gold px-3 py-1 rounded-full text-sm font-semibold">
                      <Trophy className="h-4 w-4" />
                      {player.centuries} Centuries
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;