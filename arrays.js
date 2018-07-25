var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var additionalChocolateBars = [element, ...chocolateBars]
  return additionalChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = [element, ...chocolateBars]
  return chocolateBars
  
}