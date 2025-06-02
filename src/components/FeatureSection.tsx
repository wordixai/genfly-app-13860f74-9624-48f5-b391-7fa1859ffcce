import { Monitor, Link, Figma, Sparkles, Code, Smartphone } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Screenshot to Code",
      description: "Upload any design screenshot and get pixel-perfect code."
    },
    {
      icon: Link,
      title: "URL to Code",
      description: "Clone any website by simply pasting its URL."
    },
    {
      icon: Figma,
      title: "Figma to Code",
      description: "Direct integration with Figma - convert your designs with one click."
    },
    {
      icon: Sparkles,
      title: "Smart Component Detection",
      description: "AI automatically identifies and maps UI components."
    },
    {
      icon: Code,
      title: "Framework Choice",
      description: "Export to React, Vue, or clean HTML/CSS code."
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description: "All generated code is mobile-friendly and responsive."
    }
  ];

  return (
    <section id="feature" className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-2">
          <h2 className="mb-2 text-pretty text-3xl font-bold lg:text-4xl">
            CopyWeb's Design-to-Code Solutions
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
            Everything you need to convert designs into production-ready code efficiently.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full border border-primary">
                <feature.icon className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;