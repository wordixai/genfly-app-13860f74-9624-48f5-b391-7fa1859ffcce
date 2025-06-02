const BrandingSection = () => {
  const logos = [
    { name: "HTML", src: "https://copyweb.ai/imgs/logos/html.svg" },
    { name: "Next.js", src: "https://copyweb.ai/imgs/logos/nextjs.svg" },
    { name: "React", src: "https://copyweb.ai/imgs/logos/react.svg" },
    { name: "TailwindCSS", src: "https://copyweb.ai/imgs/logos/tailwindcss.svg" },
    { name: "Shadcn/UI", src: "https://copyweb.ai/imgs/logos/shadcn.svg" },
    { name: "Nuxt", src: "https://copyweb.ai/imgs/logos/nuxt.svg" },
    { name: "Vue", src: "https://copyweb.ai/imgs/logos/vue.svg" }
  ];

  return (
    <section id="branding" className="py-16">
      <div className="container flex flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-muted-foreground lg:text-left">
            Design to Code with Popular Frameworks
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            {logos.map((logo) => (
              <img 
                key={logo.name}
                src={logo.src} 
                alt={logo.name} 
                className="h-7 dark:invert" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;