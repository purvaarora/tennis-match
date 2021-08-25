/*
Write a program that simulates a simple tennis game. 
* Scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively. 
* If at least three points have been scored by each side and a player has one more point than his opponent, 
the score of the game is “advantage” for the player in the lead. 
* If at least three points have been scored by each player,  and the scores are equal, the score is “deuce”. 
* A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
*/
var isGameEnded = false
var scores = ["love", "fifteen", "thirty", "forty"]

function Player (name, points) {
    this.name = name
    this.points = points   
}

Player.prototype.addScore = function () {
    !isGameEnded && this.points++
}

Player.prototype.getScores = function () {
    console.log(this.name+" scored: "+scores[this.points])
}

var p1 = new Player('Purva', 0)
var p2 = new Player('Akanksha', 0)

function getTennisOutcome (player1, player2) {
    if ((player1.points >= 4 || player2.points >= 4) && Math.abs(player1.points - player2.points) >= 2) {
        var winner = player1.points > player2.points ? player1 : player2
        console.log(winner.name + " has won with a total of " + winner.points)
        isGameEnded = true
    } else if (player1.points >= 3 && player2.points >= 3) {
        if (player1.points === player2.points) {
            console.log("deuce")
        } else if (Math.abs(player1.points - player2.points) === 1) {
            var winner = player1.points > player2.points ? player1.name : player2.name
            console.log(winner + " has advantage")
        } 
    } else {
        player1.getScores()
        player2.getScores()
    }
}

getTennisOutcome(p1, p2)
console.log('-------------')
p1.addScore()

getTennisOutcome(p1, p2)

console.log('-------------')
p1.addScore()
getTennisOutcome(p1, p2)

console.log('-------------')
p2.addScore()
getTennisOutcome(p1, p2)
console.log('-------------')
p2.addScore()
getTennisOutcome(p1, p2)

console.log('-------------')
p1.addScore()
getTennisOutcome(p1, p2)
console.log('-------------')
p2.addScore()
getTennisOutcome(p1, p2)

p2.addScore()

console.log('-------')

getTennisOutcome(p1, p2)
p1.addScore()

console.log('-------')

getTennisOutcome(p1, p2)

p1.addScore()

console.log('-------')

getTennisOutcome(p1, p2)

p1.addScore()

console.log('-------')

getTennisOutcome(p1, p2)

p1.addScore()

console.log('-------')

getTennisOutcome(p1, p2)



