import axios from 'axios';

async function analyzeImage(imageUrl) {
  const endpoint = "https://cvanalyze-and-generate-images-with-azure-a.cognitiveservices.azure.com/";
  const apiKey = "0e73446bdc1947e4bc9306607212d779";
  const url = endpoint + "/computervision/imageanalysis:analyze?api-version=2023-04-01-preview";
  try{
    const response = await axios.post(url, {
      url: imageUrl
    }, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json"
      },
      params: {
        features: "caption,read",
        "model-version": "latest",
        language: "en",
      }
    });
    return response.data;
  }catch(error){
    console.log(error);
  }
}
export default analyzeImage;