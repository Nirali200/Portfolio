
var YOUR_API_KEY = "vA1NYmJf3Y0VztGDCoUSfoGaEECCWbo9JaCfKlzB";
var category = 'happiness';

var getQuotes = () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category,
        { method: 'GET',
         headers: { 'X-Api-Key': YOUR_API_KEY },
         contentType: 'application/json'})
    .then(Response => Response.json())
    .then(data => addData(data));
}

const addData = (data) =>{
   var text = data[0].quote;
   var quote = document.querySelector('.mainHeading');
   quote.innerHTML = "' " + text +" '";
}


const mainHeading = document.querySelector('.mainHeading');

window.onload = ()=>{
        mainHeading.style.transform = "translatey(0)";

    
}