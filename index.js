function HangMan() {
  this.life = 10;
  this.guess = "";
  this.guessed = [];
  this.choosenCategory = null;
  this.categories = ["apple", "orange", "watermelon"]
  this.hints = ["Can be red or green", "It is orange", "Has black and green"]
  this.alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  this.categoryDOM = document.getElementById("category")
  this.hintDOM = document.getElementById("hint")
  this.boardDOM = document.getElementById("board")
  this.buttonDOM = document.getElementById("buttons")
  this.commentDOM = document.getElementById("comment")
  this.resetDOM = document.getElementById("reset")

  this.drawer = new Draw()

  this.init = function init() {
    this.pickCategory()
    this.renderAlphabets()
  }
this.guessBoard = function guessBoard() {
    var list = document.createElement("ul") 
    list.setAttribute("id", "guess-container")

    for(var i = 0; i < this.choosenCategory.length; i++){
      var space = document.createElement("li")
      space.setAttribute("class", "guess-space")
      space.innerHTML = "_"
      list.appendChild(space)
    }
    this.boardDOM.appendChild(list)
  }.bind(this)

  this.pickCategory = function pickCategory() {
    var targetIndex = Math.floor(Math.random() * this.categories.length)
    this.choosenCategory = this.categories[targetIndex]
    this.categoryDOM.innerHTML = this.choosenCategory
    this.guessBoard()
    this.hintDOM.innerHTML = this.hints[targetIndex]
  }.bind(this)

  this.renderAlphabets = function renderAlphabets() {
    var letters = document.createElement("ul")
    letters.setAttribute("id", "alphabet")
    
    for (var i = 0; i < this.alphabets.length; i++){
      var list = document.createElement("li")
      list.setAttribute("class", "letter")
      list.innerHTML = this.alphabets[i]
      list.onclick =  this.userGuess
      letters.appendChild(list)
    }
    this.buttonDOM.appendChild(letters)
  }.bind(this)

  this.check = function check() {
    this.comment()
    lists = document.getElementsByClassName("guess-space")
    var choosenCategory = this.choosenCategory
    this.guessed.forEach(function(alphabet) {
     for(var i = 0; i < choosenCategory.length; i++) {
      if(alphabet == choosenCategory[i]){
        lists[i].innerHTML = alphabet
      }
     }
    })
  }.bind(this)

  this.userGuess = function userGuess(e) {
    if(this.choosenCategory.indexOf(e.target.innerHTML) == -1) {
      this.life = this.life -1
      this.drawer.animate(this.life)
      this.comment()
    } else {
      this.guess = e.target.innerHTML
      this.guessed.push(this.guess)
      this.check()
    }
  }.bind(this)


  this.comment = function comment() {
    if(this.life == 0) {
      this.commentDOM.innerHTML = "You are dead"
      this.renderResetButton()
    } else {
      this.commentDOM.innerHTML = "You have " + this.life + " more lives"
    }
  }.bind(this)

  this.renderResetButton = function renderResetButton() {
    var resetButton = document.createElement("button")
    resetButton.innerHTML = "RESET"
    resetButton.onclick = this.reset
    this.resetDOM.appendChild(resetButton)
  }.bind(this)

  this.removeGuessContainer = function removeGuessContainer() {
    while(this.boardDOM.firstChild) {
      this.boardDOM.removeChild(this.boardDOM.firstChild)
    }
  }.bind(this)

  this.removeResetContainer = function removeResetContainer() {
    while(this.resetDOM.firstChild){
      this.resetDOM.removeChild(this.resetDOM.firstChild)
    }
  }.bind(this)

  this.reset = function reset() {
    this.life = 10
    this.guess = ""
    this.guessed = []
    this.removeGuessContainer()
    this.drawer.clear()
    this.comment()
    this.removeResetContainer()
    this.pickCategory()
  }.bind(this)
}

var hangMan = new HangMan()
if (document.getElementById("hangman")){
  hangMan.init()
}

