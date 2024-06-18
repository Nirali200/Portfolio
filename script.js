
var YOUR_API_KEY = "vA1NYmJf3Y0VztGDCoUSfoGaEECCWbo9JaCfKlzB";
var category = 'inspirational';

var getQuotes = () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category,
        { method: 'GET',
         headers: { 'X-Api-Key': YOUR_API_KEY },
         contentType: 'application/json'})
    .then(Response => Response.json())
    .then(data => addData(data));
}

var quote = document.getElementById('quotes');
const addData = (data) =>{
   var text = data[0].quote;
   quote.innerHTML = "' " + text +" '";
}

setInterval(() => {
    quote.style.transform = "translatey(calc(200px - 100%))";     
    getQuotes();
    setTimeout(()=>{
        quote.style.transform = "translatey(0)"; 
    },2000);
},5000)

const mainHeading = document.querySelector('.mainHeading');

window.onload = ()=>{
        mainHeading.style.transform = "translatey(0)";   
}



document.addEventListener("scroll", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-progress');
        bar.style.width = percentage;
    });
});
