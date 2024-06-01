/*
Description
 Complete the function/method so that it returns the url with anything after the anchor (#) removed.

 Examples

 "www.codewars.com#about" --> "www.codewars.com"
 "www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */


//BEST PRACTICE
function removeUrlAnchor(url){
    return url.split('#')[0];
}

//MY SOLUTION
function removeUrlAnchor(url){
    let newURL
    if (url.includes("#")) {
        let hash = "#"
        hashIndex = url.indexOf(hash)
        newURL = url.slice(0, hashIndex)
        return newURL
    } else {
        return url
    }
}