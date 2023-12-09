
/*

 This time no story, no theory. The examples below show you how to write function accum:

 Examples:

 accum("abcd") -> "A-Bb-Ccc-Dddd"
 accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt") -> "C-Ww-Aaa-Tttt"
 The parameter of accum is a string which includes only letters from a..z and A..Z.

 P: any combination of letters, also no limit to the letters, comes in as a string
 ex. aaHHhnnJjop

 R: get x amount of letters according to its index, seperated by dash, that the first letter is also capitalized

 E: 'Abgh' - 'A-Bb-Ggg-Hhh'

 P: 1. seperate the string by character
 2. array slice.toUppercase
 3.array map => multiply each by i + 1.
 4.array join by -


 */


/* My Solution DNW
function accum(s) {
    return s
        .split('')
        .map((elem, i) => {
            elem[0].toUpperCase() + elem[0] * (i + 1)
        })
        .join('-')


}
console.log(accum("ZpglnRxqenU"))
*/

//Best Practice

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("ZpglnRxqenU"))