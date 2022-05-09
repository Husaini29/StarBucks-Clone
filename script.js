function mouseOverCoffee(){
    document.getElementById('coffeeDropDown').style.visibility="visible"
}

function mouseOutCoffee(){
    document.getElementById('coffeeDropDown').style.visibility="hidden"
}

function mouseOverMenu(){
    document.getElementById('menuDropDown').style.visibility="visible"
}

function mouseOutMenu(){
    document.getElementById('menuDropDown').style.visibility="hidden"
}

function mouseOverResponsibility(){
    document.getElementById('responsibilityDropDown').style.visibility="visible"
}

function mouseOutResponsibility(){
    document.getElementById('responsibilityDropDown').style.visibility="hidden"
}

function mouseOverCoffeeHouse(){
    document.getElementById('coffeeHouseDropDown').style.visibility="visible"
}

function mouseOutCoffeeHouse(){
    document.getElementById('coffeeHouseDropDown').style.visibility="hidden"
}

function mouseOverAboutUs(){
    document.getElementById('aboutUsDropDown').style.visibility="visible"
}

function mouseOutAboutUs(){
    document.getElementById('aboutUsDropDown').style.visibility="hidden"
}
function loadCoupon(){
    document.getElementById('coupon').style.visibility="visible"
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility="hidden"
}

function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// -----------Geo Location Script----------

let Geolocation=()=>{
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("GeoLocation not supported.")
    }
}


let showPosition=(data)=>{
    let y = document.getElementById("weather");
    let z =  document.getElementById('icon')
    let lon=data.coords.longitude;
    let lat=data.coords.latitude;
    console.log(data);
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
   
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.list.map((item)=>{
            console.log(item.temp.day)
            y.innerText=`${item.temp.day}°C`;
            z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
        })
        
    })
}
Geolocation();