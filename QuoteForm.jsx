import React, { useState } from 'react';

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your form submission logic (e.g., fetch to your backend)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-lg bg-gray-900/40 backdrop-blur-lg border border-purple-500/30 p-8 rounded-2xl shadow-[0_0_20px_rgba(123,44,191,0.2)]">
        {submitted ? (
          <div className="text-center py-10 animate-fade-in">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              Message Received
            </h2>
            <p className="text-gray-300">We'll review your project brief and get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-pink-500/50 pb-2">Request a Quote</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black/50 border border-purple-500/50 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />

            <input
              type="text"
              placeholder="Business Name"
              className="w-full bg-black/50 border border-purple-500/50 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />

            <select className="w-full bg-black/50 border border-purple-500/50 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all">
              <option>Web Development</option>
              <option>Custom System</option>
              <option>Mobile App</option>
            </select>

            <textarea
              placeholder="Project Brief"
              rows="4"
              className="w-full bg-black/50 border border-purple-500/50 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_15px_rgba(255,0,84,0.4)] hover:shadow-[0_0_25px_rgba(255,0,84,0.6)] transition-all transform hover:scale-[1.02]"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
