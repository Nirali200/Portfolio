
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

const addData = (data) =>{
   var text = data[0].quote;
   var quote = document.querySelector('.mainHeading');
   quote.innerHTML = "' " + text +" '";
}

setInterval(() => {
    mainHeading.style.transform = "translatey(calc(200px - 100%))";     
    getQuotes();
    setTimeout(()=>{
        mainHeading.style.transform = "translatey(0)"; 
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
