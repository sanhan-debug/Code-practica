
let btn =  document.querySelector("button")
let input = document.querySelector("input")
let btn2 = document.querySelectorAll("button")[1]
console.log(btn2)
let body = document.body
let count=0;

btn.addEventListener("click",function(){
    let r = Math.floor(Math.random()*100)
    let g = Math.floor(Math.random()*100)
    let b = Math.floor(Math.random()*100)
    let result;
   
    if(r<256 && g<256 && b<256){
        result = body.style.backgroundColor=`rgb(${r},${g},${b})`
        btn.textContent = `change color${count++}`
    }

    input.value = result
})

btn2.addEventListener("click",()=>{
    navigator.clipboard.writeText(input.value);
   
    alert("Copied the text: " + input.value);
})
