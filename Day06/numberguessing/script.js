function checkGuess(){

    let luckyNumber = 7;

    let userGuess = Number(document.getElementById("guess").value);

    let result = document.getElementById("result");

    if(userGuess === luckyNumber){
        result.innerHTML = "🎉 Lucky! You guessed correctly!";
        result.style.color = "green";
    }
    else{
        result.innerHTML = "😔 Better Luck Next Time!";
        result.style.color = "red";
    }

}