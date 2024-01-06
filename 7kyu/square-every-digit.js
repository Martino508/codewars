/*
 Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

 For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

 Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

 Note: The function accepts an integer and returns an integer.

 P:argument will be an integer
 R:result will be an integer
 E:555 -> 252525
 P: - Single out every number from the argument using toString and split methods
    - Take the num and square it
    - Push into array
    - join the nums
 */

//My Try
/*function squareDigits(num){
    let numArray = num.toString().split('')
    numArray.map(num => {
        return Math.pow(Number(num), 2)
    })

    console.log(numArray)
}*/


//Best Practices
/*function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}*/

function squareDigits(num){
    return +num
        .toString()
        .split('')
        .map(i =>
            i*i)
        .join('');
}

console.log(squareDigits(9199))