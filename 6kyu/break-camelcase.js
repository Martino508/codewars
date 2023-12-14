/*
Complete the solution so that the function will break up camel casing, using a space between words.

    Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// complete the function

/*
-Split the string by '' to put into an array
-Use sort method to find uppercase character, which will be the 0 index
-Use that character in an indexOf or includes string method to the find the index of the char
-splice all the characters up to that index and then add the remaining characters
 */

/*
//My Solution - DNW - Accounted for only one camel case, not multiple

function solution(string) {
    let charArray = string.split('').sort()

    let capChar = charArray[0]
    if (charArray == 0) {
        return string
    }
    else if (capChar !== capChar.toUpperCase()) {
        return string
    }

    let capIndex = string.indexOf(capChar)
    let capString = `${string.slice(0, capIndex)} ${string.slice(capIndex, string.length)}`
    return capString
}

console.log(solution('myName'))*/


//BEST PRACTICE
function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

console.log(solution('myNameIsTino'))