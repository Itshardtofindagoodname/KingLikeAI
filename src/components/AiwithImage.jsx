import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../helpers/imageHelper';
import Loading from '../helpers/Loading';
import { MdOutlineImageSearch } from "react-icons/md";
import Navbar from '../helpers/Navbar';

const AiwithImageAndText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyCTXA1-LhYQL6jQIAjjVgcCODdm1r-3W80');
    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [prompt, setPrompt] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            prompt, imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiImageRun();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch(e => console.log(e))
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

    const handleChangePrompt = (e) => {
        setPrompt(e.target.value);
    }

    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen m-8">
<Helmet>
    <title>Image-to-Text Generator</title>
    <meta name="description" content="The Image to Text Generator of KingLike.AI, provide any image and asks questions around that image." />
    <meta name="keywords" content="KingLike, KingLike.AI, kinglike, kinglike.ai, kinglike ai, kingLike, AI, image generator, image recognition, prompt-to-text, prompt-to-audio, free AI"/>
    <meta name="robots" content="index, follow"/>
    <meta name="theme-color" content="#262626" />
    <link rel="canonical" href="https://kinglike.netlify.app/" />
    <meta name="google-site-verification" content="UwG1rfrSHdB5SVkEI_WyMb4OhjzmQ-5j950fXnNn3Ko" />
</Helmet>
            <div className="fixed top-0 w-full z-30"><Navbar model="Image Reader"/></div>
            <div className="mt-20 container mx-auto p-8 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.8)] rounded-lg">
                <div className="flex mb-4 flex-col md:flex-col gap-2">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg bg-neutral-800 hover:bg-neutral-900 transition-colors ease-in-out">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG format only</p>
                            </div>
                            <input onChange={(e) => handleImageChange(e)} id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                    <div className='flex flex-col md:flex-row w-full mt-4'>
                        <input placeholder='Enter prompt' onChange={(e) => handleChangePrompt(e)} className="mb-2 md:mb-0 p-2 border rounded-md flex-1 text-black" required />
                        <button className='bg-white text-black hover:bg-black hover:text-white transition-colors ease-in-out px-4 py-2 flex flex-row items-center justify-center rounded-md md:ml-2' onClick={() => handleClick()}><MdOutlineImageSearch/>Search</button>
                    </div>
                </div>
                {loading && <p style={{ margin: '30px 0' }}><Loading /></p>}

                {aiResponse && !loading && (
                    <div className="border p-4 rounded-lg mb-4 bg-gray-200">
                        <p className="mb-2 text-lg font-semibold">AI Response:</p>
                        <p className=' whitespace-pre-line'>{aiResponse}</p>
                    </div>
                )}
                {image && <img src={image} alt="Selected" className="max-w-full h-auto mx-auto mb-4" />}
            </div>
        </div>
    );
};

export default AiwithImageAndText;
