ranNum()

function ranNum() {
    const minNum = 1;
    const maxNum = 100;
    const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    let result = document.getElementById("result")
    let attempts = 0;
    let guess;
    let running = true;

    document.getElementById("randomNumBtn").onclick = function () {


        guess = document.getElementById("rndmGuessNum").value;
        guess = Number(guess);
        console.log(typeof guess, guess)

        running = false;
        if (guess > maxNum) {
            result.innerText = "You CAN'T guess higher than 100"
        }
        else if (guess === 0) {
            result.innerText = "Type a Number to start playing"
        } else if (guess < minNum) {
            result.innerText = "You CAN'T guess lower than 1"

        } else {
            if (guess < answer) {
                result.innerText = "higher"
                attempts++
            } else if (guess > answer) {
                result.innerText = "lower"
                attempts++
            } else {
                result.innerHTML = "YAY YOU WON!!!" + "it took " + attempts + " Attempts for you to win." + "<br>" + "reload the page to play again."
            }
        }
    }
}

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="Dice_images/${value}.svg" alt"Dice: ${value}">`)
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join(" ")
}

function clockTime() {
    const now = new Date()
    let hours = now.getHours().toString().padStart(2, 0)
    let meridium; if (hours <= 12) {
        meridium = "PM"
    } else { meridium = "AM" }
    let minutes = now.getMinutes().toString().padStart(2, 0)
    let seconds = now.getSeconds().toString().padStart(2, 0)
    document.getElementById("Clock").innerHTML = `Time:<br>${hours}:${minutes}:${seconds}${meridium}`
}
clockTime()
setInterval(clockTime, 1000)
function counter() {
    let count = 1;
    let Count = document.getElementById("count")
    document.getElementById("countIncrease").onclick = function () {
        count = count + 1;
        Count.innerText = count
    }
    document.getElementById("countDecrease").onclick = function () {
        count = count - 1;
        count <= 0 ?
            count = 0 : Count.innerText = count;
        Count.innerText = count
    }
    document.getElementById("countReset").onclick = function () {
        count = 0;
        Count.innerText = count
    }
    document.getElementById("countSave").onclick = function () {
        localStorage.setItem("count", count)
        Count.innerText = count
    }
    document.getElementById("countLoad").onclick = function () {
        count = localStorage.getItem("count")
        count = +count
        Count.innerText = count
    }
}
counter()