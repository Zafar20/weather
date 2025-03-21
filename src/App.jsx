import { useDispatch, useSelector } from "react-redux"
import Current from "./components/Current"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { getCordinates } from "./store/weather/weatherSlice"
import Loader from "./components/Loader"
import Daily from "./components/Daily"
import { initTheme } from "./store/theme/themeSlice"

function App() {
  
    const { data } = useSelector((state) => state.weather)
    const { theme } = useSelector((state) => state.theme)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(initTheme())
      setTimeout(() => dispatch(getCordinates('Ташкент')), 500)
    }, [])
  
  
  return (
    <>
      <div className={`wrapper ${theme}`}>
        {data ? 
          <div className="container">
            <Navbar/>
            <main className="main">
              <Current/>
              <Daily/>
            </main>
          </div>
          : <Loader/>
        }
      </div>
    </>
  )
}

export default App
