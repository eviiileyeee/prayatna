import AppRouter from './router/AppRouter'
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";
import './App.css'
import Home from './pages/Home'
import Map from './components/ui/Map'


function App() {

  return (
    <>
    <ThemeProvider>
    <AppRouter />
    </ThemeProvider>
    {/* <Map/> */}
    </>
  )
}

export default App
