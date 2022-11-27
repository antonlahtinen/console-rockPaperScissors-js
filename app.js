

// Computer gives random from this array
const choices = ["rock", "paper", "scissors"];
    

    function getComputerChoice(){
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }
    
    
    
// Check winner of round
    function checkWinner(playerSelection, computerSelection)
    {
        if(playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper" )
        {
            return "Player";
        }
        else if(playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock")
        {
            return "Computer";
        }
        else if(playerSelection == computerSelection)
            return "Tie";
    }

    
    // Declares winner
    function playRound(playerSelection, computerSelection)
    {
        const winner = checkWinner(playerSelection, computerSelection);
        if(winner == "Player")
        {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
        else if(winner == "Computer")
        {
            return "You lost! " + playerSelection + " loses to " + computerSelection;
        }
        else 
            return "Tie! " + playerSelection + " ties with " + computerSelection;
    }

    // Get user input
    function getPlayerChoice()
    {
        let validInput = false;
        while(validInput == false)
        {
            const choice = prompt("Rock, Paper or Scissors?")
            if(choice == null)
            {
                continue;
            }
            const choiceInLower = choice.toLowerCase();
            if(choices.includes(choiceInLower))
            {
                validInput = true;
                return choiceInLower;
            }
        }
    }
    
    //Play 5 rounds of RPS
    function game()
    {
            let scorePlayer = 0;
            let scoreComp = 0;
        for (let i = 1; i < 6; i++) 
        {
            
            console.log("Match " + i)
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();

            console.log(playRound(playerSelection, computerSelection)); 
            
            if(checkWinner(playerSelection, computerSelection) == "Player") 
            {
                scorePlayer++;
            }
            else if(checkWinner(playerSelection, computerSelection) == "Computer")
            {
                scoreComp++;
            }
        }
        console.log("Game over!");
        if(scorePlayer > scoreComp)
        {
            console.log("Player was the winner!");
        }
        else if(scorePlayer < scoreComp)
        {
            console.log("Computer was the winner!");
        }
        else
        console.log("It's tie!")

        console.log(scorePlayer);
        console.log(scoreComp);
            
            
            
    }
    game();
