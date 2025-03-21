import s from './Current.module.scss'
import { useSelector } from "react-redux"
import { getTime } from "../utils/getTime"
import { weatherName } from "../utils/getImg"
import { temp, davlenie,  osadki, wind, headerBg } from "../utils/exportImg"

const Current = () => {
    
    const { data } = useSelector((state) => state.weather)
    const time = getTime(data.timezone)
    const description = data.current.weather[0].description
    const weatherIcon = weatherName[description] ?? weatherName['пасмурно']
    
    const items = [
      {
        img: temp,
        text: `Температура`,
        value: `${Math.round(data.current.temp)}° - ощущается как ${Math.round(data.current.feels_like)}°`
      },
      {
        img: davlenie,
        text: `Давление `,
        value: `${data.current.pressure} мм`
      },
      {
        img: osadki,
        text: `Облочность`,
        value: `${data.current.clouds}%`
      },
      {
        img: wind,
        text: `Ветер`,
        value: `${Math.round(data.current.wind_speed)} м/с`
      },
    ]
    
  return (
    <>
        <div className={s.current}>
            <div className={s.current__left}>
                <p className={s.current__left_degree}>{Math.round(data.current.temp)}°</p>
                <p className={s.current__left_today}>Сегодня</p>
                <p className={s.current__left_time}>Время: {time}</p>
                <p className={s.current__left_city}>Город: {data.timezone.split('/')[1]}</p>
                <img src={weatherIcon} alt="" className={s.current__left_img} />
            </div>
            <div className={s.current__right}>
              <img src={headerBg} alt="" className={s.current__right_img} />
              {items.map((item) => (
                  <div className={s.current__right_item} key={item.text}>
                    <div className={s.current__right_item_icon}>
                      <img src={item.img} alt="" />
                    </div>
                    <p className={s.current__right_item_text}>{item.text}</p>
                    <p className={s.current__right_item_value}>{item.value}</p>
                 </div>
              ))}
           
            </div>
        </div>
    </>
  )
}

export default Current