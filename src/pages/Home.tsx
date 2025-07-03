import HeroSection from "@/components/HeroSection";
import RaffleCard from "@/components/RaffleCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Users, Star } from "lucide-react";

const Home = () => {
  // Mock data for raffles
  const activeRaffles = [
    {
      id: "1",
      title: "iPhone 15 Pro Max",
      description: "Latest iPhone with 256GB storage, Titanium finish, and Pro camera system",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      participants: 247,
      timeLeft: 8 * 60 * 60 * 1000, // 8 hours
      entryPrice: 1,
      currency: "USD",
      isEntered: false,
    },
    {
      id: "2", 
      title: "MacBook Air M3",
      description: "13-inch MacBook Air with M3 chip, 16GB RAM, 512GB SSD - Perfect for work and creativity",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      participants: 156,
      timeLeft: 4 * 60 * 60 * 1000, // 4 hours
      entryPrice: 1,
      currency: "USD",
      isEntered: true,
    },
    {
      id: "3",
      title: "Gaming Setup Bundle",
      description: "Complete gaming setup with high-end PC, 4K monitor, mechanical keyboard, and gaming mouse",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      participants: 89,
      timeLeft: 11 * 60 * 60 * 1000, // 11 hours
      entryPrice: 1,
      currency: "USD",
      isEntered: false,
    },
  ];

  const recentWinners = [
    { name: "S*** M***", prize: "AirPods Pro", time: "2 hours ago" },
    { name: "J*** D***", prize: "iPad Air", time: "6 hours ago" },
    { name: "M*** K***", prize: "Apple Watch", time: "1 day ago" },
  ];

  const handleEnterRaffle = (raffleId: string) => {
    console.log("Entering raffle:", raffleId);
    // Payment modal would open here
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Active Raffles Section */}
      <section id="raffles" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🎯 Active Raffles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter any raffle for just 1 unit. New winners selected every 12 hours!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {activeRaffles.map((raffle) => (
              <RaffleCard
                key={raffle.id}
                {...raffle}
                onEnter={handleEnterRaffle}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Raffles
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ⚡ How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, fair, and exciting - here's how to win amazing prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-primary-foreground font-bold">1</span>
                </div>
                <CardTitle className="text-xl">Browse Raffles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from exciting prizes added daily
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-primary-foreground font-bold">2</span>
                </div>
                <CardTitle className="text-xl">Pay 1 Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enter any raffle for just 1 unit of your local currency
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Wait for Draw</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each raffle runs for maximum 12 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Win Amazing Prizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Random winner selected and notified by email
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Winners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🏆 Recent Winners
            </h2>
            <p className="text-lg text-muted-foreground">
              Congratulations to our latest lucky winners!
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {recentWinners.map((winner, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{winner.name}</p>
                      <p className="text-sm text-muted-foreground">won {winner.prize}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{winner.time}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Win Your Next Prize?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of players entering raffles daily. Your next win could be just 1 unit away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Enter Your First Raffle
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Sign Up with Google
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;