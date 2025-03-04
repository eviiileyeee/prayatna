import { useState } from 'react'
import AppRouter from './router/AppRouter'
import { ThemeContext } from './context/ThemeContext/ThemeContext'
import './App.css'

function App() {

  return (
    <>
   <ThemeContext>
   <AppRouter />
   </ThemeContext>
      
    </>
  )
}

export default App
