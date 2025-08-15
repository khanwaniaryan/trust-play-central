import { useState } from "react";
import { Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeGames = () => {
  const [activeFilter, setActiveFilter] = useState("All games");

  const filters = ["All games", "Slots", "Live", "Poker"];

  const games = [
    {
      id: 1,
      title: "Starburst",
      provider: "NetEnt",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1551554781-c46200ea959d?w=300&h=200&fit=crop",
      popular: true
    },
    {
      id: 2,
      title: "Lightning Roulette",
      provider: "Evolution",
      category: "Live",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop",
      popular: false
    },
    {
      id: 3,
      title: "Book of Dead",
      provider: "Play'n GO",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      popular: true
    },
    {
      id: 4,
      title: "Texas Hold'em",
      provider: "PokerStars",
      category: "Poker",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop",
      popular: false
    },
    {
      id: 5,
      title: "Mega Moolah",
      provider: "Microgaming",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop",
      popular: true
    },
    {
      id: 6,
      title: "Dream Catcher",
      provider: "Evolution",
      category: "Live",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      popular: false
    },
    {
      id: 7,
      title: "Gonzo's Quest",
      provider: "NetEnt",
      category: "Slots",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop",
      popular: true
    },
    {
      id: 8,
      title: "Blackjack Live",
      provider: "Pragmatic Play",
      category: "Live",
      image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=300&h=200&fit=crop",
      popular: false
    }
  ];

  const filteredGames = activeFilter === "All games" 
    ? games 
    : games.filter(game => game.category === activeFilter);

  return (
    <section className="section-spacing bg-surface/30" id="games">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Free Games to Try
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Test your skills with our collection of free casino games. No registration required.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`
                ${activeFilter === filter 
                  ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }
              `}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="game-card group">
              <div className="relative">
                <img
                  src={game.image}
                  alt={`${game.title} - Free casino game demo`}
                  className="w-full h-40 object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-smooth flex items-center justify-center">
                  <Button 
                    className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
                    data-tracking={`freegame_try_${game.id}`}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Try Demo
                  </Button>
                </div>

                {/* Popular Badge */}
                {game.popular && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-warning text-white px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="bg-primary/80 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {game.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-text-primary mb-1 line-clamp-1">
                  {game.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {game.provider}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            Load More Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeGames;