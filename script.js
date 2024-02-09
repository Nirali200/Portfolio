const pathname = window.location.pathname;
const lol = document.querySelector('.right').childNodes[1].childNodes;
for(let i=0;i<lol.length;i++){
    if(i%2==1){
        if(lol[i].childNodes[0].href.includes(pathname)){
            lol[i].childNodes[0].classList.add('active')
        }
    }
}