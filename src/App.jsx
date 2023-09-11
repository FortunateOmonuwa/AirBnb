import { useState } from 'react'
import './index.scss'
import SectionOne from './components/section1';
import CardSection from './components/Section2';


function App() {

  return (
    <div className='container'>
     <SectionOne/>
     <CardSection/>
    </div>
  )
}

export default App
