import { Shield, Lock, Award, AlertTriangle } from "lucide-react";

const TrustBadges = () => {
  const trustLogos = [
    {
      name: "UK Gambling Commission",
      logo: "🇬🇧",
      description: "Licensed & Regulated"
    },
    {
      name: "Malta Gaming Authority", 
      logo: "🇲🇹",
      description: "MGA Licensed"
    },
    {
      name: "eCOGRA",
      logo: "✓",
      description: "Fair Gaming Certified"
    },
    {
      name: "SSL Secured",
      logo: "🔒", 
      description: "256-bit Encryption"
    },
    {
      name: "Responsible Gambling",
      logo: "🛡️",
      description: "Player Protection"
    }
  ];

  return (
    <section className="py-12 bg-surface/50 border-y border-border">
      <div className="container-custom">
        {/* Warning Banner */}
        <div className="mb-8 bg-warning/10 border border-warning/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
            <div className="text-sm">
              <span className="font-medium text-text-primary">Important:</span>
              <span className="text-text-secondary ml-1">
                Gambling may be restricted in your region. Please check local laws before playing. 
                Must be 18+ to participate.
              </span>
              <a 
                href="#responsible-gambling" 
                className="text-primary hover:underline ml-2"
              >
                Learn about responsible gambling →
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Trusted & Regulated Partners Only
          </h3>
          <p className="text-text-secondary text-sm">
            All recommended casinos are licensed by reputable gaming authorities
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {trustLogos.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card border border-border rounded-lg p-4 mb-2 group-hover:shadow-moderate transition-shadow">
                <div className="text-2xl lg:text-3xl mb-2">{item.logo}</div>
                <div className="text-xs font-medium text-text-primary">{item.name}</div>
              </div>
              <div className="text-xs text-text-muted">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Trust Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-success" />
            <span>Licensed Operators Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-success" />
            <span>SSL Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-success" />
            <span>Audited for Fairness</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;