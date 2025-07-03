import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Users, 
  Trophy, 
  Clock, 
  Settings,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const Admin = () => {
  const [newRaffle, setNewRaffle] = useState({
    title: "",
    description: "",
    imageUrl: "",
    duration: 12, // hours
  });

  // Mock data
  const activeRaffles = [
    {
      id: "1",
      title: "iPhone 15 Pro Max",
      participants: 247,
      timeLeft: "6h 24m",
      revenue: 247,
      status: "active",
    },
    {
      id: "2",
      title: "MacBook Air M3",
      participants: 156,
      timeLeft: "2h 15m",
      revenue: 156,
      status: "active",
    },
  ];

  const recentWinners = [
    {
      id: "1",
      raffle: "AirPods Pro",
      winner: "john.doe@example.com",
      participants: 89,
      revenue: 89,
      drawnAt: "2 hours ago",
    },
    {
      id: "2",
      raffle: "iPad Air",
      winner: "sarah.smith@example.com",
      participants: 156,
      revenue: 156,
      drawnAt: "1 day ago",
    },
  ];

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      entries: 24,
      wins: 3,
      joinDate: "March 2024",
    },
    {
      id: "2",
      name: "Sarah Smith",
      email: "sarah.smith@example.com",
      entries: 18,
      wins: 2,
      joinDate: "February 2024",
    },
  ];

  const handleCreateRaffle = () => {
    console.log("Creating raffle:", newRaffle);
    // Reset form
    setNewRaffle({
      title: "",
      description: "",
      imageUrl: "",
      duration: 12,
    });
  };

  const handleDrawWinner = (raffleId: string) => {
    console.log("Drawing winner for raffle:", raffleId);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Admin Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage raffles, users, and monitor platform activity</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Create Raffle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Raffle</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newRaffle.title}
                    onChange={(e) => setNewRaffle({ ...newRaffle, title: e.target.value })}
                    placeholder="e.g., iPhone 15 Pro Max"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newRaffle.description}
                    onChange={(e) => setNewRaffle({ ...newRaffle, description: e.target.value })}
                    placeholder="Describe the prize in detail..."
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={newRaffle.imageUrl}
                    onChange={(e) => setNewRaffle({ ...newRaffle, imageUrl: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (hours)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newRaffle.duration}
                    onChange={(e) => setNewRaffle({ ...newRaffle, duration: parseInt(e.target.value) })}
                    min="1"
                    max="12"
                  />
                </div>
                
                <Button 
                  onClick={handleCreateRaffle}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                >
                  Create Raffle
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">Active Raffles</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-success" />
                <div>
                  <p className="text-2xl font-bold text-foreground">403</p>
                  <p className="text-sm text-muted-foreground">Total Participants</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">$403</p>
                  <p className="text-sm text-muted-foreground">Revenue Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Settings className="w-8 h-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold text-foreground">124</p>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="raffles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="raffles">Active Raffles</TabsTrigger>
            <TabsTrigger value="winners">Recent Winners</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="raffles" className="space-y-6">
            <div className="space-y-4">
              {activeRaffles.map((raffle) => (
                <Card key={raffle.id} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{raffle.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{raffle.participants} participants</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{raffle.timeLeft} remaining</span>
                          </div>
                          <span>Revenue: ${raffle.revenue}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-success text-success-foreground">
                          {raffle.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-gradient-primary hover:bg-gradient-primary/90"
                            onClick={() => handleDrawWinner(raffle.id)}
                          >
                            <Trophy className="w-4 h-4 mr-1" />
                            Draw Winner
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="winners" className="space-y-6">
            <div className="space-y-4">
              {recentWinners.map((winner) => (
                <Card key={winner.id} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{winner.raffle}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Winner: {winner.winner}</span>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{winner.participants} participants</span>
                          </div>
                          <span>Revenue: ${winner.revenue}</span>
                          <span>Drawn {winner.drawnAt}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-success text-success-foreground">
                          <Trophy className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user.id} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{user.email}</span>
                          <span>{user.entries} entries</span>
                          <span>{user.wins} wins</span>
                          <span>Joined {user.joinDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">
                          Win Rate: {((user.wins / user.entries) * 100).toFixed(1)}%
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="w-4 h-4 mr-1" />
                            Manage
                          </Button>
                        </div>
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

export default Admin;