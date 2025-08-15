import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedCasinos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const casinos = [
    {
      id: 1,
      name: "Royal Spin Casino",
      bonus: "Up to ₹10,000 + 100 Spins",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=200&fit=crop",
      features: ["Crypto Accepted", "Fast Payouts", "Live Support"],
      license: "Curacao",
      editorNote: "Fast payouts & strong local UPI support — editor-tested",
      tag: "Editor's Choice",
      payoutSpeed: "24 hours",
      wagering: "35x",
      minDeposit: "₹500"
    },
    {
      id: 2,
      name: "Lucky Strike",
      bonus: "₹5,000 Welcome Package",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=200&fit=crop",
      features: ["UPI Instant", "1000+ Games", "24/7 Chat"],
      license: "MGA",
      editorNote: "Best for beginners with low minimum deposit",
      tag: "Best for Beginners",
      payoutSpeed: "12 hours",
      wagering: "40x",
      minDeposit: "₹300"
    },
    {
      id: 3,
      name: "Golden Tiger Casino",
      bonus: "₹15,000 Mega Bonus",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      features: ["India Focused", "Rupee Gaming", "VIP Program"],
      license: "UKGC",
      editorNote: "Highest bonus value with fair wagering terms",
      tag: "Highest Bonus",
      payoutSpeed: "48 hours",
      wagering: "30x",
      minDeposit: "₹1000"
    },
    {
      id: 4,
      name: "Diamond Palace",
      bonus: "₹8,000 + 50 Spins",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
      features: ["Mobile First", "Quick Withdraw", "Local Support"],
      license: "Curacao",
      editorNote: "Mobile-optimized with quick withdrawal process",
      tag: "Mobile Friendly",
      payoutSpeed: "6 hours",
      wagering: "25x",
      minDeposit: "₹400"
    },
    {
      id: 5,
      name: "Emerald Casino",
      bonus: "₹12,000 + 200 Spins",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      features: ["Crypto Payments", "Live Dealers", "VIP Rewards"],
      license: "Malta",
      editorNote: "Premium gaming experience with live dealers",
      tag: "Live Casino",
      payoutSpeed: "24 hours",
      wagering: "35x",
      minDeposit: "₹750"
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
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-4">
            Hand-picked casinos with the best bonuses, verified payouts, and trusted licenses.
          </p>
          <p className="text-sm text-text-muted">
            Editor's pick this week — tested payout & support August 2025
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
                  <div className="casino-card group relative overflow-hidden">
                    {/* Tag Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {casino.tag}
                      </span>
                    </div>
                    
                    <div className="relative mb-4 rounded-xl overflow-hidden">
                      <img
                        src={casino.image}
                        alt={`${casino.name} casino platform`}
                        className="w-full h-40 object-cover transition-transform duration-smooth group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-text-primary px-2 py-1 rounded text-xs font-medium">
                          {casino.license} Licensed
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${
                                i < Math.floor(casino.rating) 
                                  ? 'fill-warning text-warning' 
                                  : 'fill-white/40 text-white/40'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{casino.name}</h3>
                        <p className="text-sm text-text-muted mb-3">{casino.editorNote}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">Rating: <span className="font-semibold text-primary">{casino.rating}/5</span></span>
                          <span className="text-text-secondary">Payout: <span className="font-semibold text-success">{casino.payoutSpeed}</span></span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-surface to-surface/50 rounded-xl p-4 border border-border/50">
                        <div className="text-lg font-bold text-primary mb-3">
                          {casino.bonus}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-text-muted mb-3">
                          <div>Wagering: <span className="font-semibold">{casino.wagering}</span></div>
                          <div>Min Deposit: <span className="font-semibold">{casino.minDeposit}</span></div>
                        </div>
                        <ul className="space-y-1">
                          {casino.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 btn-hero-primary text-sm"
                          data-tracking={`featured_card_playnow_${casino.id}`}
                        >
                          Play Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-sm"
                          data-tracking={`featured_card_read_${casino.id}`}
                        >
                          Review
                        </Button>
                      </div>

                      <div className="text-xs text-text-muted space-y-1">
                        <p>Terms: Wagering {casino.wagering}, Min deposit {casino.minDeposit}, Valid: 30 days</p>
                        <p>Affiliate disclosure: We may earn commission from casino partners.</p>
                      </div>
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