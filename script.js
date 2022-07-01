
const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    window.location.href = `http://localhost:4000/download?URL=${inp.value}`;
})