import { motion } from 'framer-motion';

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed font-light">
            <p className="text-xl mb-8 text-slate-400">Last updated: April 19, 2026</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing or using our services at Mirage Consultancy, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. These terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property</h2>
            <p className="mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Mirage Consultancy and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Mirage Consultancy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Client Obligations</h2>
            <p className="mb-6">
              When working with Mirage Consultancy, clients agree to provide necessary access to systems, personnel, and information required to deliver our services. Delays in providing such resources may impact delivery timelines and are not the responsibility of Mirage Consultancy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall Mirage Consultancy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed and construed in accordance with the laws of Ireland, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes</h2>
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
