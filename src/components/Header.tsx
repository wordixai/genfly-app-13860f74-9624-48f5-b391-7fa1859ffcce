import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section className="py-3">
      <div className="md:max-w-7xl mx-auto px-4">
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://copyweb.ai/logo.png" alt="CopyWeb" className="w-8" />
              <span className="text-xl font-bold">CopyWeb</span>
            </div>
            <Button size="icon" className="h-10 w-10">
              <Menu className="size-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;