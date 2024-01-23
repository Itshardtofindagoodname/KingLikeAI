import React from 'react';
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
function App() {
  return (
    <>

<Helmet>
    <title>KingLike</title>
    <meta name="description" content="KingLike.AI, The One-Stop for all your AI needs. Providing you free AI-models to work with for anything and mostly everything, at the same time." />
    <meta name="keywords" content="KingLike, KingLike.AI, kinglike, kinglike.ai, kinglike ai, kingLike, AI, image generator, image recognition, prompt-to-text, prompt-to-audio, free AI"/>
    <meta name="robots" content="index, follow"/>
    <meta name="theme-color" content="#262626" />
    <link rel="canonical" href="https://kinglike.netlify.app" />
    <meta name="google-site-verification" content="UwG1rfrSHdB5SVkEI_WyMb4OhjzmQ-5j950fXnNn3Ko" />
    <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
    <link rel="manifest" href="../public/site.webmanifest"/>
    <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#262626"/>
</Helmet>

    <div className="flex flex-col bg-neutral-800">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nav' element={<Nav/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<SearchAi/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/imagegen' element={<TextToImageGenerator/>}/>
          <Route path='/imagerec' element={<AiwithImageandText/>}/>
          <Route path='/text' element={<AiwithText/>}/>
          <Route path='/audio' element={<AiwithAudio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
