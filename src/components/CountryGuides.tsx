import { useState } from "react";
import { MapPin, ChevronDown, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CountryGuides = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showAllCountries, setShowAllCountries] = useState(false);

  const popularCountries = [
    {
      name: "India",
      flag: "🇮🇳",
      status: "Legal (regulated)",
      topCasino: "LeoVegas",
      bonus: "₹10,000 Welcome Bonus",
      description: "Online gambling regulated in several states"
    },
    {
      name: "United States",
      flag: "🇺🇸", 
      status: "State dependent",
      topCasino: "BetRivers",
      bonus: "$250 Match Bonus",
      description: "Legal in NJ, PA, MI, WV and more states"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      status: "Fully legal",
      topCasino: "Casumo",
      bonus: "£300 + 20 Free Spins",
      description: "Regulated by UK Gambling Commission"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      status: "Provincial regulation",
      topCasino: "PlayOJO",
      bonus: "C$500 No Wagering",
      description: "Legal with provincial licenses"
    }
  ];

  const allCountries = [
    ...popularCountries,
    { name: "Australia", flag: "🇦🇺", status: "Restricted", topCasino: "N/A", bonus: "N/A", description: "Online casinos prohibited" },
    { name: "Germany", flag: "🇩🇪", status: "Recently legalized", topCasino: "Royal Panda", bonus: "€100 + 10 Free Spins", description: "New interstate treaty in effect" },
    { name: "Netherlands", flag: "🇳🇱", status: "Newly legal", topCasino: "BetRivers", bonus: "€250 Welcome", description: "Licensed operators only" },
    { name: "Sweden", flag: "🇸🇪", status: "Fully legal", topCasino: "LeoVegas", bonus: "€1000 + 200 Spins", description: "Well-regulated market" },
  ];

  const filteredCountries = selectedCountry
    ? allCountries.filter(country => 
        country.name.toLowerCase().includes(selectedCountry.toLowerCase())
      )
    : (showAllCountries ? allCountries : popularCountries);

  return (
    <section className="section-spacing bg-surface/30" id="countries">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Casino Guides by Country
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Find legal online casinos and country-specific bonuses based on your location.
          </p>
        </div>

        {/* Country Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
            <Input
              placeholder="Search by country..."
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="pl-10 py-3 border-2 focus:border-primary"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {filteredCountries.map((country, index) => (
            <div key={index} className="casino-card group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{country.flag}</div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{country.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        country.status.includes('legal') || country.status.includes('Legal')
                          ? 'bg-success/10 text-success'
                          : country.status.includes('Restricted')
                          ? 'bg-error/10 text-error'
                          : 'bg-warning/10 text-warning'
                      }`}>
                        {country.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary">
                    {country.description}
                  </p>

                  {country.topCasino !== "N/A" && (
                    <div className="bg-surface rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Top Recommended:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-primary mb-1">
                        {country.topCasino}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {country.bonus}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {country.topCasino !== "N/A" ? (
                      <>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                          size="sm"
                        >
                          Claim Bonus
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          size="sm"
                        >
                          Read Guide
                        </Button>
                      </>
                    ) : (
                      <Button 
                        variant="outline"
                        className="flex-1 border-text-muted text-text-muted"
                        size="sm"
                        disabled
                      >
                        Not Available
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAllCountries && !selectedCountry && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllCountries(true)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              Show All Countries
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryGuides;