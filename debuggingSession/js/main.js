/*function repeatCounter (string, repeatedWord){
    let wordContainer = ""
    let repeatCounter = 0
    let spaceContainer = ""

    for (i=0; i<string.length; i++){
    debugger
    if (string[i] !== " "){
        wordContainer += string[i]
    }
    else {
        if (wordContainer === repeatedWord){
            repeatCounter++
            wordContainer = ""
            spaceContainer = string[i]
        }
        else {
            wordContainer = ""
        }
        }
    }
    if (wordContainer === repeatedWord){
        repeatCounter++
    }
    return repeatCounter
}

    repeatCounter ("hola mundo adios mundo", "mundo")



    /*6 crear una funcion que cuente el numero de veces que se reptie una palabra en un string
    P.E: f("hola mundo adios mundo","mundo") = 2 */


/*function repeatCounter (string, repeatedWord){
    let wordContainer = ""
    let repeatCounter = 0
    let spaceContainer = ""

    for (i=0; i<string.length; i++){
    
        if (i !== string.length-1){
            if (string[i] !== " "){
            wordContainer += string[i]
            }   
        else {
            if (wordContainer === repeatedWord){
                repeatCounter++
                wordContainer = ""
                spaceContainer = string[i]
            }
            else {
                wordContainer = ""
            }
        }
        }
        else {
            wordContainer += string[i]
            if (wordContainer === repeatedWord){
                repeatCounter++
            }
        }    
    }

    
    return repeatCounter
}

    repeatCounter ("hola mundo adios mundo", "mundo")*/



    function factorialCalculator (factorialNumber){
        let currentMultiplier = factorialNumber

        for (let i = factorialNumber-1; i>0; i--){
          currentMultiplier *= i
        }

        return currentMultiplier
    }