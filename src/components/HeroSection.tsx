import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToRaffles = () => {
    document.getElementById('raffles')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-glow rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Insert One to{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Continue
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Enter exciting raffles for just 1 unit of your local currency. 
            New raffles every 12 hours. Will you be the next winner?
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={scrollToRaffles}
              >
                View Live Raffles
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                How It Works
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-white">
              <div className="space-y-2">
                <div className="text-3xl font-bold">1</div>
                <div className="text-sm">Local Currency</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm">Hours Max</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">∞</div>
                <div className="text-sm">Exciting Prizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-white/10"
          onClick={scrollToRaffles}
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;