const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const description = document.querySelector(".description");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            description.classList.add("fadeOut")
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = '';
            });
        });

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                compareHands(this.textContent, computerChoice);

                playerHand.src = `./Images/${this.textContent}.png`;
                computerHand.src = `./Images/${computerChoice}.png`;
                const winningMessageElement = document.getElementById('winningMessage');
                const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

                if(pScore === 10) {
                    winningMessageTextElement.innerText = 'Congrats You Won!🎉'
                    winningMessageElement.classList.add('show');
                    return;
                }
                if(cScore === 10) {
                    winningMessageTextElement.innerText = 'Oops😑 Computer Wins!'
                    winningMessageElement.classList.add('show');
                    return;
                }
                }, 1500);

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};

game();


