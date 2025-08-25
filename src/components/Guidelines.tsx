import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const Guidelines = () => {
  const financialSupport = [
    {
      item: "Exciting Prizes",
      description: "Win amazing prizes for your innovative solutions!"
    },
    {
      item: "Certificates",
      description: "Official recognition for all participants."
    },
    {
      item: "Cash Rewards",
      description: "Earn cash prizes for winning teams."
    }
  ];

  return (
    <section id="guidelines" className="py-20" style={{ backgroundColor: "#e0f7fa" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <DollarSign className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Hackathon Rewards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hackathon Rewards & Prizes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in our hackathons and grab exciting prizes, certificates, and cash rewards! Show your skills and claim your rewards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-card transition-all duration-300 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Rewards & Prizes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {financialSupport.map((support, index) => (
                <div key={index} className="p-4 bg-accent/50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {support.item}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {support.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
