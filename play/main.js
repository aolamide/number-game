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
	const numbers = ["1","2","3","4","5","6","7","8","9"];
	let winningNumber = ""
	let init = 9;
	for (let i = 0; i < 4; i++) {
		let index = Math.floor(Math.random() * init);
		winningNumber += numbers[index];
		numbers.splice(index, 1);
		init--;
	}
	return winningNumber;
}
let generatedWinningNumber = generateWinningNumber();
//Tasks to perform when user submits a guess
const game = (e) => {
	e.preventDefault();
	const { passes, message } = validateInput();
	if(!passes){ 
		validation.innerText = message;
	}else{
		validation.innerText = "";
		let dead = 0;
		let wounded = 0;
		for (let i = 0; i < 4; i++){
			if(userInput.value[i]==generatedWinningNumber[i]){
				dead++;
			}else if(generatedWinningNumber.includes(userInput.value[i])){
				wounded++;
			}
		}
		if(dead == 4){
			appenduserInput(dead, wounded);
			guess--;
			guessesLeft.innerText = guess;
			gameStatus.innerText = "YOU WIN!!!";
			guessButton.setAttribute("disabled","disabled");
			userInput.setAttribute("disabled","disabled");
			playAgain.style.display = "block";
		}else{
			appenduserInput(dead, wounded);
			guess--;
			guessesLeft.innerText = guess;
			if(guess==0){
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
	let passes = true, message;
	if(userInput.value.length !== 4) {
		passes = false;
		message = 'You must enter four digits.';
	}
	else if(userInput.value.startsWith("0")) {
		passes = false;
		message = 'Guess cannot start with 0.';
	} else {
		for (let i of userInput.value) {
			if (((userInput.value.split(i).length) !== 2)){
				passes = false;
				message = 'A number cannot appear twice.'
				break;	
			}
		}
	}
	
	return { passes, message };
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
const appenduserInput = (dead, wounded) => {
	let tr = document.createElement("tr");
	let userTd = document.createElement("td");
	userTd.textContent = userInput.value;
	tr.appendChild(userTd);
	let resultTd = document.createElement("td");
	resultTd.textContent = dead + " dead  "+ wounded + " wounded";
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


console.error("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
console.warn("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
console.error("HEY DEVELOPER, HOPE YOU'VE NOT COME HERE TO CHECK THE WINNING NUMBER.\nGET BACK TO THE GAME HAHA");
