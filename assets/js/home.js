const page = document.querySelector('.page');
console.log(page)
window.onmousemove= function(e){
let x = e.clientX/5;
let y = e.clientY/5;
page.style.backgroundPositionX=x+"px";
page.style.backgroundPositionY=y+"px";
}