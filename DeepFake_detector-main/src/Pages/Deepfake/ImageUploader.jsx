// import  { useState, useRef } from "react";
// import "./ImageUploader.css"

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [deepFakeResult, setDeepFakeResult] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setDeepFakeResult(null);
//     }
//   };

//   const handleCheckDeepFake = () => {
   
//     // API 
//     setDeepFakeResult("Real Image");
//   };

//   return (
//     <div className="deepfake-div">
//     <div className="image-uploader">
//       <h2 className="iu-title">Deepfake Detection</h2>
//       <div className="iu-container">
//         <div className="iu-preview">
//           {selectedImage ? (
//             <img src={selectedImage} alt="Uploaded" className="iu-image" />
//           ) : (
//             <div className="iu-placeholder">No Image Uploaded</div>
//           )}
//         </div>
//         <div className="iu-controls">
//           <button className="iu-upload-btn" onClick={handleUploadClick}>
//             Upload Image
//           </button>
//           <input
//             type="file"
//             accept="image/*"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />
//           {selectedImage && (
//             <button className="iu-check-btn" onClick={handleCheckDeepFake}>
//               Check if Deepfake
//             </button>
//           )}
//           {deepFakeResult && (
//             <div className="iu-result">
//               Result: <span>{deepFakeResult}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ImageUploader;



import { useState, useRef } from "react";
import { Upload, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import "./ImageUploader.css";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [deepFakeResult, setDeepFakeResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setDeepFakeResult(null);
    }
  };

  const handleCheckDeepFake = () => {
    // API call placeholder
    setDeepFakeResult("Real Image");
  };

  return (
    <section className="feature-section image-uploader-section">
      <div className="container">
        <header className="feature-header">
          <h2 className="feature-title">Deepfake Image Detection</h2>
          <p className="feature-subtitle">
            Advanced AI-powered image analysis to detect potential manipulated or synthetic images.
            Our cutting-edge technology provides instant and reliable verification.
          </p>
        </header>

        <div className="feature-card image-uploader-card">
          <div className="feature-icon-wrapper blue">
            <ShieldCheck />
          </div>

          <div className="image-upload-container">
            <div className="iu-preview">
              {selectedImage ? (
                <img src={selectedImage} alt="Uploaded" className="iu-image" />
              ) : (
                <div className="iu-placeholder">
                  <Upload className="upload-icon" />
                  <p>Upload an Image to Analyze</p>
                </div>
              )}
            </div>

            <div className="iu-controls">
              <button 
                className="iu-upload-btn feature-link blue" 
                onClick={handleUploadClick}
              >
                Upload Image <ArrowRight className="arrow-icon" />
              </button>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              {selectedImage && (
                <button 
                  className="iu-check-btn feature-link teal" 
                  onClick={handleCheckDeepFake}
                >
                  Check Deepfake <RefreshCw className="arrow-icon" />
                </button>
              )}

              {deepFakeResult && (
                <div className="iu-result feature-extra">
                  Detection Result: 
                  <span className="result-text">{deepFakeResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
