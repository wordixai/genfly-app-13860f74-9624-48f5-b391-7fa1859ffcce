import { Badge } from "@/components/ui/badge";

const FAQSection = () => {
  const faqs = [
    {
      question: "What input formats does CopyWeb support?",
      answer: "CopyWeb supports multiple input formats: Figma designs through direct integration, website URLs for cloning, and image screenshots of any design. All formats are processed with high accuracy."
    },
    {
      question: "How does the code generation work?",
      answer: "Our AI analyzes your input (Figma, URL, or screenshot) to identify UI components, layout structure, and styling. It then generates clean, well-organized code in your chosen framework while maintaining design fidelity."
    },
    {
      question: "What frameworks are supported?",
      answer: "We support popular frameworks including React, Vue.js, and plain HTML/CSS. Pro users get additional framework options including Next.js and Nuxt.js."
    },
    {
      question: "Can I customize the generated code?",
      answer: "Yes! All generated code is fully customizable through our online editor. You can modify components, styles, and functionality before exporting."
    },
    {
      question: "Is the generated code production-ready?",
      answer: "Yes, our AI generates clean, optimized, and well-structured code that follows best practices. The code includes responsive design, semantic HTML, and optimized assets ready for production deployment."
    },
    {
      question: "What about API integrations and backend functionality?",
      answer: "Currently, CopyWeb focuses on frontend code generation. Future versions will include support for API integrations and backend functionality. For now, you can easily extend the generated frontend code with your own backend services."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container">
        <div className="text-center">
          <Badge className="border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs font-medium">
            FAQ
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-6 font-medium text-muted-foreground">
            Have more questions? Contact us with email: support@copyweb.ai
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-primary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <p className="text-md text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;