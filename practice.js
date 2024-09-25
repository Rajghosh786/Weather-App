const button = document.querySelector('.btn')
const temp = document.querySelector('.temp')
const temp1 = document.querySelector('.temp1')
const change = document.querySelector('.change')

// const lastlabel = document.querySelector('.last-label')
// const lastinput = document.querySelector('.last-input')
// const lastbutton = document.querySelector('.last-button')

// lastbutton.addEventListener("click",click=()=>{
//     console.log(lastinput.value);
// })


// const test1=document.querySelector('.test1')
// const test2=document.querySelector('.test2')
// const wind1=document.querySelector('.wind1')
// const wind2=document.querySelector('.wind2')
// let isShow = true;
// change.addEventListener("click",function(){ 
// if(isShow){                 
//     test1.style.display = "block";
//     test2.style.display = "none";
//     wind1.style.display = "block";
//     wind2.style.display = "none";
//     isShow = false
// }else{
//     test1.style.display = "none"
//     test2.style.display = "block";
//     wind1.style.display = "none";
//     wind2.style.display = "block";
//     isShow = true
//     }
// })





// const fifty = document.querySelector('.fifty');
// const c = document.querySelector('.C');
// let isShow = true;
// let farenheit = fifty.textContent*2+30;
// let celcius = fifty.textContent/2-30;
// const buttison = document.querySelector('.buttison'); 
// buttison.addEventListener("click",function(){ 
//     if(c.textContent === "C"){
//         c.textContent = "F"
//         fifty.textContent = farenheit
//         console.log(farenheit)
//     }else{
//         c.textContent = "C"
//         fifty.textContent = celcius;
//     }
// })
// console.log("jaiho")

// const fufu = 8.561248541851
// console.log(Math.floor(fufu))

const yay = document.querySelector(".yay");
const yay1 = document.querySelector(".yay1");
const pa = document.querySelector(".pa")

function start1(){
    pa.textContent = "starting";
    // console.log(pa.innerHTML)
}


function start2(){
    pa.textContent = "Rejecting";
    console.log(pa.innerHTML)
}
// yay1.addEventListener("click",function(){
//     pa.textContent = yay.value;
// })

yay1.addEventListener('click',function(){
    if(yay.value.length === 0){
        start1()
    }
    else if(yay.value.length > 0){
        start2()
    }
});
    


