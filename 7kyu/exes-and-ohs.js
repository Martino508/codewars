/*
 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

 Examples input/output:

 XO("ooxx") => true
 XO("xooxx") => false
 XO("ooxXm") => true
 XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 XO("zzoo") => false
 */

/* MY SOLUTION
function XO(str) {
    // let exCount = str.split('').filter(letter => letter.toLowerCase === 'x').length
    // let ohCount = str.split('').filter(letter => letter.toLowerCase === 'o').length
    let ohCount = str.split('').filter(letter => letter=== 'o' || letter=== 'O' ).length
    let exCount = str.split('').filter(letter => letter=== 'x' || letter=== 'X' ).length

    if (exCount === 0 && ohCount === 0) return true
    if (exCount !== ohCount || exCount === 0 || ohCount === 0) return false
    if (exCount === ohCount) return true

}
*/

//Best Practice
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO('asdgasdg'))