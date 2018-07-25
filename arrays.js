var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var additionalChocolateBars = [element, ...array]
  return additionalChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = [element, ...array]
  return chocolateBars
  
}