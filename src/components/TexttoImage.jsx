import React, { useState } from 'react';
import API from '../helpers/SdApi';
import { RiAiGenerate, RiDownloadCloud2Fill } from "react-icons/ri";
import Loading from '../helpers/Loading';
import Navbar from '../helpers/Navbar';

const ImageGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setLoading(true);
      const randomSuffix = Math.random().toString(36).substring(7);
      const inputWithRandomness = `${inputText} ${randomSuffix}`;
  
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API}`
          },
          body: JSON.stringify({ inputs: inputWithRandomness }),
        }
      );
        if (response.status === 500 || response.status === 503) {
          const alternativeResponse = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API}`
              },
              body: JSON.stringify({ inputs: inputWithRandomness }),
            }
          );
  
          const blob = await alternativeResponse.blob();
          const imageUrl = window.URL.createObjectURL(blob);
  
          setGeneratedImage(imageUrl);
          setLoading(false)
          setInputText('');
      } else {
        const blob = await response.blob();
        const imageUrl = window.URL.createObjectURL(blob);
  
        setGeneratedImage(imageUrl);
        setLoading(false);
        setInputText('');
      }
    } catch (error) {
      setLoading(false);
      console.error("Error generating image:", error);
    }
  };
  
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `${inputText}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-8">
  <Helmet>
    <title>Text-to-Image Generator</title>
    <meta name="description" content="The Text to Image Generator of KingLike.AI, generate images off of your given prompts." />
    <meta name="keywords" content="KingLike, KingLike.AI, kinglike, kinglike.ai, kinglike ai, kingLike, AI, image generator, image recognition, prompt-to-text, prompt-to-audio, free AI"/>
    <meta name="robots" content="index, follow"/>
    <meta name="theme-color" content="#262626" />
    <link rel="canonical" href="https://kinglike.netlify.app/" />
    <meta name="google-site-verification" content="UwG1rfrSHdB5SVkEI_WyMb4OhjzmQ-5j950fXnNn3Ko" />
</Helmet>
      <div className="fixed top-0 w-full z-30"><Navbar model="Text-to-Image"/></div>
      <div className="mt-20 container mx-auto p-8 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.8)] rounded-lg">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder='Enter your Prompt'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="p-2 border rounded-md w-full mb-4"
            required
          />
          <button
            onClick={generateImage}
            className="bg-white text-black hover:text-white hover:bg-black px-4 py-2 rounded-md flex items-center justify-center gap-2 mb-4"
          >
            <RiAiGenerate />
            <span>Generate</span>
          </button>
        </div>

        {loading && <Loading/>}

        {generatedImage && !loading && (
          <div className="border p-4 rounded-md bg-gray-200">
            <p className="mb-2 text-lg font-semibold">Generated Image:</p>
            <img
              src={generatedImage}
              alt="Generated"
              className="max-w-full h-auto mx-auto"
            />
          </div>
        )}

        <div className="flex items-center justify-center mt-4">
          {generatedImage && !loading && (
            <button
              onClick={downloadImage}
              className="bg-white text-black hover:text-white hover:bg-black px-4 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <RiDownloadCloud2Fill />
              <span>Download</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
