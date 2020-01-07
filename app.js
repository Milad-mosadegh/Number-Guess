
const gameArea = document.querySelector(".game")
const btnOne = document.getElementById("btn-1")
const btnTow = document.getElementById("btn-2")
const message = document.querySelector(".message")
let numItem = document.getElementById("num-item")
let valItem = document.getElementById("val-item")
let gamePlay = false;
let score = 0;

numItem.min = 0;
valItem.min = 0

btnOne.addEventListener("click", () => {
    if (numItem.value === "" || valItem.value === "") {
        alert("Please Select Value for both sides ")
    }
    else if (!gamePlay) {
        gamePlay = true;
        score = 0;
        maker();
        btnOne.innerHTML = "Check Chance"
        document.getElementById("milad").style.transition = "2s";
        document.getElementById("milad").style.width = "70%";
        document.getElementById("milad").style.backgroundColor = "peru";
        document.getElementById("milad").style.borderRadius = "100px";

    } else {
        const numbers = document.querySelectorAll(".numb");
        score++;
        message.innerHTML = "Guesses : " + score;
        let winCondition = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";

            }
            if (winCondition == numbers.length) {
                alert("Concragulation to You. You Won in" + " " + score + " " + 'Guesses')

            }

        }

    }

    btnTow.addEventListener("click", () => {
        location.reload(false)
    })

    function maker() {
        for (let x = 0; x < numItem.value; x++) {
            let el = document.createElement("input")
            el.setAttribute('type', "number")
            el.max = 5;
            el.min = 0;
            el.size = 1;
            el.style.width = "50px"
            el.classList.add("numb");
            el.correct = Math.floor(Math.random() * valItem.value)
            console.log(el.correct);
            el.value = 0;
            el.order = x; // Baraye Estefade az klide TAB mibashad
            gameArea.appendChild(el)
        }

    }
})