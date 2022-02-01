//start witha class
class game {
  constructor() {
    this.title = 'Guess the Number!',
    //biigest number tioo pcik from the
      this.biggestNum = 5,
      //smallets number to pcik from
      this.smallestNum = 1,
      this.uknownNumber = null,
      //users input 
      this.usersInput = [],
      //checks users prevous guesses 
      this.previousGuesses = []
  }
  play() {
    //math.randowm pick an umber betwwen 1 and 5 
    this.uknownNumbe = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    this.guessNumber();
    this.checkGuess();
  }

  //stores every one of the user answers 
  playAgain() {
    this.usersInput = [],
      this.guessNumber();
    this.checkGuess();
  }


  guessNumber() {

    let pass = false;
//runs a while loops ot check if the numebr is enterd correctly or falsely
    while (pass === false) {
      //while the user puts in thew wrong asnwer itn will alert "invalid pealse try again"
      var enteredValue = prompt(`Choose a number between ${this.smallestNum} & ${this.biggestNum}`);
      if (enteredValue >= this.smallestNum && enteredValue <= this.biggestNum) {
        //check the enterd value chkcs if it is samlller then the biggesst number
        pass = true;
      } else {
        alert("Invalid Please Try Again.")
      }
    }

    this.usersInput.push(enteredValue);
    return enteredValue
  }



  checkGuess() {
    let test = this.usersInput;
    let oldNumbs = this.previousGuesses.push(test)

    if (this.uknownNumber.toString() == this.usersInput) {
      alert(`Winner Winner Chicken Dinner! You choose ${this.usersInput} & the computer choose ${this.uknownNumber}. It took you ${this.previousGuesses.length} try(s)!`)
      return
    }
    if (this.uknownNumber.toString() > this.usersInput) {
      alert(`Close one! Your guess was to low! Previous Guesses Include: ${this.previousGuesses.join(', ')}`)
      this.playAgain()
    }
    if (this.uknownNumber.toString() < this.usersInput) {
      alert(`Close one! Your guess was to high! Previous Guesses Include: ${this.previousGuesses.join(', ')}`)
      this.playAgain()
    }
  }
}

const newgame = new game();

newgame.play();

//help from zena