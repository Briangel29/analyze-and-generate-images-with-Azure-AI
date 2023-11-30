import React, { useState } from "react";
import analyzeImage from "./azure-image-analysis";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try{
      const analysisResult= await analyzeImage(imageUrl);
      setResult(analysisResult);
    } catch(error){
      console.log("Error analysing image: ", error);
    }
  }
  const displayResults = () => {
    if(!result) return null;
      return (
        <div>
          <h2>Image Analysis Result</h2>
          <img 
            width="500"
            src={result?.url ? result.url : imageUrl}
            alt="uploaded"
          ></img>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      );
    };

  // Create a simple GUI with a title, a text box to enter the URL of the image to be analyzed or the prompt of te image to generate and a button to trigger the image analysis and one to trigger image generation
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analysis and Generation</h1>
        <input type="text" placeholder="Enter URL or textual prompt" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        <button onClick={handleImageAnalysis}>Analyze Image</button>
        <button>Generate Image</button>
        {displayResults()}
      </header>
    </div>
  );
}
export default App;





