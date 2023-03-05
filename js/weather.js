const API_KEY = "43c46ea868069187940d6bd976d689e5"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `
  fetch(url)
    .then((response) => response.json())  // json은 Network에 나오는 정보값들(위치기반)
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
  alert("Can't find you. No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  // 브라우저에서 위치 좌표 찾아줌