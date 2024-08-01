const body = document.querySelector("body");

//number between 1 to 10
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const question = document.querySelector("#question");
question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

const formEl = document.querySelector(".btn");
const inputEl = document.querySelector("#input")
const scoreEl = document.querySelector("#score");

let theme = "dark";
const toggleBtn = document.querySelector(".toggle-btn");

window.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("theme")){
        theme = localStorage.getItem("theme");
    }
    loadTheme();
});

toggleBtn.addEventListener("click", ()=>{
    if(theme === "light"){
        theme = "dark";
    }
    else{
        theme = "light";
    }
    loadTheme();
    localStorage.setItem("theme",theme);
});

function loadTheme(){
    body.setAttribute("color-scheme", theme);
    toggleBtn.innerHTML = theme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-lightbulb"></i>'
}

let score = parseInt(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener("click", ()=>{
    const userAns = parseInt(inputEl.value);
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}