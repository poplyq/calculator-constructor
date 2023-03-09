
let newArray = []
let newNumber;

function addNumber(element, array) {

        console.log(element);
        console.log(array);
        array.push(element)
    
    return array
}
function expandNumber(element, array) {
 if (element === ".") {
    newNumber = array[array.length - 1].toString() + element
    array[array.length - 1] = newNumber
 } else if (array[0] === 0 && array[0] !== "0.") {
    console.log(array)
        array[0] = element
        console.log(array)
    } else {
    newNumber = array[array.length - 1].toString() + element
    array[array.length - 1] = newNumber
    }
    return array
}


export const mainLogicNumber = (element, array, isOption) => {
  if (array[array.length-1].toString().length <= 10){

console.log(array[array.length-1].toString().length);
    newArray = [...array]
    isOption ? newArray = [...addNumber(element, newArray)] : newArray = [...expandNumber(element, newArray)]
    array = newArray
}
    return array
}


export const mainLogicCulc = (array, option, isOption) => {

    let currentNumber;
  if (isOption === false ) {
        switch (option) {
            case 'add': currentNumber = (+array[0] + +array[1])
     
        
                break;
            case 'sub': currentNumber = (array[0] - array[1])

                break;
            case 'mult':
     
                 currentNumber = (array[0] * array[1])

                break;
            case 'div': currentNumber = (array[0] / array[1])
                array = [currentNumber]
                break;
             default:;
        }

       if ((currentNumber ^ 0) === currentNumber) {
        array = [currentNumber]
       } else {
          array = [Math.trunc(currentNumber * 100000000)/100000000] 
     
       }
    }

    return array
}


