import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, Users, Calendar } from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
    joinDate: "March 2024",
    totalEntries: 24,
    totalWins: 3,
    winRate: "12.5%",
  };

  const activeEntries = [
    {
      id: "1",
      title: "iPhone 15 Pro Max",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
      timeLeft: "6h 24m",
      participants: 247,
      enteredAt: "2 hours ago",
    },
    {
      id: "2",
      title: "MacBook Air M3",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
      timeLeft: "2h 15m",
      participants: 156,
      enteredAt: "5 hours ago",
    },
  ];

  const pastEntries = [
    {
      id: "3",
      title: "AirPods Pro",
      imageUrl: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=200&fit=crop",
      result: "won",
      winner: "You",
      endedAt: "2 days ago",
      participants: 89,
    },
    {
      id: "4",
      title: "iPad Air",
      imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
      result: "lost",
      winner: "S*** M***",
      endedAt: "1 week ago",
      participants: 156,
    },
    {
      id: "5",
      title: "Apple Watch Series 9",
      imageUrl: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=300&h=200&fit=crop",
      result: "won",
      winner: "You",
      endedAt: "2 weeks ago",
      participants: 134,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <Card className="mb-8 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
                <p className="text-muted-foreground mb-4">{user.email}</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Joined {user.joinDate}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">{user.totalEntries}</div>
                    <div className="text-sm text-muted-foreground">Total Entries</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-success">{user.totalWins}</div>
                    <div className="text-sm text-muted-foreground">Wins</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent">{user.winRate}</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">{activeEntries.length}</div>
                    <div className="text-sm text-muted-foreground">Active</div>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Raffles Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active Entries ({activeEntries.length})</TabsTrigger>
            <TabsTrigger value="history">Raffle History ({pastEntries.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEntries.map((entry) => (
                <Card key={entry.id} className="hover:shadow-card transition-all duration-300 animate-scale-in">
                  <CardHeader className="p-0">
                    <img
                      src={entry.imageUrl}
                      alt={entry.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{entry.title}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Time left: {entry.timeLeft}</span>
                        </div>
                        <Badge className="bg-success text-success-foreground">Entered</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{entry.participants} participants</span>
                        </div>
                        <span className="text-muted-foreground">Entered {entry.enteredAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {activeEntries.length === 0 && (
              <Card className="p-12 text-center">
                <div className="space-y-4">
                  <Clock className="w-16 h-16 text-muted-foreground mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">No Active Entries</h3>
                  <p className="text-muted-foreground">You haven't entered any active raffles yet.</p>
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
                    Browse Raffles
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="space-y-4">
              {pastEntries.map((entry) => (
                <Card key={entry.id} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={entry.imageUrl}
                        alt={entry.title}
                        className="w-full md:w-24 h-32 md:h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{entry.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{entry.participants} participants</span>
                          </div>
                          <span>Ended {entry.endedAt}</span>
                          <span>Winner: {entry.winner}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={
                            entry.result === 'won' 
                              ? "bg-success text-success-foreground" 
                              : "bg-muted text-muted-foreground"
                          }
                        >
                          {entry.result === 'won' ? (
                            <><Trophy className="w-3 h-3 mr-1" /> Won</>
                          ) : (
                            'Lost'
                          )}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;