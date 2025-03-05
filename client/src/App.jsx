import AppRouter from './router/AppRouter'
import { ThemeContext } from './context/ThemeContext/ThemeContext'
import './App.css'
import Home from './pages/Home'
import Map from './components/ui/Map'


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
