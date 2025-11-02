import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="stamp-heading text-sm mb-8">
              Get in Touch
            </h2>
            <div className="space-y-4 text-sm stamp-text">
              <p>krishnakaapiworks@gmail.com</p>
              <p>+91 90800 89081</p>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  className="border-0 border-b border-[#ece2ca] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#735240] transition-colors bg-transparent stamp-text"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-0 border-b border-[#ece2ca] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#735240] transition-colors bg-transparent stamp-text"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your coffee preferences..."
                  rows={4}
                  className="border-0 border-b border-[#ece2ca] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#735240] transition-colors resize-none bg-transparent stamp-text"
                />
              </div>
              <Button className="bg-[#735240] hover:bg-[#735240] hover:opacity-80 text-white px-12 rounded-none stamp-accent transition-opacity">
                Send
              </Button>
            </form>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-[#ece2ca] text-center text-sm stamp-text opacity-60">
          © 2025 — Crafted with care, one batch at a time
        </footer>
      </div>
    </section>
  );
}