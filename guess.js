const players = [
    { name: "Adarius Myers", image: "pictures/AM6.png" },
    { name: "Brody Drost", image: "pictures/BD4.png" },
    { name: "Blake Hooks", image: "pictures/BH26.png" },
    { name: "Brenton Thiels", image: "pictures/BT52.png" },
    { name: "Colton Coates", image: "pictures/CC9.png" },
    { name: "Caden Copeland", image: "pictures/CC28.png" },
    { name: "Cole McConnell", image: "pictures/CM5.png" },
    { name: "Connor Nation", image: "pictures/CN33.png" },
    { name: "Cade Patterson", image: "pictures/CP41.png" },
    { name: "CJ Sturiale", image: "pictures/CS15.png" },
    { name: "Dalton Davis", image: "pictures/DD24.png" },
    { name: "Ethan Bates", image: "pictures/EB16.png" },
    { name: "Grant Comeaux", image: "pictures/GC14.png" },
    { name: "Grant Hubka", image: "pictures/GH20.png" },
    { name: "Greg Martinez", image: "pictures/GM36.png" },
    { name: "Hutson Guinn", image: "pictures/HG30.png" },
    { name: "Hayden Harmon", image: "pictures/HH45.png" },
    { name: "Haydan Toal", image: "pictures/HT54.png" },
    { name: "Isaac Crabb", image: "pictures/IC29.png" },
    { name: "Jorge Corona", image: "pictures/JC12.png" },
    { name: "Jacob Havern", image: "pictures/JH45.png" },
    { name: "Jake LaRocca", image: "pictures/JL21.png" },
    { name: "Jake Smith", image: "pictures/JS13.png" },
    { name: "Karson Evans", image: "pictures/KE44.png" },
    { name: "Kasten Furr", image: "pictures/KF18.png" },
    { name: "Logan McLeod", image: "pictures/LM10.png" },
    { name: "Luke Nichols", image: "pictures/LN32.png" },
    { name: "Luke Smith", image: "pictures/LS19.png" },
	{ name: "Michael Ballard", image: "pictures/MB7.png" },
    { name: "Nick Alonso", image: "pictures/NA1.png" },
    { name: "Nate Crider", image: "pictures/NC38.png" },
    { name: "Nick Fraginals", image: "pictures/NF35.png" },
    { name: "RJ Brown", image: "pictures/RB51.png" },
    { name: "Ryan Harland", image: "pictures/RH39.png" },
    { name: "Ryan Porche", image: "pictures/RP50.png" },
    { name: "Reid Snider", image: "pictures/RS25.png" },
    { name: "Reed Smith", image: "pictures/RS40.png" },
    { name: "Reece Tarini", image: "pictures/RT37.png" },
    { name: "Sam Brodersen", image: "pictures/SM31.png" },
    { name: "Slade Netterville", image: "pictures/SN17.png" },
    { name: "Thaxton Berch", image: "pictures/TB2.png" },
    { name: "Turner Swistak", image: "pictures/TS34.png" },
	{ name: "Will Melby", image: "pictures/WM57.png" },
    { name: "Will Safford", image: "pictures/WS3.png" }

];


let currentRound = 1;
let score = 0;
let currentPlayer;
let attempts = 0;
const totalRounds = 10;

const playerImage = document.getElementById("player-image");
const guessInput = document.getElementById("guess-input");
const submitGuessButton = document.getElementById("submit-guess");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const roundDisplay = document.getElementById("round");
const nextRoundButton = document.getElementById("next-round-button");


function getRandomPlayer() {
    const remainingPlayers = players.filter(player => player !== currentPlayer);
    const randomIndex = Math.floor(Math.random() * remainingPlayers.length);
    currentPlayer = remainingPlayers[randomIndex];
    return currentPlayer;
}

function startGame() {
    if (currentRound > totalRounds) {
        alert(`Game over! Your final score is ${score}`);
        return;
    }

    const player = getRandomPlayer();

    // Blur the image first
    playerImage.style.transition = "filter 0.05s ease"; // Longer transition for reveal
    playerImage.style.filter = "blur(20px)"; // Start with maximum distortion

    // Load the new image
    const img = new Image();
    img.onload = function() {
        playerImage.src = img.src;
    };
    img.src = player.image;

    feedback.textContent = "";
    guessInput.value = "";
    attempts = 0;
    roundDisplay.textContent = `Round: ${currentRound}/10`;
}


submitGuessButton.addEventListener("click", () => {
    const guess = guessInput.value.trim().toLowerCase();
    const playerName = currentPlayer.name.toLowerCase();

    if (guess === playerName) {
        score += 10; // Points for a correct guess
        feedback.textContent = `Correct! The player was ${currentPlayer.name}.`;
        scoreDisplay.textContent = `Score: ${score}`;
        playerImage.style.filter = "blur(0px)"; // Deblur the image

        // Show the "Go to next round" button
        nextRoundButton.style.display = "block";
        submitGuessButton.style.display = "none";

    } else {
        attempts++;
        if (attempts < 3) {
            playerImage.style.filter = `blur(${20 - attempts * 7}px)`; // Reduce distortion with each guess
            feedback.textContent = "Try again!";
            
        } else {
            feedback.textContent = `Wrong! The correct answer was ${currentPlayer.name}.`;
            

             // Display the image without blur
             playerImage.style.transition = "filter 1s ease"; // Longer transition for reveal
             playerImage.style.filter = "blur(0px)"; // Remove blur effect

            // Show the "Go to next round" button
            nextRoundButton.style.display = "block";
            submitGuessButton.style.display = "none";
        }
    }
});

// Event listener for the "Go to next round" button
nextRoundButton.addEventListener("click", () => {
    currentRound++;
    startGame();

    // Hide the "Go to next round" button again
    nextRoundButton.style.display = "none";
    submitGuessButton.style.display = "block";
});


// Populate the autocomplete list
const playerNamesDatalist = document.getElementById('player-names');

guessInput.addEventListener('input', () => {
    const input = guessInput.value.trim().toLowerCase();

    // Clear previous datalist options
    playerNamesDatalist.innerHTML = '';

    if (input.length > 0) {
        players
            .filter(player => player.name.toLowerCase().includes(input))
            .forEach(player => {
                const option = document.createElement('option');
                option.value = player.name;
                playerNamesDatalist.appendChild(option);
            });
    }
});

// Start the first round
startGame();
