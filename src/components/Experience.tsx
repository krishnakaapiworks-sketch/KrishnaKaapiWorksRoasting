import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  return (
    <section className="py-32 px-6 bg-[#d4c5a9] bg-opacity-30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
          <div>
            <h2 className="stamp-heading text-sm">
              The Small-Batch Experience
            </h2>
          </div>
          <div className="space-y-6 leading-relaxed stamp-text">
            <p>
              Your order triggers our roasting — guaranteeing maximum freshness and flavor, 
              batch by batch. Each roast is custom-crafted and treated as a unique creation.
            </p>
            <p>
              Want to see the journey? Request a personal video of your order: from bean selection 
              to roasting, grinding, and packaging, all captured so you experience every step.
            </p>
          </div>
        </div>
        
        <div className="aspect-[16/9] max-w-2xl mx-auto stamp-border p-1">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587402933159-9bb954a0ff9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMG1pbmltYWx8ZW58MXx8fHwxNzYxOTQ5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Coffee beans"
            className="w-full h-full object-cover opacity-85"
          />
        </div>
      </div>
    </section>
  );
}
