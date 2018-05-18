var letters = ["a","b","c","d","e","f","g","h","i","j",
                "k","l","m","n","o","p","q","r","s","t",
                "u","v","w","x","y","z"];
    
    var wins = 0;
    var losses = 0;
    var lives = 5;
    var guesses = [];
    var computerGuess = [];
   
    window.onload = function () {
    var answers = letters[Math.floor(Math.random() * letters.length)];
    computerGuess.push(answers);
    console.log(computerGuess);
    }
    
        function newGame() {
        
            if (confirm ("Congratulations! Shall we play again?") == true) {
                var answers = letters[Math.floor(Math.random() * letters.length)];
                computerGuess.push(answers);
                console.log(computerGuess);
            }
            else {
                location.reload();
            }}

        function gameOver() {
            if (confirm ("Shall we play again?") == true) {
                var answers = letters[Math.floor(Math.random() * letters.length)];
                computerGuess.push(answers);
                console.log(computerGuess);
            }
            else {
                location.reload();
            }}
    
    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        guesses.push(userGuess);

        if (userGuess === computerGuess[computerGuess.length - 1]) {
            wins++;
            lives = 5;
            newGame();
        }
        else if (userGuess != computerGuess[computerGuess.length - 1]) {
            lives--;
        }
        if (lives == 0) {
            losses ++;
            lives = 5;
            gameOver();
        }


        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('lives').innerHTML = "Guesses Left: " + lives;
        document.getElementById('guesses').innerHTML = "Guesses: " + guesses;
    }