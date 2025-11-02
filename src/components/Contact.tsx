import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-32 px-6 bg-[#d4c5a9] bg-opacity-30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="stamp-heading text-sm mb-8">
              Get in Touch
            </h2>
            <div className="space-y-4 text-sm stamp-text">
              <p>hello@yourroastery.in</p>
              <p>+91 00000 00000</p>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Name" 
                  className="border-0 border-b border-[#3d2817] border-opacity-30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#3d2817] focus-visible:border-opacity-70 transition-colors bg-transparent stamp-text"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="border-0 border-b border-[#3d2817] border-opacity-30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#3d2817] focus-visible:border-opacity-70 transition-colors bg-transparent stamp-text"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your coffee preferences..."
                  rows={4}
                  className="border-0 border-b border-[#3d2817] border-opacity-30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#3d2817] focus-visible:border-opacity-70 transition-colors resize-none bg-transparent stamp-text"
                />
              </div>
              <Button 
                className="bg-[#3d2817] hover:bg-[#3d2817] hover:opacity-80 text-[#ece2ca] px-12 rounded-none stamp-accent transition-opacity"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
        
        <footer className="mt-32 pt-12 border-t border-[#3d2817] border-opacity-20 text-center text-sm stamp-text opacity-60">
          © 2025 — Crafted with care, one batch at a time
        </footer>
      </div>
    </section>
  );
}
