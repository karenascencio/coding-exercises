function spaceCounter(array){

    let spaceIndex = array.reduce((accum, item, index) => item === " " ? [...accum, index] : accum, [])

    return spaceIndex
}

function spacePlacer(string){
    let stringIntoArray = string.split("").filter( item => item !== " ")
    let reverseArray = stringIntoArray.reverse() 
    let spaceIdexArray = spaceCounter(string.split(""))
    
    spaceIdexArray.forEach( item => reverseArray.splice(item, 0, " "))
    
    return reverseArray.join("")
}