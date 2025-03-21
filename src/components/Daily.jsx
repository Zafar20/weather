import s from './Daily.module.scss'
import Day from "./Day"
import { useSelector } from "react-redux"

const Daily = () => {
  
  const { data } = useSelector((state) => state.weather)
  
  return (
    <>
        <section className={s.daily}>
          {data.daily.map((day) => (
            <Day
              key={day.dt}
              day={day}
            />
          ))}
        </section>
    </>
  )
}

export default Daily