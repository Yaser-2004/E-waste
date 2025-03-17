import React, { useState } from 'react';

const Help = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const faqItems = [
    {
      id: 1,
      question: "What types of e-waste do you accept?",
      answer: "We accept computers, laptops, monitors, smartphones, tablets, printers, televisions, and small household appliances."
    },
    {
      id: 2,
      question: "Is there a fee for recycling my electronics?",
      answer: "Most items are accepted free of charge. CRT monitors and TVs may incur a small processing fee."
    },
    {
      id: 3,
      question: "How is my data protected?",
      answer: "All data-containing devices undergo a certified data destruction process that meets industry standards."
    },
    {
      id: 4,
      question: "Do you offer pickup services?",
      answer: "Yes, we offer scheduled pickup services for both residential and commercial clients."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-600 mb-2">Help Center</h1>
          <p className="text-lg text-gray-600">Find answers for all your e-waste recycling questions</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="text-green-600">
                    {expandedFaq === item.id ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === item.id && (
                  <div className="p-4 pt-0 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-lg h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg">
                  Submit
                </button>
              </form>
            </div>
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">📞</span>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">✉️</span>
                    <span>support@ecocycle.com</span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="mr-3">🕙</span>
                    <span>Mon-Fri: 8am-6pm, Sat: 10am-4pm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;