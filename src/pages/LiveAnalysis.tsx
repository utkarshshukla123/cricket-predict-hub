import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Radio, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";

const LiveAnalysis = () => {
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
            <Radio className="text-cricket-ball animate-pulse" />
            Live Analysis
          </h1>
        </div>

        <div className="grid gap-6 animate-fade-in">
          <Card className="border-2 border-cricket-ball/20 hover:border-cricket-ball/40 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-cricket-ball flex items-center gap-2">
                <Play className="h-6 w-6" />
                Live Streaming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="bg-cricket-dark/10 rounded-lg p-8 mb-6">
                  <Radio className="h-24 w-24 text-cricket-ball mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">Connect to Live Streams</h3>
                  <p className="text-muted-foreground mb-6">
                    Get real-time match analysis and live scores from Hotstar and other streaming platforms
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      variant="cricket" 
                      size="lg"
                      className="hover-scale"
                      onClick={() => window.open('https://www.hotstar.com/in/sports/cricket', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Hotstar
                    </Button>
                    <Button variant="outline" size="lg" className="hover-scale">
                      <Radio className="mr-2 h-4 w-4" />
                      Live Updates
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Real-time Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Live Scores</h4>
                  <p className="text-sm text-muted-foreground">Real-time score updates and match statistics</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">AI Analysis</h4>
                  <p className="text-sm text-muted-foreground">Instant predictions based on current match state</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Player Performance</h4>
                  <p className="text-sm text-muted-foreground">Live tracking of player statistics</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-cricket-field/20">
                  <h4 className="font-semibold mb-2 text-cricket-gold">Weather Updates</h4>
                  <p className="text-sm text-muted-foreground">Match conditions and weather impact</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveAnalysis;