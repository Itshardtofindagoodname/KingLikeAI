import React, { useState } from 'react';
import axios from 'axios';
import API from '../helpers/SdApi';
import { RiAiGenerate } from 'react-icons/ri';
import Loading from '../helpers/Loading';
import Navbar from '../helpers/Navbar';

const AiwithAudio = () => {
  const [prompt, setPrompt] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAudio = async () => {
    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/musicgen-small',
        {
          inputs: prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API}`,
          },
          responseType: 'arraybuffer',
        }
      );

      const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      setPrompt('');
    } catch (error) {
      console.error('Error generating audio:', error);
      alert('Error generating audio. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-8">
      <div className="fixed top-0 w-full z-30"><Navbar/></div>
      <div className="mt-20 container mx-auto p-8 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.8)] rounded-lg">
        <textarea
          placeholder="Enter your Idea here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        ></textarea>
        <button
          onClick={generateAudio}
          disabled={loading}
          className="bg-white text-black hover:text-white hover:bg-black px-4 py-2 rounded-md flex items-center justify-center gap-2 mb-4"
        >
         <RiAiGenerate /> Get Audio
        </button>
        {loading && <Loading/>}
        {audioUrl && (
          <div className="border p-4 rounded-md bg-gray-200">
            <p className="mb-2 text-lg font-semibold">Audio generated successfully! Here you go:</p>
            <audio controls>
              <source src={audioUrl} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiwithAudio;
