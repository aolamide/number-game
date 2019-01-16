//Declare variables
const userInput = document.querySelector("input");
const form = document.querySelector("form");
const validation = document.getElementById("validation");
const gameStatus = document.querySelector(".status");
const guessButton = document.getElementById("submit");
const guessesLeft = document.querySelector(".guessleft");
const playAgain = document.getElementById("openModal");
const playAgainButton = document.getElementById("playAgain");
const resultsTable = document.querySelector("table");
const winningNumberDisplay = document.getElementById("winningNumber");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("closeModal")[0];
let guess = 7;
//Generate a random four digits number i.e the winning number
const generateWinningNumber = () => {
	const numbers = ["0","1","2","3","4","5","6","7","8","9"];
	let winningNumber = ""
	let ini = 10;
	for (let i = 0; i < 4; i++) {
		let index = Math.floor(Math.random() * ini);
		winningNumber += numbers[index];
		numbers.splice(index, 1);
		ini--;
	}//If generated number starts with 0, replace the 0 with another number not already picked
	if (winningNumber.startsWith("0")){
		winningNumber = winningNumber.replace("0", numbers[Math.floor(Math.random() * 6)]);
	}
	return winningNumber;
}
let generatedWinningNumber = generateWinningNumber();
//Tasks to perform when user submits a guess
const game = (e) => {
	e.preventDefault();
	const pass = validateInput();
	if(!pass || userInput.value.startsWith("0")){ 
		validation.innerText = "Rules : \n Don't repeat a number twice\n Number can't start with 0\n Number must consist four digits "
	}else{
		validation.innerText = "";
		let D = 0;
		let W = 0;
		for (let i = 0; i < 4; i++){
			if(userInput.value[i]==generatedWinningNumber[i]){
				D++;
			}else if(generatedWinningNumber.includes(userInput.value[i])){
				W++;
			}
		}
		if(D == 4){
			appenduserInput(D, W);
			guess--;
			guessesLeft.innerText = guess;
			gameStatus.classList.add("green");
			gameStatus.innerText = "YOU WIN!!!";
			guessButton.setAttribute("disabled","disabled");
			userInput.setAttribute("disabled","disabled");
			playAgain.style.display = "block";
		}else{
			appenduserInput(D, W);
			guess--;
			guessesLeft.innerText = guess;
			if(guess==0){
				gameStatus.classList.add("red");
				gameStatus.innerText = "YOU LOSE!!!";
				winningNumberDisplay.innerText = `Number is : ${generatedWinningNumber}`;
				guessButton.setAttribute("disabled","disabled");
				userInput.setAttribute("disabled","disabled");
				playAgain.style.display = "block";
			}
		}
	}
	userInput.value = "";
}
form.addEventListener("submit", game);
//Make sure user input passes all conditions
const validateInput = () => {
	let passes;
	for (let i of userInput.value) {
		if (((userInput.value.split(i).length) !== 2) || userInput.value.length != 4){
			passes = false;
			break;	
		}
		else{
			passes = true;
		}
	}
	return passes;
}
playAgain.addEventListener("click", () => {
	modal.style.display = "block";
})
closeModal.addEventListener("click", () => {
	modal.style.display = "none";
})
playAgainButton.addEventListener("click", () => {
	modal.style.display = "none";
	return replay();
});

//Appending user input to guesses table
const appenduserInput = (D,W) => {
	let tr = document.createElement("tr");
	let userTd = document.createElement("td");
	userTd.textContent = userInput.value;
	tr.appendChild(userTd);
	let resultTd = document.createElement("td");
	resultTd.textContent = D + " dead  "+ W + " wounded";
	tr.appendChild(resultTd);
	tr.classList.add("new");
	resultsTable.appendChild(tr);
}

//What to do if user chooses to play again after one game ends
const replay = () => {
	playAgain.style.display ="none";
	guessButton.removeAttribute("disabled");
	const existingData = document.querySelectorAll(".new");
	const existingTable = document.querySelector("table");
	for (let i of existingData) {
		existingTable.removeChild(i);
	}
	userInput.removeAttribute("disabled");
	generatedWinningNumber = generateWinningNumber();
	gameStatus.innerText="";
	winningNumberDisplay.innerText="";
	gameStatus.removeAttribute("class");
	guess = 7;
	guessesLeft.innerText = guess;
}

//
console.error("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
console.warn("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
console.error("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
//