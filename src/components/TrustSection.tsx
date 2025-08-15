import { Shield, Users, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "License Verification",
      description: "We verify each casino's gaming license and regulatory compliance"
    },
    {
      icon: Clock,
      title: "Payout Testing",
      description: "Real money tests to ensure fast and fair withdrawal processes"
    },
    {
      icon: Users,
      title: "Support Response",
      description: "24/7 customer service evaluation and response time testing"
    },
    {
      icon: CheckCircle,
      title: "Game Fairness",
      description: "RNG testing and third-party audits for certified fair gaming"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Trust Points */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Trust Our Reviews?
              </h2>
              <p className="text-xl text-text-secondary">
                Our expert team uses a rigorous 25-point evaluation system to test every casino before we recommend it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-text-secondary">{point.description}</p>
                </div>
              ))}
            </div>

            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              How We Review Casinos
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Right: Team & Stats */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-moderate">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
                <p className="text-text-secondary">
                  Human-tested, scores explained by casino industry veterans
                </p>
              </div>

              {/* Team Avatars */}
              <div className="flex justify-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-full border-2 border-card flex items-center justify-center text-primary-foreground font-semibold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-text-secondary">Casinos Tested</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-text-secondary">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2M+</div>
                  <div className="text-sm text-text-secondary">Monthly Readers</div>
                </div>
              </div>

              {/* Editorial Promise */}
              <div className="bg-surface rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-text-primary">
                  "We never recommend a casino we wouldn't play at ourselves"
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  — Editorial Promise since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;