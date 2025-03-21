import s from './Navbar.module.scss'
import { logo, kaplya } from "../utils/exportImg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getCordinates } from "../store/weather/weatherSlice"
import { toggleTheme } from "../store/theme/themeSlice"

const Navbar = () => {
    
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    
    const submit = (event) => {
        event.preventDefault()
        if(city.length > 1) {
            dispatch(getCordinates(city))
        }
    }
    
  return (
    <>
        <nav className={s.nav}>
            <a href="#" className={s.logo}>
                <img src={logo} alt="" />
                <span className={s.logo__span}>react weather</span>
            </a>
            <div className={s.nav__search}>
                <img src={kaplya} alt="" onClick={() => dispatch(toggleTheme())} />
                <form onSubmit={(event) => submit(event)}>
                    <input 
                        type="text" 
                        className={s.nav__search_input}
                        placeholder="Выбрать город"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </form>
            </div>
        </nav>
    </>
  )
}

export default Navbar