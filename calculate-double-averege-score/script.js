/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/

'use strict';

// * Round Points of each Team
const roundScores = {
    "dolphins": {
        "roundOne": 23,
        "roundTow": 34,
        "roundThree": 33
    },
    "koalas": {
        "roundOne": 85,
        "roundTow": 54,
        "roundThree": 41
    }
}

// * Average score calculation
const calcAverage = (roundOne, roundTow, roundThree) => (roundOne + roundTow + roundThree) / 3;

// * Save Score form each Team
const averageScoreDolphins = calcAverage(roundScores.dolphins.roundOne, roundScores.dolphins.roundTow, roundScores.dolphins.roundThree)
const averageScoreKoalas = calcAverage(roundScores.koalas.roundOne, roundScores.koalas.roundTow, roundScores.koalas.roundThree)

// * saves the winner if they have twice as many points as the other team
const checkWinner = function(averageScoreDolphins, averageScoreKoalas) {
    if (averageScoreDolphins >= averageScoreKoalas * 2) {
        return `Dolphins win (${averageScoreDolphins} vs. ${averageScoreKoalas})`
    } else if (averageScoreKoalas >= averageScoreDolphins * 2) {
        return `Koalas win (${averageScoreKoalas} vs. ${averageScoreDolphins})`
    } else {
        return 'No team wins';
    }
}

// * Winner output with the Score
console.log(checkWinner(averageScoreDolphins, averageScoreKoalas))
