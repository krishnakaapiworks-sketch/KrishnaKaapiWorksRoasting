export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white border-b border-[#ece2ca]">
      <div className="max-w-3xl text-center">
        <div className="mb-12">
          <div className="stamp-heading text-sm mb-8">
            Small Batch Coffee
          </div>
          <h1 className="mb-8 stamp-text">
            Roasted Fresh,
            <br />
            Just for You
          </h1>
        </div>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed stamp-text opacity-70">
          Premium beans from Indian plantations, roasted at home on our stove top.
          <br />
          Every batch custom-crafted when you order.
        </p>
      </div>
    </section>
  );
}
