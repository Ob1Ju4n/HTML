/**
 * Created by j.ortiz on 9/25/2015.
 */

var target;
var finished = false;
var guesses = 0;

function do_game(){
    target = Math.floor(Math.random()*100) + 1;
    while(!finished){
        player_guess = prompt("Please, guess a number between 1 to 100. \n\n What is the number?");
        finished = check_guess();
        guesses+=1;
    }

}

function check_guess(){

    if(isNaN(player_guess)){
        alert("You've not entered a number. Please enter a correct value between 1 to 100.");
        return false;
    }else if(player_guess < 1 || player_guess > 100){
        alert("Your number is not in the correct range. Please enter a correct value between 1 to 100.")
        return false;
    }else if(player_guess > target){
        alert("Your number is too large, try again!");
        return false;
    }else if(player_guess < target){
        alert("Your number is too small, try again!");
        return false;
    }else{
        alert("You guessed the number!!\nYour guess was: "+player_guess+"\nComputer number was: "+target+"\nIt took you "+guesses+" tries.");
        return true;
    }
}
