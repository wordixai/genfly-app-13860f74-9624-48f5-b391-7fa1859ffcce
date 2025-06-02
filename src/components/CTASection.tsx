import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-16">
      <div className="px-8">
        <div className="flex items-center justify-center rounded-2xl bg-[url('/imgs/masks/circle.svg')] bg-cover bg-center px-8 py-12 text-center md:p-16">
          <div className="mx-auto max-w-screen-md">
            <h2 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Try CopyWeb Now
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Start converting designs to code in seconds. Shipping faster with CopyWeb.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="flex items-center justify-center gap-1">
                <a href="#generator" className="flex items-center justify-center gap-1">
                  Let's Start
                  <Rocket className="size-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;