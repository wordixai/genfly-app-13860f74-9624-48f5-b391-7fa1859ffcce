import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Hobby",
      price: "$16.99",
      period: "/ month",
      description: "For hobby users",
      popular: true,
      features: [
        "200 credits monthly",
        "Screenshot to code generation",
        "URL to code generation", 
        "Figma to code generation",
        "Preview online & Export code"
      ]
    },
    {
      name: "Pro",
      price: "$28.99", 
      period: "/ month",
      description: "For professional developers",
      popular: false,
      features: [
        "400 credits monthly",
        "Screenshot to code generation",
        "URL to code generation",
        "Figma to code generation", 
        "Preview online & Export code"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 text-center">
          <h2 className="mb-4 text-4xl font-semibold lg:text-5xl">Plans and Pricing</h2>
          <p className="text-muted-foreground lg:text-lg">
            Free your imagination with CopyWeb, enjoy the fantastic design to code experience.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 mb-8 items-center rounded-md bg-muted p-1 text-sm">
            <div className="flex h-full">
              <div 
                className={`h-full rounded-md transition-all cursor-pointer text-xs md:text-sm px-2 md:px-4 flex items-center w-24 md:w-32 truncate line-clamp-1 text-center ${billingPeriod === 'yearly' ? 'bg-white' : ''}`}
                onClick={() => setBillingPeriod('yearly')}
              >
                <span className={`font-semibold mx-auto ${billingPeriod === 'yearly' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Yearly
                </span>
              </div>
              <div 
                className={`h-full rounded-md transition-all cursor-pointer text-xs md:text-sm px-2 md:px-4 flex items-center w-24 md:w-32 truncate line-clamp-1 text-center ${billingPeriod === 'monthly' ? 'bg-white' : ''}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                <span className={`font-semibold mx-auto ${billingPeriod === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
              </div>
              <div 
                className={`h-full rounded-md transition-all cursor-pointer text-xs md:text-sm px-2 md:px-4 flex items-center w-24 md:w-32 truncate line-clamp-1 text-center ${billingPeriod === 'payg' ? 'bg-white' : ''}`}
                onClick={() => setBillingPeriod('payg')}
              >
                <span className={`font-semibold mx-auto ${billingPeriod === 'payg' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Pay as you go
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:min-w-96 mt-0 grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-lg p-6 ${plan.popular ? 'border-primary border-2' : 'border-muted border'} bg-card text-card-foreground`}
              >
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <div className="flex-1"></div>
                      {plan.popular && (
                        <Badge className="border-primary bg-primary px-1.5 text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-5xl font-semibold">{plan.price}</span>
                      <span className="block font-semibold">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <p className="mb-3 mt-6 font-semibold">Includes</p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-2">
                          <Check className="mt-1 size-4 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="w-full flex items-center justify-center gap-2 font-semibold">
                      <p>Get {plan.name}</p>
                      <Zap className="size-4" />
                    </Button>
                    <p className="text-muted-foreground text-sm mt-2">cancel anytime</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;