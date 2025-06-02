import { Monitor, Link, Code } from "lucide-react";

const IntroduceSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Screenshot to Code",
      description: "Upload a screenshot and get clean, responsive code instantly."
    },
    {
      icon: Link,
      title: "URL to Clone", 
      description: "Enter any URL and clone the entire website structure automatically."
    },
    {
      icon: Code,
      title: "Instant Export",
      description: "Export to React, Vue, or plain HTML/CSS with one click."
    }
  ];

  return (
    <section id="introduce" className="py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <video 
            src="https://r2.trys.ai/copyweb/demo1.mp4" 
            controls 
            className="max-h-full w-full rounded-md object-cover" 
            autoPlay 
            muted 
            loop
          />
          <div className="flex flex-col lg:text-left">
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-4xl">
              What is CopyWeb
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              CopyWeb is an AI-powered web cloning tool that converts any website design into production-ready code instantly.
            </p>
            <ul className="flex flex-col justify-center gap-y-8">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <feature.icon className="mr-2 size-6 shrink-0 lg:mr-2 lg:size-6" />
                  <div>
                    <div className="mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base">
                      {feature.title}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground md:text-base">
                      {feature.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;