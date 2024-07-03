console.log("Hello World")

var humanScore = 0, 
    computerScore = 0;

const rockButton = document.createElement("button");
rockButton.textContent = 'Rock';
rockButton.id = 'rock'

const paperButton = document.createElement("button");
paperButton.textContent = 'Paper';
paperButton.id = 'paper'

const scissorsButton = document.createElement("button");
scissorsButton.textContent = 'Scissors';
scissorsButton.id = 'scissors'

resultsDiv = document.createElement("div");
buttonsDiv = document.createElement("div");

buttonsDiv.appendChild(rockButton)
buttonsDiv.appendChild(paperButton)
buttonsDiv.appendChild(scissorsButton)

buttonsDiv.addEventListener("click", playGame)

document.body.appendChild(buttonsDiv)
document.body.appendChild(resultsDiv)
    
    
    

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
    resultsDiv.textContent = "The computer chose " + computerChoice + "";

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                resultsDiv.textContent += "You win this round!";
                humanScore++;
            }
            else if (computerChoice == "paper") {
                resultsDiv.textContent += "You lose this round...";
                computerScore++;
            }
            else {
                resultsDiv.textContent += "Tie round!";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                resultsDiv.textContent += "You win this round!";
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                resultsDiv.textContent += "You lose this round...";
                computerScore++;
            }
            else {
                resultsDiv.textContent += "Tie round!";
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                resultsDiv.textContent += "\nYou win this round!";
                humanScore++;
            }
            else if (computerChoice == "rock") {
                resultsDiv.textContent += "\nYou lose this round...";
                computerScore++;
            }
            else {
                resultsDiv.textContent += "\nTie round!";
            }
            break;
    }
    resultsDiv.textContent += "The current scores are:\nComputer: "+computerScore+"\nYour Score: "+humanScore


}

function playGame(e) {
    let target = e.target;
    var humanSelection = target.id
    var computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (((humanScore >= 5) || (computerScore >= 5))) {
        resultsDiv.textContent = "The final scores are:\nComputer: "+computerScore+"\nYour Score: "+humanScore
        if (computerScore<humanScore) {
            resultsDiv.textContent = "Congratulations, you win!"
        }
        else if (computerScore>humanScore) {
            resultsDiv.textContent = "The computer wins! Better luck next time..."
        }
        else {
            resultsDiv.textContent = "Its a tie!"
        }
        resultsDiv.textContent += "\nThe final scores are:\nComputer: "+computerScore+"\nYour Score: "+humanScore
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        
    }
}


