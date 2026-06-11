import { useState } from 'react';

const projectTypes = [
  'Website / Frontend',
  'Web App / SaaS',
  'Mobile App',
  'Backend / API',
  'System Integration',
  'Custom Automation',
  'Other',
];

export default function QuoteRequestForm() {
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    projectType: projectTypes[0],
    projectBrief: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.businessName.trim() || !form.projectBrief.trim()) {
      setError('Please fill in all required fields to request a quote.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#09030f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-[#150a20]/80 via-[#170d2a]/80 to-[#120519]/90 p-8 shadow-[0_0_80px_rgba(176,70,255,0.08)] backdrop-blur-xl sm:p-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-300 shadow-[0_0_50px_rgba(255,0,255,0.08)]">
              Request a Custom Quote
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Modern software consulting quote request for Velelo Technology
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Share your project details and we’ll connect you with a custom proposal. Our glassmorphism form provides a luxurious dark aesthetic with glowing accents.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_0_140px_rgba(255,105,255,0.08)] backdrop-blur-3xl">
            <div className="rounded-3xl bg-gradient-to-br from-[#6f1d9a]/20 via-[#250231]/10 to-[#0f0710]/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-pink-200/80">Vampire Tech</p>
              <h2 className="mt-5 text-2xl font-semibold text-white">Built for clients who want bold digital products.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Use this portal to capture the most important quote details without sacrificing style.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0d0916]/90 p-8 shadow-[0_0_120px_rgba(191,90,255,0.06)] backdrop-blur-3xl sm:p-10">
          {submitted ? (
            <div className="rounded-3xl border border-pink-500/20 bg-pink-500/10 p-8 text-center text-white shadow-[0_0_60px_rgba(232,17,207,0.14)]">
              <h2 className="text-3xl font-semibold">Quote request sent!</h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-300">
                Thank you, {form.fullName}. We have received your request and will reach out shortly with a tailored proposal for {form.projectType}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <label className="group block rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-pink-400/50">
                  <span className="mb-3 block text-sm font-medium text-slate-300">Full Name</span>
                  <input
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    placeholder="Rethabile Bridget"
                  />
                </label>
                <label className="group block rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-fuchsia-400/50">
                  <span className="mb-3 block text-sm font-medium text-slate-300">Business Name</span>
                  <input
                    name="businessName"
                    type="text"
                    value={form.businessName}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    placeholder="Velelo Technology"
                  />
                </label>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <label className="group block rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-violet-400/50">
                  <span className="mb-3 block text-sm font-medium text-slate-300">Project Type</span>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0d0916] text-white">{type}</option>
                    ))}
                  </select>
                </label>
                <div className="pointer-events-none hidden rounded-[24px] border border-white/5 bg-gradient-to-r from-pink-500/10 to-violet-500/10 p-4 lg:block">
                  <p className="text-sm uppercase tracking-[0.2em] text-pink-300/80">Why choose custom?</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Custom quotes let us size a solution around your vision, not a template.
                  </p>
                </div>
              </div>

              <label className="group block rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-pink-400/50">
                <span className="mb-3 block text-sm font-medium text-slate-300">Project Brief</span>
                <textarea
                  name="projectBrief"
                  rows="6"
                  value={form.projectBrief}
                  onChange={handleChange}
                  className="min-h-[160px] w-full resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
                  placeholder="Tell us about your scope, timeline, and must-have features..."
                />
              </label>

              {error && <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(236,72,255,0.3)] transition duration-300 hover:shadow-[0_0_60px_rgba(236,72,255,0.45)] hover:-translate-y-0.5"
              >
                Request custom quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
