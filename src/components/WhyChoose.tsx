export function WhyChoose() {
  const features = [
    {
      title: "Roasters as a Service",
      description: "You explore, pick your beans, then choose your preferred roast and grind."
    },
    {
      title: "You Customize, We Deliver",
      description: "Your choices and feedback drive us; we listen and adapt to ensure every batch is your batch."
    },
    {
      title: "Total Transparency",
      description: "Watch your coffee's story unfold with a dedicated video trail — from farm to cup."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white border-b border-[#ece2ca]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
          <div>
            <h2 className="stamp-heading text-sm">
              Why Choose Us
            </h2>
          </div>
          <div>
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-[#ece2ca] pl-8">
                  <h3 className="mb-3 stamp-text">{feature.title}</h3>
                  <p className="leading-relaxed stamp-text opacity-80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
