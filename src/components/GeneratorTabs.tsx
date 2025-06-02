import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image, Globe, Figma, MessageCircle, Upload, Code, ChevronDown, ArrowRight } from "lucide-react";

const GeneratorTabs = () => {
  const [activeTab, setActiveTab] = useState("image");

  const examples = [
    {
      title: "Twitter Prototype",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fcopyweb.ai%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fr2.trys.ai%252Fcopyweb%252Fscreenshot_12bbe7fb-dbff-46e8-a6fd-6512344b8288.png%26w%3D3840%26q%3D75&w=3840&q=75"
    },
    {
      title: "AI search prototype",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fcopyweb.ai%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fr2.trys.ai%252Fcopyweb%252Fscreenshot_55d55919-65fb-424d-a32d-1eb6a72f6fac.png%26w%3D3840%26q%3D75&w=3840&q=75"
    },
    {
      title: "YouTube",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fr2.trys.ai%2Fimgs%2F3gujf5xyc-1740466245155.png&w=3840&q=75"
    },
    {
      title: "AI Search Engine",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fcopyweb.ai%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fshipany.ai%252F_next%252Fimage%253Furl%253D%25252Fimgs%25252Fshowcases%25252F7.png%2526w%253D3840%2526q%253D75%26w%3D1080%26q%3D75&w=3840&q=75"
    },
    {
      title: "AI SaaS Boilerplate",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fph-files.imgix.net%2F5578d38a-2c7c-4442-938d-cb6746c7dacc.png%3Fauto%3Dcompress%26codec%3Dmozjpeg%26cs%3Dstrip%26auto%3Dformat%26fm%3Dpjpg%26w%3D1069%26h%3D640%26fit%3Dmax%26frame%3D1%26dpr%3D25&w=3840&q=75"
    },
    {
      title: "CopyWeb",
      image: "https://copyweb.ai/_next/image?url=https%3A%2F%2Fr2.trys.ai%2Fimgs%2F1b60flnw5-1740458635721.png&w=3840&q=75"
    }
  ];

  return (
    <div id="generator" className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="max-w-full flex justify-center px-4 pb-2 overflow-x-auto custom-scrollbar">
          <TabsList className="h-10 items-center justify-center bg-muted text-muted-foreground inline-flex rounded-2xl p-1 shadow-sm">
            <TabsTrigger 
              value="image" 
              className="inline-flex items-center justify-center whitespace-nowrap py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background rounded-xl px-2 md:px-4 text-xs md:text-sm"
            >
              <Image className="h-4 w-4 mr-2" />
              Image
            </TabsTrigger>
            <TabsTrigger 
              value="web_url"
              className="inline-flex items-center justify-center whitespace-nowrap py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background rounded-xl px-2 md:px-4 text-xs md:text-sm"
            >
              <Globe className="h-4 w-4 mr-2" />
              Website
            </TabsTrigger>
            <TabsTrigger 
              value="figma"
              className="inline-flex items-center justify-center whitespace-nowrap py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background rounded-xl px-2 md:px-4 text-xs md:text-sm"
            >
              <Figma className="h-4 w-4 mr-2" />
              Figma
            </TabsTrigger>
            <TabsTrigger 
              value="prompt"
              className="inline-flex items-center justify-center whitespace-nowrap py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:bg-background rounded-xl px-2 md:px-4 text-xs md:text-sm"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Prompt
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-6">
          <TabsContent value="image" className="m-0">
            <div className="border border-primary rounded-xl overflow-hidden">
              <div className="relative min-h-36 shadow-sm">
                <div className="relative shadow-sm transition-colors text-xs min-h-36">
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 cursor-pointer">
                    <div className="p-2 bg-muted rounded-lg">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p>drag, paste or click to upload</p>
                    <p className="text-muted-foreground">supported: PNG, JPG, JPEG, WEBP, up to 2.5MB</p>
                  </div>
                  <input type="file" id="file-upload" className="hidden" accept="image/png,image/jpeg,image/jpg,image/webp" />
                </div>
              </div>
              <div className="flex items-center justify-between px-4 bg-gray-200 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-0">
                  <Code className="hidden md:block text-xs text-muted-foreground w-3.5 h-3.5" />
                  <Select defaultValue="html-css">
                    <SelectTrigger className="w-full border-none bg-transparent text-xs text-foreground ring-0 focus:ring-0 focus:ring-offset-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="html-css">HTML + CSS</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="text-muted-foreground cursor-pointer">
                    <span className="text-primary">please sign in</span>
                  </div>
                  <div className="bg-primary rounded-full p-1 cursor-pointer">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-normal text-muted-foreground mb-4 px-2">
                Try these examples for free👇
              </div>
              <div className="flex justify-center">
                <div className="w-full flex flex-wrap">
                  {examples.map((example, index) => (
                    <div key={index} className="w-full md:w-1/3 p-2">
                      <div className="bg-background rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden p-3">
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                          <img 
                            alt={example.title}
                            src={example.image}
                            className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
                          />
                        </div>
                        <p className="mt-2 text-xs text-foreground font-medium truncate">
                          {example.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="web_url" className="m-0">
            <div className="border border-primary rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Website URL to code feature coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="figma" className="m-0">
            <div className="border border-primary rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Figma integration coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="prompt" className="m-0">
            <div className="border border-primary rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Prompt to code feature coming soon...</p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default GeneratorTabs;