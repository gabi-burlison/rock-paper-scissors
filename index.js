//Clean code: 1) Replace var by const and/or let; 2) Validate the user's input: Cancel; 2.1) Validate the input as being one of the 3 allowed ones. 

let humanScore = 0; 
let computerScore = 0; 
function playRound() { 
       do {
        //Prompt
        let input = prompt("Let's play Rock, Paper, or Scissors! Please, type your choice:"); 

        //Validate null inputs and restart
        if (input === null) {
        alert("You have cancelled the game.");
        location.reload();
        }

        const caseInsensitive = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); 
        //Computer options
        const computerOptions = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * computerOptions.length); 
        const randomOption = computerOptions[randomIndex];   
        let result = "";
        
        //Validate accepted plays
        if (caseInsensitive!== "Rock"&&caseInsensitive!=="Paper"&&caseInsensitive!=="Scissors") {
                alert("Please, submit a valid answer.");
                continue;
        } 

        //5 round game      
                if (caseInsensitive===randomOption) {
                result = "It's a tie! Player II chose "+randomOption;
        } else if ((caseInsensitive==="Rock"&&randomOption==="Scissors") || (caseInsensitive==="Paper"&&randomOption==="Rock") || (caseInsensitive==="Scissors"&&randomOption==="Paper")) {
                result = "You won! Player II chose "+randomOption;
                humanScore++;
        } else {
                result = "You lost! Player II chose "+randomOption;
                computerScore++;
               } 
        alert(result);
        alert("You have "+humanScore+" points, and Player II has "+computerScore+" points")

} while (humanScore<5 && computerScore<5);
       if (humanScore===5) {
        alert("Congratulations! You won the game!"); 
       } else if (computerScore===5) {
        alert("You lost the game. Try again!");
} location.reload(); //Restart game
}

playRound();