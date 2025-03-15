const RewardCard = ({ tier, points, benefits, highlight, bgColor, borderColor }) => {
    return (
      <div className={`bg-neutral-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${highlight ? `border-2 ${borderColor} transform md:-translate-y-4` : ''}`}>
        <div className={`${bgColor} py-4 text-center ${highlight ? 'text-white' : ''}`}>
          {highlight && <div className="inline-block bg-white text-green-500 text-xs font-bold py-1 px-3 rounded-full mb-2">MOST POPULAR</div>}
          <h3 className="text-xl font-bold">{tier}</h3>
          <p className={`"text-sm {highlight ? 'text-green-100' : 'text-gray-600'}`}>{points}</p>
        </div>
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${borderColor} ${highlight ? 'bg-gray-300' : 'bg-yellow-700 opacity-60'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const RewardsSection = () => {
    const tiers = [
      {
        tier: 'Bronze Tier',
        points: '0 - 500 Points',
        benefits: [
          '5% discount on eco-friendly products',
          'Access to basic recycling guides',
          'Monthly newsletter subscription',
        ],
        highlight: false,
        bgColor: 'bg-neutral-200',
        borderColor: 'border-yellow-600',
      },
      {
        tier: 'Silver Tier',
        points: '501 - 1500 Points',
        benefits: [
          '15% discount on eco-friendly products',
          'Priority drop-off service',
          'Quarterly exclusive eco-products',
          'Access to partner discounts',
        ],
        highlight: true,
        bgColor: 'bg-green-500',
        borderColor: 'border-green-500',
      },
      {
        tier: 'Gold Tier',
        points: '1501+ Points',
        benefits: [
          '25% discount on eco-friendly products',
          'Exclusive recycling webinars',
          'Annual green rewards package',
        ],
        highlight: false,
        bgColor: 'bg-neutral-200',
        borderColor: 'border-yellow-500',
      },
    ];
  
    return (
      <section id="rewards" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn E-Waste into <span className="text-green-500">Eco-Points</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our rewards program lets you earn points for every recycled device, which you can redeem for discounts on eco-friendly products and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <RewardCard key={index} {...tier} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RewardsSection;
  