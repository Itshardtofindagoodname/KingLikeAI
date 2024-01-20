import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import Loading from '../helpers/Loading';
import { GrSend } from "react-icons/gr";
import Navbar from '../helpers/Navbar';
import { Helmet } from 'react-helmet';

const AiwithText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyCTXA1-LhYQL6jQIAjjVgcCODdm1r-3W80');
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState(null);

    const generationConfig = {
        maxOutputTokens: 16000,
        temperature: 0.5,
        topK: 1,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
    ];

    const handleSendMessage = async () => {
        setLoading(true);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            generationConfig,
            safetySettings,
        });

        const chatInstance = chat || model.startChat({
            history: messages.map(message => ({ role: "user", parts: message.text })),
            generationConfig,
        });

        // Send the user's message
        const result = await chatInstance.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        // Update messages
        setMessages([...messages, { text: userMessage, type: 'user' }, { text: text, type: 'text' }]);

        // Update the chat instance
        setChat(chatInstance);
        setLoading(false);
        setUserMessage('');
    };

    const handleChangeUserMessage = (e) => {
        setUserMessage(e.target.value);
    }

    return (
    <div>
    <Helmet>
    <title>Text-to-Text Generator</title>
    <meta name="description" content="The Text to Text Generator of KingLike.AI, have conversation with the bot regarding anything and get your answers." />
    <meta name="keywords" content="KingLike, KingLike.AI, kinglike, kinglike.ai, kinglike ai, kingLike, AI, image generator, image recognition, prompt-to-text, prompt-to-audio, free AI"/>
    <meta name="robots" content="index, follow"/>
    <meta name="theme-color" content="#262626" />
    <link rel="canonical" href="https://kinglike.netlify.app/" />
    <meta name="google-site-verification" content="UwG1rfrSHdB5SVkEI_WyMb4OhjzmQ-5j950fXnNn3Ko" />
</Helmet>
        <div className="fixed top-0 w-full z-30"><Navbar model="Text-to-Text"/></div>
        <div className="flex flex-col justify-end border min-h-screen bg-neutral-800 p-4">
        {messages.length > 0 && (
            <div className="mt-20 flex flex-col my-4 p-4 rounded-xl">
                {messages.map((message, index) => (
                    <div key={index} className={`my-2 ${message.type === 'user' ? 'text-left bg-white p-4 rounded-xl w-fit' : 'text-left bg-neutral-900 p-4 rounded-2xl'}`}>
                        {message.type === 'user' && (
                            <p className="text-neutral-900 text-sm whitespace-pre-line uppercase font-bold">
                                {message.text}
                            </p>
                        )}
                        {message.type === 'text' && (
                            <p className="text-neutral-100 text-base font-semibold whitespace-pre-line">
                                {message.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        )}
        {loading && <Loading />}
        <div className="flex mt-4 flex-col md:flex-row gap-2 mb-2 p-4 w-full shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.8)] rounded-lg">
            <input
                className="flex-1 border p-2 focus:outline-none rounded"
                placeholder=''
                value={userMessage}
                onChange={(e) => handleChangeUserMessage(e)}
                required
            />
            <button className="bg-white text-black hover:text-white hover:bg-black p-2 md:w-40 rounded flex justify-center items-center flex-row gap-2" onClick={() => handleSendMessage()}><GrSend />Send</button>
        </div>
        </div>
    </div>

    );
};

export default AiwithText;
