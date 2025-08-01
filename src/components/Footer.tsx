// app/components/Footer.tsx
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-lg font-semibold">Let’s Connect</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:cephasblog@gmail.com" className="hover:text-white">
            <Mail className="inline w-5 h-5 mr-1" /> Email
          </a>
          <a href="tel:+447780160385" className="hover:text-white">
            <Phone className="inline w-5 h-5 mr-1" /> Call
          </a>
          <a
            href="https://github.com/cephaz6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github className="inline w-5 h-5 mr-1" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cephaz6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin className="inline w-5 h-5 mr-1" /> LinkedIn
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Cephas Oselumese. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
