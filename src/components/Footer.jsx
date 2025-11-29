import { Github, Linkedin, Twitter, Mail,Instagram } from 'lucide-react';
import { socials } from '../data';

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail ,instagram: Instagram};

const Footer = () => (
  <footer className="bg-ink text-slate-200 pt-16 pb-10 mt-10">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div>
        <p className="text-lg font-display">Bekalu Temesgen</p>
                <p className="uppercase tracking-[0.4em] text-sm text-neon/90 mt-2"> 🇪🇹 Ethiopian Frontend development Specialist</p> 
       

      </div>
      <div className="text-sm">
        <p className="font-semibold uppercase tracking-[0.3em] text-neon">Navigate</p>
        <div className="mt-4 flex flex-col gap-2">
          {['#hero', '#about', '#skills', '#projects','#resume', '#contact'].map(link => (
            <button
              key={link}
              onClick={() => document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-left text-slate-300 hover:text-neon transition"
            >
              {link.replace('#', '')}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold uppercase tracking-[0.3em] text-neon text-sm">Social</p>
        <div className="flex gap-3 mt-4">
          {socials.map(social => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/10 border border-white/10 hover:border-neon/60 transition"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
    <p className="text-center text-xs text-slate-500 mt-10">© 2024 Bekalu Temesgen. All rights reserved.</p>
  </footer>
);

export default Footer;

