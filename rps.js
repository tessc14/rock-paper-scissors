const rps = () => {
    // const c = require('ansi-colors');
    const prompt = require('prompt-sync')();
    const user_input = prompt('Rock, paper, scissors... ').toLowerCase();

    let arr = ["rock", "paper", "scissors"];
    let x = Math.floor((Math.random() * 3));
    let our_input = arr[x];
    
    let result;
//|| (user_input !== "rock" && user_input !== "paper" && user_input !== "scissors")
    if (user_input.length === 0 || user_input === " " ) {
        console.log("Please choose rock, paper or scissors");
    } else if ((user_input == "rock") || (user_input == "scissors") || (user_input == "paper")) {
        console.log(`I said: ${our_input}`);
            if (user_input == our_input) {
                console.log("It's a draw");
            } else if ((user_input == "rock" && our_input == "scissors") || (user_input == "scissors" && our_input == "paper") || (user_input == "paper" && our_input == "rock")) {
                console.log("You win!");
            } else if ((user_input == "rock" && our_input == "paper") || (user_input == "scissors" && our_input == "rock") || (user_input == "paper" && our_input == "scissors")){
                console.log("You lose");
            }
    
    } 
        
        // else {
    //     console.log("Please choose rock, paper or scissors")
    }


rps();