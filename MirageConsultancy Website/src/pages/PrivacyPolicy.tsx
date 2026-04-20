import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-6 w-full min-h-[85vh]">
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] rounded-full uppercase tracking-widest mb-6">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-indigo max-w-none text-slate-300 leading-relaxed font-light">
            <p className="text-xl mb-8 text-slate-400">Last updated: April 19, 2026</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Introduction</h2>
            <p className="mb-6">
              Mirage Consultancy ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-6">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Details</h2>
            <p className="mb-6">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@mirage.agency" className="text-indigo-400 hover:text-indigo-300 underline">privacy@mirage.agency</a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
