import { useState } from "react";
import axios from "axios";
import { Client } from '@gradio/client';

const HeroSection = () => {

  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [operation, setOperation] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !itemName || !description) return alert("Please fill all fields!");

    const formData = new FormData();
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    formData.append("userId", userId);
    formData.append("image", image);
    formData.append("itemName", itemName);
    formData.append("operation", operation);
    formData.append("description", description);

    try {
      setUploading(true);
      const res = await axios.post("https://e-waste-backend-1.onrender.com/api/e-waste/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      alert("Upload successful!", res.data);
      setImage(null);
      setItemName("");
      setOperation("");
      setDescription("");
    } catch (err) {
      alert("Upload failed.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const [preview, setPreview] = useState(false);
  const [outPutImage, setOutPutImage] = useState(null);

  const handleCkeckWaste = async (e) => {
     const file = e.target.files[0];
      if (!file) return;

      const client = await Client.connect("nikhil77595/ewaste2");
      const result = await client.predict("/predict", {
        image: file,
      });

      setOutPutImage(result.data[0].url);
      setPreview(true);
      console.log(result.data);
  }

  const handleRevert = () => {
    setPreview(false);
  }

    return (
      <section id="hero" className="bg-neutral-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Turn Your <span className="text-green-500">E-Waste</span> into Rewards
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Responsibly recycle your electronics while earning points towards discounts on new devices and eco-friendly products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Upload Button */}
                <label htmlFor="imageUpload" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {image ? "Image Selected" : "Upload E-Waste Image"}
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect} // Replace with your logic
                  />
                </label>

  
                {/* Learn More Button */}
                <label htmlFor="checkImage" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Chcek E-waste
                  <input
                    id="checkImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCkeckWaste} // Replace with your logic
                  />
                </label>


                {preview && <div className={`absolute top-0 left-1/4 text-center transform translate-x-1/2 translate-y-1/2 w-96 p-4 bg-white rounded-md shadow-lg`}>
                  <img src={outPutImage} alt="" />
                  <p className="text-black text-xl mt-3">Your E-waste will is labelled as E-waste</p>

                  <button className="text-white rounded-md bg-green-400 p-2 mt-3 hover:cursor-pointer" onClick={() => handleRevert()}>Close</button>
                </div>}
              </div>

                {image && (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-medium">Item Name</label>
                    <input
                      type="text"
                      className="w-11/12 p-2 rounded bg-neutral-700 border border-gray-600"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Operation</label>
                    <select
                      type="text"
                      className="w-11/12 p-2 rounded bg-neutral-700 border border-gray-600"
                      value={operation}
                      onChange={(e) => setOperation(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select Operation</option>
                      <option value="Recycle">Recycle</option>
                      <option value="Destroy">Destroy</option>
                      <option value="Repair">Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium">Item Description</label>
                    <textarea
                      className="w-11/12 p-2 rounded bg-neutral-700 border border-gray-600"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
                  >
                    {uploading ? "Uploading..." : "Submit Item"}
                  </button>
                </form>
              )}

            </div>
            
  
            {/* Right Content */}
            <div className="md:w-1/2">
              <div className="bg-neutral-700 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Recycle Your Electronics Today</h2>
                <p className="mb-6">
                  Take a photo or upload an image of your e-waste item for automatic classification. Our AI will identify the type and recycling potential of your electronic waste.
                </p>
  
                {/* Feature: Earn Eco-Points */}
                <div className="bg-neutral-600 p-6 rounded-lg mb-4 border-l-4 border-green-500 flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Earn Eco-Points</h3>
                    <p className="text-gray-300">Get rewarded for every item you recycle through our platform</p>
                  </div>
                </div>
  
                {/* Feature: Secure & Confidential */}
                <div className="bg-neutral-600 p-6 rounded-lg border-l-4 border-green-500 flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Secure & Confidential</h3>
                    <p className="text-gray-300">Your data is wiped securely before recycling</p>
                  </div>
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  