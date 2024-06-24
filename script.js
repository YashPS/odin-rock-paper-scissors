console.log("Hello World")

var humanScore = 0, 
    computerScore = 0;

function getComputerChoice() {
    var num_choice = Math.floor(Math.random() * 3);
    switch (num_choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    var invalid_input = true
    while(invalid_input) {
        user_input = prompt("Enter your choice - rock/paper/scissors").toLowerCase();;
        if (user_input=="rock" || user_input=="paper" || user_input=="scissors") {
            invalid_input = false
            console.log("user entered "+ user_input)
        }
    }
    return user_input;
}

function playRound(humanChoice, computerChoice) {
    console.log("the computer chose " + computerChoice)

    switch (humanChoice) {
        case "rock":
            if (computerChoice=="scissors") {
                console.log("You win this round!")
                humanScore++
            }
            else if (computerChoice=="paper") {
                console.log("You lose this round...")
                computerScore++
            }
            else {
                console.log("Tie round!")
            }
            break;
        case "paper":
            if (computerChoice=="rock") {
                console.log("You win this round!")
                humanScore++
            }
            else if (computerChoice=="scissors") {
                console.log("You lose this round...")
                computerScore++
            }
            else {
                console.log("Tie round!")
            }
            break;
        case "scissors":
            if (computerChoice=="paper") {
                console.log("You win this round!")
                humanScore++
            }
            else if (computerChoice=="rock") {
                console.log("You lose this round...")
                computerScore++
            }
            else {
                console.log("Tie round!")
            }
            break;
            
    }

}

function playGame() {
    var gameCount = 0;

    while (gameCount++<5) {
        console.log("Round "+gameCount+" begins!")
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("The final scores are:\nComputer: "+computerScore+"\nYour Score: "+humanScore)
    if (computerScore<humanScore) {
        console.log("Congratulations, you win!")
    }
    else if (computerScore>humanScore) {
        console.log("The computer wins! Better luck next time...")
    }
    else {
        console.log("Its a tie!")
    }
    
}

