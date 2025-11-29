import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Send } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('bekalutemesgen74@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bekalu_Temesgen_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-ember/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm uppercase tracking-[0.4em] text-neon mb-2">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 mb-4">
            Let's work together
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mt-4 text-lg leading-relaxed">
            I'm open to new opportunities, collaborations, and interesting projects. Whether you're a recruiter, a fellow developer, or someone with a project idea—feel free to reach out. I typically respond within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Based in</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white mt-2">Bahir Dar, Ethiopia</p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Availability</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white mt-2">Open for remote</p>
              </div>
            </div>

            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-slate-700 dark:text-slate-200">bekalutemesgen74@gmail.com</span>
              <span className="inline-flex items-center gap-2 text-sm text-neon font-medium">
                <Copy size={16} /> {copied ? 'Copied!' : 'Copy'}
              </span>
            </motion.button>
            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-slate-700 dark:text-slate-200">Bekalu Temesgen — Resume</span>
              <span className="inline-flex items-center gap-2 text-sm text-neon font-medium">
                <Download size={16} /> Download
              </span>
            </motion.button>
          </div>
        </motion.div>

        <motion.form
          className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-white/5 backdrop-blur-2xl shadow-lg dark:shadow-glass-dark p-8 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-2 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-neon/60 focus:border-neon/60 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-neon/60 focus:border-neon/60 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project or opportunity..."
              className="w-full mt-2 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-neon/60 focus:border-neon/60 outline-none transition-all resize-none"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-neon text-ink font-semibold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send size={18} /> Send message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

