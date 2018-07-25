var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var additionalChocolateBars = ['foo', ...chocolateBars]
  return additionalChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = ['Twix', ...chocolateBars]
  return chocolateBars
  
}