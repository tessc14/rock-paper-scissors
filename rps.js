const rps = () => {
    const c = require('ansi-colors');
    const prompt = require('prompt-sync')();
    const user_input = prompt('Rock, paper, scissors... ').toLowerCase();

    let wins = 0;
    let losses = 0;
    let draws = 0;

    let arr = ["rock", "paper", "scissors"];
    let x = Math.floor((Math.random() * 3));
    let our_input = arr[x];
    
    let result;
        if (user_input !== "rock" && user_input !== "paper" && user_input !== "scissors") {
            console.log("Please choose rock, paper or scissors");
        } else {
            console.log(`I said: ${our_input}`);
            if (user_input == our_input) {
                draws ++;
                console.log(c.blue("It's a draw"));
            } else if ((user_input == "rock" && our_input == "scissors") || (user_input == "scissors" && our_input == "paper") || (user_input == "paper" && our_input == "rock")) {
                wins ++;
                console.log(c.green("You win!"));
            } else if ((user_input == "rock" && our_input == "paper") || (user_input == "scissors" && our_input == "rock") || (user_input == "paper" && our_input == "scissors")){
                losses ++;
                console.log(c.red("You lose"));
            }
        }    
}


rps();