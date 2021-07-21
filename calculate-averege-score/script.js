/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

'use strict';

// * Round Points of each Team
const roundScores = {
    "dolphins": {
        "roundOne": 97,
        "roundTow": 112,
        "roundThree": 101
    },
    "koalas": {
        "roundOne": 109,
        "roundTow": 95,
        "roundThree": 123
    }
}

// * Average score calculation
const averageScore = function (roundOne, roundTow, roundThree) {
    return (roundOne + roundTow + roundThree) / 3
};

// * Saving the score of each Team
const averageScoreDolphins =
    averageScore(roundScores.dolphins.roundOne, roundScores.dolphins.roundTow, roundScores.dolphins.roundThree);

const averageScoreKoalas =
    averageScore(roundScores.koalas.roundOne, roundScores.koalas.roundTow, roundScores.koalas.roundThree);

// * score output
console.log(`Dolphins: ${averageScoreDolphins} Points`);
console.log(`Koalas: ${averageScoreKoalas} Points`);

// * Determine the winner of two teams
const determineWinner = function () {
    if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
        return `The winner are the Dolphins with ${(averageScoreDolphins)} Points`;
    } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
        return `The winner are the Koalas with ${(averageScoreKoalas)} Points`;
    } else if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= 100 && averageScoreKoalas >= 100)) {
        return `There is a draw Dolphins ${averageScoreDolphins} : Koalas ${averageScoreKoalas}`
    }
    return `No one has achieved a score of at least 100 (Dolphins ${ averageScoreDolphins } : Koalas ${ averageScoreKoalas }).
        There is no winner!`;
}
        
// * winner output
console.log(determineWinner());