import { getDate } from "../utils/getDate"
import { weatherName } from "../utils/getImg"
import s from './Daily.module.scss'

const Day = ({ day }) => {
  
  const description = day.weather[0].description
  const img = weatherName[description] ?? weatherName['пасмурно']
  const weekDay = getDate(day.dt, 'weekday')
  const month = getDate(day.dt, 'month')
  const monthDay = getDate(day.dt, 'monthday')
  
  return (
   <>
    <div className={s.daily__item}>
        <h3 className={s.daily__item_day}>{weekDay}</h3>
        <p className={s.daily__item_month}>{monthDay} {month}</p>
        <img src={img} alt="" className={s.daily__item_img} />
        <p className={s.daily__item_temp}>Макс: {Math.round(day.temp.max)}°</p>
        <p className={s.daily__item_temp2}>Мин: {Math.round(day.temp.min)}°</p>
        <p className={s.daily__item_text}>{description}</p>
    </div>
   </>
  )
}

export default Day

