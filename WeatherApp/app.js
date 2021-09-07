const inp = document.getElementById('input');
const btn = document.querySelector('button');
const weather = document.getElementById('weather');
const loc = document.getElementById('location');
const temp = document.getElementById('temp');
const minMax = document.getElementById('minMax');
const windSpeed = document.getElementById('windSpeed');
const date = document.getElementById('date');


btn.addEventListener('click' , ()=>{
    
    const city = inp.value;
    showWeather(city);

});


function showWeather(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b704d7a865eea4cf0dd262cbd252aa06`)
.then((result) => {
    
    return result.json(); 
})

.then((data)=>{
 console.log(data);

 let text = data.weather[0].description.toUpperCase();
 weather.innerHTML = text;

 if(data.weather[0].main=== "Clear"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/80476/hayden-valley-yellowstone-valley-landscape-80476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main=== "Clouds"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main=== "Rain"){

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
 }

 else if(data.weather[0].main=== "Drizzle"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1046397/pexels-photo-1046397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
 }
 else if(data.weather[0].main=== "Thunderstorm"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3933949/pexels-photo-3933949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }
 else if(data.weather[0].main=== "Snow"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }
 else if(data.weather[0].main=== "Mist"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/845619/pexels-photo-845619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }
 else if(data.weather[0].main=== "Haze" || data.weather[0].main=== "Smoke"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/14675/pexels-photo-14675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main==="Fog"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/8552529/pexels-photo-8552529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main==="Sand" || data.weather[0].main==="Ash"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main==="Tornado"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/4870641/pexels-photo-4870641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }

 else if(data.weather[0].main==="Dust"){

    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2232917/pexels-photo-2232917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
 }
 

 text = data.sys.country;
 loc.innerHTML = city.toUpperCase()+ ' , '+text;
  
 text = data.wind.speed;
 windSpeed.innerHTML = text + " km/s";

 text = parseInt(data.main.temp-273);
 temp.innerHTML = text+" \u00B0C";

 text = parseInt(data.main.temp_min - 273);
 let text2 = parseInt(data.main.temp_max - 273);
 minMax.innerHTML = text+" \u00B0C(min) / "+ text2+"\u00B0C(max)";

  text = new Date();
  let dd = String(text.getDate()).padStart(2, '0');
  let mm = String(text.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = text.getFullYear();

  text = dd + '/' + mm + '/' + yyyy;
 date.innerHTML = text;

})

.catch((err) => {
   alert("Location not identified.Please enter the correct location");
   inp.value=" ";
});

} 