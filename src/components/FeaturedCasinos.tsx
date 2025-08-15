import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedCasinos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const casinos = [
    {
      id: 1,
      name: "BetRivers Casino",
      bonus: "₹10,000 Welcome Bonus",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=200&fit=crop",
      features: ["Crypto accepted", "Fast payouts", "24/7 Support"],
      license: "Malta Gaming Authority"
    },
    {
      id: 2,
      name: "Royal Panda",
      bonus: "100% Match + 50 Free Spins",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=200&fit=crop",
      features: ["Live dealer games", "Mobile optimized", "Quick withdrawals"],
      license: "UK Gambling Commission"
    },
    {
      id: 3,
      name: "LeoVegas",
      bonus: "₹8,000 + 200 Free Spins",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      features: ["Award winning", "VIP program", "Instant play"],
      license: "Sweden Gaming Authority"
    },
    {
      id: 4,
      name: "Casumo Casino",
      bonus: "Welcome Package ₹15,000",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
      features: ["Gamification", "Regular promotions", "Mobile first"],
      license: "Malta Gaming Authority"
    },
    {
      id: 5,
      name: "PlayOJO",
      bonus: "No Wagering Requirements",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      features: ["Fair spins", "No hidden terms", "Transparent"],
      license: "UK Gambling Commission"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, casinos.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, casinos.length - 2)) % Math.max(1, casinos.length - 2));
  };

  return (
    <section className="section-spacing" id="casinos">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Casino Offers
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Hand-picked casinos with the best bonuses, verified payouts, and trusted licenses.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden lg:block overflow-hidden">
            <div 
              className="flex transition-transform duration-smooth"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {casinos.map((casino, index) => (
                <div key={casino.id} className="w-1/3 flex-shrink-0 px-3">
                  <div className="casino-card group">
                    <div className="relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={casino.image}
                        alt={`${casino.name} casino platform`}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <span className="trust-badge text-xs">
                          {casino.license}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{casino.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < Math.floor(casino.rating) 
                                    ? 'fill-warning text-warning' 
                                    : 'fill-gray-200 text-gray-200'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="font-semibold">{casino.rating}</span>
                        </div>
                      </div>

                      <div className="bg-surface rounded-lg p-4">
                        <div className="text-lg font-bold text-primary mb-2">
                          {casino.bonus}
                        </div>
                        <ul className="space-y-1">
                          {casino.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-success rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                          data-tracking={`featured_card_playnow_${casino.id}`}
                        >
                          Play Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Read Review
                        </Button>
                      </div>

                      <p className="text-xs text-text-muted">
                        Affiliate disclosure: We may earn commission from casino partners.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden grid gap-6">
            {casinos.slice(0, 3).map((casino) => (
              <div key={casino.id} className="casino-card">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={casino.image}
                    alt={`${casino.name} casino platform`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="trust-badge text-xs">
                      {casino.license}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{casino.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(casino.rating) 
                                ? 'fill-warning text-warning' 
                                : 'fill-gray-200 text-gray-200'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{casino.rating}</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-lg p-4">
                    <div className="text-lg font-bold text-primary mb-2">
                      {casino.bonus}
                    </div>
                    <ul className="space-y-1">
                      {casino.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                      data-tracking={`featured_card_playnow_${casino.id}`}
                    >
                      Play Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Review
                    </Button>
                  </div>

                  <p className="text-xs text-text-muted">
                    Affiliate disclosure: We may earn commission from casino partners.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-card border border-border rounded-full p-3 shadow-moderate hover:shadow-prominent transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-card border border-border rounded-full p-3 shadow-moderate hover:shadow-prominent transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-text-primary" />
          </button>
        </div>

        {/* Indicators */}
        <div className="hidden lg:flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.max(1, casinos.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCasinos;