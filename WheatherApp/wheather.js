const apiKey = "c6144b68d4d467626caeff93a4fd22ae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

// &appid={apiKey}

const searchBtn = document.querySelector(".search button")
const searchBox = document.querySelector(".search input")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        const data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%"


        if(data.weather[0].main=="Cloud"){
            weatherIcon.src="images/cloud.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}


searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})
