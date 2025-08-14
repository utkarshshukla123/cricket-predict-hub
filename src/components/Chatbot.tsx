import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, X } from "lucide-react";

interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m your Cricket AI assistant. Ask me anything about cricket rules, players, or predictions!',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const cricketKnowledge = {
    "balls in over": "There are 6 balls in an over in cricket.",
    "players in team": "Each cricket team has 11 players on the field.",
    "cricket formats": "Main formats are Test (5 days), ODI (50 overs), T20 (20 overs), and T10 (10 overs).",
    "lbw": "LBW stands for Leg Before Wicket - when the ball hits the batsman's leg in line with the stumps.",
    "powerplay": "Powerplay restricts fielders outside the 30-yard circle in limited-overs cricket.",
    "ways to get out": "Ways to get out: bowled, caught, LBW, run out, stumped, hit wicket, and others.",
    "test match duration": "A Test match can last up to 5 days with 3 sessions per day.",
    "odi duration": "An ODI match typically lasts 7-8 hours with 50 overs per team.",
    "t20 duration": "A T20 match lasts about 3 hours with 20 overs per team.",
    "wicket keeper": "The wicket-keeper stands behind stumps and can wear gloves and pads.",
    "boundary runs": "A boundary gives 4 runs if the ball touches the ground before crossing, 6 if it crosses without touching.",
    "cricket pitch": "A cricket pitch is 22 yards (20.12 meters) long between the wickets."
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    // Simple keyword matching for cricket knowledge
    let botResponse = "I'm sorry, I don't have information about that specific topic. Try asking about cricket rules, formats, or basic gameplay!";
    
    const query = inputMessage.toLowerCase();
    for (const [key, value] of Object.entries(cricketKnowledge)) {
      if (query.includes(key)) {
        botResponse = value;
        break;
      }
    }

    const botMessage: ChatMessage = {
      id: messages.length + 2,
      type: 'bot',
      message: botResponse,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-8 z-50 w-96 max-w-[90vw] animate-scale-in">
      <Card className="border-2 border-cricket-gold/30 shadow-2xl bg-background/95 backdrop-blur">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-cricket-gold flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Cricket AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="hover-scale">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Messages */}
          <div className="h-64 overflow-y-auto space-y-3 bg-card/30 p-3 rounded-lg">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    msg.type === 'user' 
                      ? 'bg-cricket-gold text-cricket-dark' 
                      : 'bg-cricket-ball text-white'
                  }`}>
                    {msg.type === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                  </div>
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-cricket-gold text-cricket-dark'
                      : 'bg-cricket-field/20 text-foreground border border-cricket-field/30'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about cricket rules..."
              className="border-cricket-field/30 focus:border-cricket-gold"
            />
            <Button onClick={handleSendMessage} variant="cricket" size="icon" className="hover-scale">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Questions */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setInputMessage("How many balls in an over?")}
              className="text-xs hover-scale"
            >
              Balls in over?
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setInputMessage("What is LBW?")}
              className="text-xs hover-scale"
            >
              What is LBW?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;