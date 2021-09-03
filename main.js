var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
let imgBoxContainer = document.getElementById("imgContainer");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let close = document.getElementById("close");
let currentImg = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click',(e)=>{
console.log(e.target.getAttribute("src"))
console.log(e.target.src)

boxContainer.style.display="flex";
imgBoxContainer.style.backgroundImage = `url(${e.target.src})`;
currentImg = imgs.indexOf(imgs.indexOf(e.target));
console.log(currentImg,imgs.indexOf(e.target))
    })
    
}
close.addEventListener("click",closeItem)
function closeItem() {
    boxContainer.style.display= "none";

}


prev.addEventListener("click",prevItem)
function prevItem() {
    currentImg--;
    if (currentImg <0) {
        currentImg = imgs.length - 1;
    }
    imgBoxContainer.style.backgroundImage = `url(${imgs[currentImg].getAttribute('src')})`;

}

console.log(imgs.length)

next.addEventListener("click",nextItem)
function nextItem() {
    currentImg++;
    if (currentImg  == imgs.length) {
        currentImg = 0;
    }
    imgBoxContainer.style.backgroundImage = `url(${imgs[currentImg].getAttribute('src')})`;
}

document.addEventListener('keyup',(e) =>{    
    if(e.code=="Escape"){
        closeItem()
    }
    else if(e.code=='ArrowRight'){
        nextItem()}
    else if(e.code=='ArrowLeft')
    {prevItem()}
})
