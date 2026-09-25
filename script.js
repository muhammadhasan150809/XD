
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

ranNum()

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
    if (numOfDice > 6) {
        diceResult.textContent = `you CAN'T ROLL more than 6 dice`
        diceImages.innerHTML = `<h1>you CAN'T HAVE more than 6 DICE</h1>`
    } else {
        diceResult.textContent = `Dice: ${values.join(", ")}`
        diceImages.innerHTML = images.join(" ")
    }
}

function clockTime() {
    const now = new Date()
    let hours = now.getHours().toString().padStart(2, 0)
    let meridium; if (hours <= 12) {
        meridium = "AM"
    } else { meridium = "PM" }
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


function stopWatch() {
    const Display = document.getElementById("stopWatchDisplay")
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    document.getElementById("stopWatchStrt").onclick = () => {
        if (!isRunning) {
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10);
            isRunning = true
        }
    }
    document.getElementById("stopWatchStop").onclick = () => {
        if (isRunning) {
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false
        }

    }
    document.getElementById("stopWatchReset").onclick = () => {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        Display.innerHTML = `00:00:00:00`
    }
    function update() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
        let seconds = Math.floor((elapsedTime / 1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        Display.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`
    }
}
stopWatch()


const Displaycalc = document.getElementById("calcDisplay")

function appendToDisplay(input) {
    Displaycalc.value += input
}

function clearCalcDisplay() {
    Displaycalc.value = "";
    console.log(Displaycalc)
}

function calculate() {
    Displaycalc.value = eval(Displaycalc.value)
}


const weatherForm = document.querySelectorAll(".weatherForm")
const cityInput = document.querySelectorAll(".cityInput")
const card = document.querySelectorAll(".card")
const weatherAPI = "d7e859a4c8e3eb5b7219223fd629238d"



async function getWeatherData(city) {

}


const user = [{
    name: "Natsuki Subaru",
    age: 17,
    RBD: true,
    isStrongest: true,
    isMarried: false
}, {
    name: "Emilia",
    age: 114,
    RBD: false,
    isStrongest: false,
    isMarried: false
}, {
    name: "rem",
    age: 17,
    RBD: false,
    isStrongest: false,
    isMarried: false
}, {
    name: "Nobita",
    age: 10,
    RBD: false,
    isStrongest: false,
    isMarried: false
}, {
    name: "Doraemon",
    age: 2,
    RBD: false,
    isStrongest: true,
    isMarried: false
}]

const displayChar = document.getElementById("displayChar");

let charCount = 0;

function displayCharacter() {
    const chars = document.getElementById("chars")

    const character = user[charCount]
    

    if (charCount === 0) {

        const li = document.createElement("li")

        li.innerHTML = `Name: ${character.name} <br><br>
                        Age: ${character.age}<br>
                        have return by death: ${character.RBD}<br>
                        they are strongest: ${character.isStrongest}<br>
                        they are married: ${character.isMarried}<br><br>`

        chars.appendChild(li)
        charCount++
    }else if  (charCount === 1) {

        const li = document.createElement("li")

        li.innerHTML = `Name: ${character.name} <br><br>
                        Age: ${character.age}<br>
                        have return by death: ${character.RBD}<br>
                        they are strongest: ${character.isStrongest}<br>
                        they are married: ${character.isMarried}<br><br>`

        chars.appendChild(li)
        charCount++

    }else if (charCount === 2) {

        const li = document.createElement("li")

        li.innerHTML = `Name: ${character.name} <br><br>
                        Age: ${character.age}<br>
                        have return by death: ${character.RBD}<br>
                        they are strongest: ${character.isStrongest}<br>
                        they are married: ${character.isMarried}<br><br>`

        chars.appendChild(li)
        charCount++
    }else if (charCount === 3) {

        const li = document.createElement("li")

        li.innerHTML = `Name: ${character.name} <br><br>
                        Age: ${character.age}<br>
                        have return by death: ${character.RBD}<br>
                        they are strongest: ${character.isStrongest}<br>
                        they are married: ${character.isMarried}<br><br>`

        chars.appendChild(li)
        charCount++
    }else if (charCount === 4) {

        const li = document.createElement("li")

        li.innerHTML = `Name: ${character.name} <br><br>
                        Age: ${character.age}<br>
                        have return by death: ${character.RBD}<br>
                        they are strongest: ${character.isStrongest}<br>
                        they are married: ${character.isMarried}<br><br>`

        chars.appendChild(li)
        charCount = 0
    }
}
