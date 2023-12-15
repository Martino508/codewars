/**
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is
 * odd, return the middle character. If the word's length is even, return the middle 2 characters.
 *
 *     #Examples:
 *
 * Kata.getMiddle("test") should return "es"
 *
 * Kata.getMiddle("testing") should return "t"
 *
 * Kata.getMiddle("middle") should return "dd"
 *
 * Kata.getMiddle("A") should return "A"
 * #Input
 *
 * A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due
 * to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need
 * to worry about your solution timing out.
 *
 *     #Output
 *
 * The middle character(s) of the word represented as a string.
 */


/*
P - any string
R - one char if odd or two char if even (string length). Will be the middle char or middle and +1 char
E - 'middle' will return 'dd', should return one string
Pseudo:

- get the length of the string and set a variable
- get that number and use % 2
- create an if conditional for the variable
    - if var  % 2 == 0, then it is even
        -get the index that is word[(var/2) - 1] + word[var/2]
    - if var  % 2 == 1, then it is odd
    -   get the index word[length.round() - 1]


 */

// MY SOLUTION - SOLVED
function getMiddle(s){
    let charLength = s.length
    if(charLength % 2 == 0) {
        return s[(charLength / 2) - 1] + s[charLength / 2]
    } else if (charLength % 2 > 0) {
        return s[Math.round(charLength/2) - 1]
    }
}

//BEST PRACTICE

/*
 function getMiddle(s)
 {
 return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
 }
 */