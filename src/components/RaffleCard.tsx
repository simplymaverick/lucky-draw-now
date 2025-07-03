import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface RaffleCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  participants: number;
  timeLeft: number; // in milliseconds
  entryPrice: number;
  currency: string;
  isEntered?: boolean;
  onEnter?: (raffleId: string) => void;
}

const RaffleCard = ({
  id,
  title,
  description,
  imageUrl,
  participants,
  timeLeft: initialTimeLeft,
  entryPrice,
  currency,
  isEntered = false,
  onEnter,
}: RaffleCardProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const isExpired = timeLeft <= 0;

  return (
    <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in group">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            {isEntered && (
              <Badge className="bg-success text-success-foreground">
                You're In!
              </Badge>
            )}
            {isExpired && (
              <Badge variant="destructive">
                Ended
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{participants} entered</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span className={timeLeft < 3600000 ? "text-warning" : ""}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                {entryPrice} {currency}
              </span>
              <p className="text-sm text-muted-foreground">to enter</p>
            </div>
            
            <Button
              onClick={() => onEnter?.(id)}
              disabled={isExpired || isEntered}
              className={
                isEntered
                  ? "bg-success hover:bg-success/90"
                  : "bg-gradient-primary hover:bg-gradient-primary/90 animate-pulse-glow"
              }
            >
              {isExpired 
                ? "Ended" 
                : isEntered 
                ? "Entered" 
                : "Enter Raffle"
              }
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RaffleCard;