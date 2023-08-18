import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
       <Navbar />

       <div  className='container '>
        <List />

     
    


     </div > 
    </div>
  
  )
}

export default App
