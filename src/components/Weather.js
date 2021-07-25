import React from 'react';


const Weather = ({weather}) => {
            const getTime = (times) =>{
                let time = new Date(times);
                let hours = time.getHours();
                if(hours < 10){
                    hours =`0${hours}`
                }
                let minutes = time.getMinutes();
                if(minutes < 10){
                    minutes = `0${minutes}`
                }
                return `${hours}:${minutes}`
            };
    return (
        <div className='weather__infoBlock'>
            <div className='weather__top'>
                <p className='weather__time'>{getTime(weather.dt * 1000)}</p>
                <p className='weather__speed'>Скорость ветра: {weather.wind.speed} м/с</p>

            </div>

            <p className='weather__city'>{weather.name}</p>
            <div className='weather__temp'>
                {Math.round(weather.main.temp - 273.15)} °C
                <p>
                    <img  className='weather__img' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"/>
                </p>
            </div>
            <p className='weather__des'>{weather.weather.map(el =>{
                return el.description
            })}
            </p>
            <p className='weather__sunrise'>Рассвет: {getTime(weather.sys.sunrise * 1000)}</p>
            <p className='weather__sunset'>Закат: {getTime(weather.sys.sunset * 1000)}</p>
        </div>
    );
};

export default Weather;