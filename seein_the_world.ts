

// store the location in a arry. make sure the array is not in alphabetical order.
let places : string [] = ['karachi sea ', "Do Talwar", 'Mazary Qiad', 'kolchi hotel' , 'view'];

// print your array in its original order
console.log('orignal ' +places);

// print your array in alphabetical order without modifying the actual list.
console.log('copy ' +[...places].sort().reverse());

// show that your array is still in its orginal order by printing it.
console.log('orginal ' +places);

// print your array in reverse alphabetical order without changing the order of the orginal list.
console.log('copy ' +[...places].sort().reverse());

// show that your array is still in its orginal order by printing it again.
console.log('orginal '+places);

// reverse the order of your list print tha array to show that its order has changed
console.log('copy ' +places.reverse());

//reverse the order of your list print tha array to show its back to its orginal order.
console.log('copy ' +places.reverse());

// sort your array so its stred in alphabatical order print the array to show that its order has been changed..
console.log('orginal '+places.sort());

//sort your array so its stred in alphabatical order print the array to show that its order has changed.

console.log('copy '+places.sort().reverse());
