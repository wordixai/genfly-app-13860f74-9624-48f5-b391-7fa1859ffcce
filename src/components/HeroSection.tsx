const HeroSection = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="text-center">
          <h1 className="mx-auto mb-3 mt-4 max-w-6xl text-balance text-4xl font-bold lg:mb-7 lg:text-5xl">
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Web Design to Code in Seconds
            </span>
          </h1>
          <p className="mx-auto max-w-5xl text-muted-foreground lg:text-xl">
            Convert screenshots, website URL into code components instantly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;