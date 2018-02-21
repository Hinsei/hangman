function Draw() {
  this.canvas = document.getElementById("stickman");

  this.draw = function draw(pathFromx, pathFromy, pathTox, pathToy) {
    context = this.canvas.getContext("2d") 
    context.beginPath()
    context.moveTo(pathFromx, pathFromy)
    context.lineTo(pathTox, pathToy)
    context.stroke()
    context.closePath()
  }.bind(this)

  this.head = function head() {
    context = this.canvas.getContext("2d")
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
    context.closePath()
  }.bind(this)

  this.clear = function clear() {
    context = this.canvas.getContext("2d")
    context.clearRect(0, 0, 1000, 1000)
  }.bind(this)


  this.animate = function(lives) {
    this.drawArray[lives]() 
  }.bind(this)

  this.frame1 = function frame1() {
    this.draw(0, 150, 150, 150)
  }.bind(this)

  this.frame2 = function frame2() {
    this.draw(10, 0, 10, 600)
  }.bind(this)

  this.frame3 = function frame3() {
    this.draw(0, 5, 70, 5)
  }.bind(this)

  this.frame4 = function frame4() {
    this.draw(60, 5, 60, 15)
  }.bind(this)

  this.torso = function torso() {
    this.draw(60, 36, 60, 70)
  }.bind(this)

  this.rightArm = function rightArm() {
    this.draw(60, 46, 100, 50)
  }.bind(this)

  this.leftArm = function leftArm() {
    this.draw(60, 46, 20, 50)
  }.bind(this)

  this.rightLeg = function rightLeg() {
    this.draw(60, 70, 100, 100)
  }.bind(this)

  this.leftLeg = function leftLeg() {
    this.draw(60, 70, 20, 100)
  }.bind(this)

  this.drawArray = [this.rightLeg, this.leftLeg, this.rightArm, this.leftArm, this.torso, this.head,
                    this.frame4, this.frame3, this.frame2, this.frame1]
}
