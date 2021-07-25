import React from 'react';
import axios from "axios";



const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();
        let ApiKey = 'ce469da3558727f7aad7f381c8eb74c8';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=Ru&appid=${ApiKey}`)
            .then(({data}) => setWeather(data))
            .catch(() =>
                console.error('введите корректно название города')
            );
    };
    const inputHandler = (e) => {
        setCity(e.target.value)
    };

    return (

            <form  className='form' action="" onSubmit={getWeather}>
                <input className='weather__input' placeholder='Введите город' type='text' onChange={inputHandler}/>
                <button className='weather__btn' type='submit'>ПОЛУЧИТЬ</button>
            </form>
    );
};


export default Form;

