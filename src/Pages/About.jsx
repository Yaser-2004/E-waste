
// import React from 'react'

// const About = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-green-600 mb-4">About EcoCycle</h1>
//           <p className="text-xl text-gray-600">Pioneering sustainable e-waste management for a cleaner tomorrow</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
//             <p className="text-lg text-gray-600 mb-4">
//               At E-Cycle Solutions, we're committed to tackle the growing challenge of electronic waste through innovative recycling solutions, community education, and responsible disposal practices.
//             </p>
//             <p className="text-lg text-gray-600">
//               Our goal is to reduce the environmental impact of discarded electronics while recovering valuable materials that can be reused in manufacturing, creating a circular economy that benefits both the planet and people.
//             </p>
//           </div>
//           <div className="bg-gray-200 rounded-lg p-6 h-64 flex items-center justify-center">
//             <p className="text-gray-500 italic">Mission Image Placeholder</p>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default About


import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-green-600 mb-4">About EcoCycle</h1>
            <p className="text-xl text-gray-600">Pioneering sustainable e-waste management for a cleaner tomorrow</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At E-Cycle Solutions, we're committed to tackle the growing challenge of electronic waste through innovative recycling solutions, community education, and responsible disposal practices.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to reduce the environmental impact of discarded electronics while recovering valuable materials that can be reused in manufacturing, creating a circular economy that benefits both the planet and people.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-500 italic">Mission Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About