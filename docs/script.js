let keepArrayAnswer = [];
let numberTabuada = 0;

function gerateTabuada () {
    //let numberTabuada = Math.trunc(Math.random() *10)+1;
    const arrayMultiplier = [1,2,3,4,5,6,7,8,9];
    const ulPosition = document.getElementById("container-resume-tabuada");   
    const firstCalculation = document.getElementById("current-calculation");
    let arrayAnswer = [];
    numberTabuada += 1;
    

    for (let index = 0; index < arrayMultiplier.length; index+=1) {
        const li = document.createElement("li");
        let problemTabuada = numberTabuada + " x " + arrayMultiplier[index] + " = "

        li.className = "item-list-tabuada";
        li.innerText = problemTabuada;

        ulPosition.appendChild(li);  
        
        arrayAnswer[index] = numberTabuada * arrayMultiplier[index];      
    }    
    firstCalculation.innerText = numberTabuada + " x " + arrayMultiplier[0] + " = ?";
    
    keepArrayAnswer = arrayAnswer;
}
gerateTabuada();

let arrayNumberAnswer = 0;


const buttonAnswer = document.getElementById("button-verify");
let numberProblem = 0;

function verifyAnswer () {    
    const inputContainer = document.getElementById("answer-container");
    const answer = inputContainer.value;
    const liList = document.getElementById("container-resume-tabuada").children; 
    const currentProblem = document.getElementById("current-calculation");
   
    
    if (keepArrayAnswer[numberProblem] == answer) {
        alert ("Parabéns!!!")
        liList[numberProblem].innerText += " " + answer;

        numberProblem += 1;


        if (numberProblem == 9) {
            alert("Parabéns você completou a tabuada, vamos fazer uma nova")
            numberProblem = 0;
            clearToNewTabuada();
            gerateTabuada();
        } else {
            currentProblem.innerText = liList[numberProblem].innerText;
            inputContainer.value = "";
        }

    } else {
        alert("A resposta está errada");
    }

    return numberProblem;
}    

buttonAnswer.addEventListener("click", verifyAnswer);

function verifyEnter (event) {
    if (event.key === "Enter") {
        verifyAnswer();
    }
}
document.getElementById("answer-container").addEventListener("keypress", verifyEnter);

function clearToNewTabuada () {
    const ulPosition = document.getElementById("container-resume-tabuada");   
    const firstCalculation = document.getElementById("current-calculation");
    const inputContainer = document.getElementById("answer-container");

    while (ulPosition.firstChild) {
        ulPosition.removeChild(ulPosition.lastChild);
    }

    keepArrayAnswer = [];
    firstCalculation.innerText = ""; 
    inputContainer.value = "";   
}
//clearToNewTabuada();
