dateNumericToAlpha();


function dateNumericToAlpha(){

alert ('Lets convert numeric date to alphabetical')

const day = prompt ('Please, type the day')
let month = prompt ('now, the number of the month')
const year = prompt ('lastly, the year.')

//let monthAlpha = selectingMonth(month);

    switch (month){

        case '01':
            month = 'january'
        break;

        case '02':
            month = 'february'
        break;
        
        case '03':
        month = 'march'
        break;
        
        case '04':
        month = 'april'
        break;
        
        case '05':
        month = 'may'
        break;
        
        case '06':
        month = 'june'
        break;
        
        case '07':
        month = 'july'
        break;
        
        case '08':
        month = 'august'
        break;
        
        case '09':
        month = 'september'
        break;
        
        case '10':
        month = 'october'
        break;
        
        case '11':
        month = 'november'
        break;

        case '12':
        month = 'december'
        break;
    }
    
return (`Day is ${day} of ${month} of the year ${year}.`)
}