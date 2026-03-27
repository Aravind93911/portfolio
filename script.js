// simple fade-in animation
document.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(c=>{
let rect=c.getBoundingClientRect();
if(rect.top<window.innerHeight){
c.style.opacity=1;
}
});
});
