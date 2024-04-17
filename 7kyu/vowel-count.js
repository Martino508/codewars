/*
Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//SOLUTION

function getCount(str) {
    vowel = ['a', 'e', 'i', 'o', 'u']
    count = 0
    str.split('').forEach(e => {
        vowel.includes(e) ? count += 1 : count
    })

    return count
}
