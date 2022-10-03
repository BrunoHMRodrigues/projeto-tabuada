function gerateTabuada () {
    const numberTabuada = Math.trunc(Math.random() *10)+1;
    const arrayMultiplier = [1,2,3,4,5,6,7,8,9];
    const ulPosition = document.getElementById("container-resume-tabuada");   

    for (let index = 0; index < arrayMultiplier.length; index+=1) {
        const li = document.createElement("li");
        let problemTabuada = numberTabuada + " x " + arrayMultiplier[index] + " = "

        li.className = "item-list-tabuada";
        li.innerText = problemTabuada;

        ulPosition.appendChild(li);        
    }
}
gerateTabuada();