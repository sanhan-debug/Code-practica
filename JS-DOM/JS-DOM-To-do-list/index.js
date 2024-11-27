
// let p = document.querySelector("p")

let input = document.querySelector("#input1")
let button1 = document.querySelector("#button1")
// let todo = document.querySelector(".todo")


// <div class="todo" style="display: none;">
// <input type="checkbox" name="" id="">
// <input type="button" value="Delete">
// </div>

button1.addEventListener("click",()=>{
    let todo = document.createElement("div")
    todo.className = "todo"
    let p = document.createElement("p")
 
    p.textContent= input.value

    todo.appendChild(p)
})