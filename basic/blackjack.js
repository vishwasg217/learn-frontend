let cardsEl = document.getElementById('cards')
let resultEl = document.getElementById('result');

let playerCards = [];

// random num between 2-11
function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2;
}

function display(message) {
    let cardString = "";
    playerCards.forEach((card, index) => {
        if (index === 0) {
            cardString += card;
        }
        else {
            cardString += ` - ${card}`;
        }
    });
    cardsEl.innerText = cardString;
    resultEl.innerText = message;

}

function dealCards() {
    playerCards[0] = getRandomCard();
    playerCards[1] = getRandomCard();
    checkResult()
}

dealCards()


function reset() {
    playerCards = [];
    resultEl.innerText = "Result: ";
    dealCards()
}

function checkResult(sum) {
    if ( sum > 21 ) {
        display("Bust! You Lost!");
        disableButtons()
    }
    else if (sum === 21) {
        display("You Won!!!");
        disableButtons()
    }
    else {
        display("SAFE");
    } 
}

function hit() {
    playerCards.push(getRandomCard())
    let sum = playerCards.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    checkResult(sum)
}

function standUp() {
    resultEl.innerText = "Result: Awesome!"
    disableButtons()
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'reset-button') {
            button.disabled = true;
        }
    });
}
