// app/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700">
          <Image
            src="/cephas.jpg"
            alt="Cephas Oselumese"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Cephas Oselumese</h1>
        <p className="text-lg text-gray-400">
          Mid-Level Software Engineer | Full Stack & Platform Focus
        </p>
        <div className="flex gap-4 mt-4">
          <Button variant="secondary" asChild>
            <a href="/Oselumese-Cephas - 2025.pdf" download>
              Download CV
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/cephaz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/cephaz6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
