/**
 * Created by arianneglick on 11/28/16.
 */
function guess() {
    var ask = prompt("What's your guess?", "");
    var answer = 4;

    if(ask < answer){
        alert("Nope, it's higher than " + ask)
    }
    if(ask > answer){
        alert("Nope, it's lower than " + ask)
    }
    if(ask == answer){
        alert("You got it! The number I was thinking of was " + answer)
    }
}