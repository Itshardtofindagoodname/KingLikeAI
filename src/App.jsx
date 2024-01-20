import React, { useState, useEffect } from 'react';
import AiwithText from './components/AiwithText'
import AiwithImageandText from './components/AiwithImage'
import Home from './pages/Home'
import SearchAi from './pages/SearchAi'
import Contact from './pages/Contact'
import PageNotFound from './pages/404page'
import TextToImageGenerator from './components/TexttoImage'
import Nav from './pages/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AiwithAudio from './components/AiwithAudio'
import { Helmet } from 'react-helmet'
import Logo from './assets/logo_bg.png'
import { motion } from "framer-motion";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(splashTimer);
  }, []); 
  return (
    <>
    {showSplash && (
      <motion.div initial="initial" animate="animate">
        <motion.div className="h-screen bg-neutral-800 flex flex-row items-center justify-center" variants={fadeInUp}>
              <img className="h-8 w-6" src={Logo} alt="" />
              <div className="text-3xl font-bold text-neutral-50">ingLike</div>
            </motion.div>
        </motion.div>
      )}

<Helmet>
    <title>KingLike</title>
    <meta name="description" content="KingLike.AI, The One-Stop for all your AI needs. Providing you free AI-models to work with for anything and mostly everything, at the same time." />
    <meta name="keywords" content="KingLike, KingLike.AI, kinglike, kinglike.ai, kinglike ai, kingLike, AI, image generator, image recognition, prompt-to-text, prompt-to-audio, free AI"/>
    <meta name="robots" content="index, follow"/>
    <meta name="theme-color" content="#262626" />
    <link rel="canonical" href="https://kinglike.netlify.app" />
    <meta name="google-site-verification" content="UwG1rfrSHdB5SVkEI_WyMb4OhjzmQ-5j950fXnNn3Ko" />
</Helmet>

    <div className="flex flex-col bg-neutral-800">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='nav' element={<Nav/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='search' element={<SearchAi/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='imagegen' element={<TextToImageGenerator/>}/>
          <Route path='imagerec' element={<AiwithImageandText/>}/>
          <Route path='text' element={<AiwithText/>}/>
          <Route path='audio' element={<AiwithAudio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
