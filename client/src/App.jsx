import AppRouter from './router/AppRouter'
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";
import './App.css'
import Home from './pages/Home'
import Map from './pages/Map'


function App() {

  return (
    <>
    <ThemeProvider>
    <AppRouter />
    </ThemeProvider>
    </>
  )
}

export default App
