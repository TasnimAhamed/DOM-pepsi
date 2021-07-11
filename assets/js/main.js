const blueBtn=document.getElementById("blue")
const redBtn=document.getElementById("red")
const blackBtn=document.getElementById("black")
const mainImg=document.getElementById("main-img")
const header=document.getElementById("header")
const blue="#0062be"
const red="#e60c2c"
const black="#1e1e1e"
blueBtn.addEventListener('click',()=>{
    mainImg.src="./assets/img/pepsi001.png"
    header.style.background=blue;
})
redBtn.addEventListener('click',()=>{
    mainImg.src="./assets/img/pepsi002.png"
    header.style.background=red;
})
blackBtn.addEventListener('click',()=>{
    mainImg.src="./assets/img/pepsi003.png"
    header.style.background=black;
})