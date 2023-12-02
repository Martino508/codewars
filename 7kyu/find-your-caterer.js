/**
 * You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a
 * basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one
 * has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is
 * greater than 60. You want to spend the maximum that fits into the budget.
 *
 * The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three
 * caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets
 * from the first caterer.
 *
 * Number of orders is always equal to number of people.
 *
 * For example,
 *
 *
 * budget, people => (200, 9) will return 2.
 *
 * budget, people => (300, 9) will return 3 and so on.
 */

//My Solution -- DIDNT WORK

/*function findCaterer(budget, people){
    let caterer = -1
    if (people <= 0 || isNaN(people) || !isFinite(people)) {
         -1;
    }
    let pricePerHead = budget / people
    let over60Heads
    if (people > 60) {
        // over60Heads = pricePerHead * 1.2
        over60Heads = (people * 30) * 0.8
    }
    if (over60Heads/people < pricePerHead ||pricePerHead >= 30)
        caterer = 3
    else if (pricePerHead >= 20){
        caterer = 2
    } else if(pricePerHead >= 15) {
        caterer = 1
    } else if (pricePerHead == undefined){
        caterer = -1
    } else {
        caterer = -1
    }
    return caterer;
}

console.log(findCaterer(100, 0))*/

//BEST PRACTICE

function findCaterer(budget, people){
    if (budget < 15 || people < 1) {
        return -1;
    }

    if (people * (people > 60 ? 24 : 30) <= budget ) {
        return 3
    }

    if (people * 20 <= budget ) {
        return 2
    }

    if (people * 15 <= budget ) {
        return 1
    }

    return -1;
}