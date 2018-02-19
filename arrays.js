var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
const array = [1];

var addElementToBeginningOfArray = (array, element) => {

array = [element , ...array];

  return array;
}

var destructivelyAddElementToBeginningOfArray = (array, element) =>{
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = (array, element) =>{
  array = [...array, element];
    return array;
}
