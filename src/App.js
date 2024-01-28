import React from 'react';
import './App.css';

import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'

import { Footer, Blog, Header, Possibility, Features, WhatGPT3} from './containers'

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App