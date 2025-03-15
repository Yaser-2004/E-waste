const UploadSection = () => {
    return (
      <section id="upload-section" className="py-16 bg-neutral-800 text-white">
        <div className="container mx-auto px-4 max-w-[1400px]" id="el-b0aqpxtc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="el-gjim3r90">
            <div id="el-nqxylydr">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" id="el-2064uwhh">
                Ready to Recycle Your E-Waste?
              </h2>
              <p className="text-lg mb-6" id="el-dv5qdzk0">
                Our AI-powered platform makes it easy to identify and properly recycle your electronic waste while earning rewards for your contribution to a cleaner planet.
              </p>
              <div className="bg-neutral-700 p-6 rounded-lg mb-6" id="el-veefa1nm">
                <h3 className="text-xl font-bold mb-4 flex items-center" id="el-v03lpm2l">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-2mtu875y">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" id="el-vohpiyen" />
                  </svg>
                  How to Upload
                </h3>
                <ul className="space-y-3 text-gray-300" id="el-x8om1uc0">
                  <li className="flex items-start" id="el-7xksa0hw">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-green-500" viewBox="0 0 20 20" fill="currentColor" id="el-brjclp66">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" id="el-jcxc3d20" />
                    </svg>
                    Take a clear photo of your electronic device
                  </li>
                  <li className="flex items-start" id="el-hsiadky6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-green-500" viewBox="0 0 20 20" fill="currentColor" id="el-dkkmvo9e">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" id="el-nylpmrkr" />
                    </svg>
                    Make sure the entire device is visible in the frame
                  </li>
                  <li className="flex items-start" id="el-x5oggle8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-green-500" viewBox="0 0 20 20" fill="currentColor" id="el-2ciztihv">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" id="el-buj6t8su" />
                    </svg>
                    Use good lighting to ensure accurate classification
                  </li>
                </ul>
              </div>
              <div className="bg-green-600 p-4 rounded-lg inline-block" id="el-5ukwwbba">
                <span className="font-bold flex items-center" id="el-3hmawf48">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-9pop1bqi">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" id="el-pojgesjc" />
                  </svg>
                  Your data will be securely wiped before recycling
                </span>
              </div>
            </div>
            <div id="el-grempwvx">
              <div className="bg-neutral-700 p-6 rounded-lg shadow-lg" id="el-4aihfijx">
                <h3 className="text-xl font-bold mb-6 text-center" id="el-l9yl84qn">
                  Upload Your E-Waste Image
                </h3>
                <div className="border-2 border-dashed border-neutral-500 rounded-lg p-6 mb-6 text-center" id="el-w8v2r1zp">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-neutral-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-prt7rgbx">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" id="el-a5qlfiua" />
                  </svg>
                  <p className="text-neutral-300 mb-4" id="el-hvv1g9qy">
                    Drag and drop your image here or click to browse
                  </p>
                  <input type="file" id="file-upload" className="hidden" accept="image/*" />
                  <label htmlFor="file-upload" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition duration-300 inline-block" id="el-mdfv9lz0">
                    Choose File
                  </label>
                </div>
                <div className="mb-6" id="el-09x9vscy">
                  <h4 className="font-bold mb-2" id="el-fctp2j7o">
                    Or take a photo
                  </h4>
                  <button className="bg-neutral-600 hover:bg-neutral-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 w-full flex items-center justify-center" id="el-1a7b0kfk">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-dm9zgf2w">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" id="el-o04wa90b" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" id="el-bmy3wn18" />
                    </svg>
                    Open Camera
                  </button>
                </div>
                <div className="border-t border-neutral-600 pt-6" id="el-dx93ezzn">
                  <h4 className="font-bold mb-4" id="el-7c8tgiun">Accepted devices include:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm" id="el-qnuntqa9">
                    <div className="flex items-center" id="el-n0akdfjk">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-7wq681ky">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-i32bi0tj" />
                      </svg>
                      Smartphones
                    </div>
                    <div className="flex items-center" id="el-cqlqj42j">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-c9w6dgj7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-g6ek358n" />
                      </svg>
                      Tablets
                    </div>
                    <div className="flex items-center" id="el-1758whgj">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-p5dhrp4p">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-fln7qkww" />
                      </svg>
                      Laptops
                    </div>
                    <div className="flex items-center" id="el-vykjvdo1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-emg1i4ki">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-5bu0xo7l" />
                      </svg>
                      Computers
                    </div>
                    <div className="flex items-center" id="el-j6iopjjq">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-v919l3su">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-xhwb8lh8" />
                      </svg>
                      Printers
                    </div>
                    <div className="flex items-center" id="el-9ffmg7ep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-d81k1akb">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-mu5xxjai" />
                      </svg>
                      And more...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UploadSection;
  