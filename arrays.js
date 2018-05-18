var chocolateBars = ["snickers"[0], "hundred grand"[1], "" "skittles"];

function addElementToBeginningOfArray(chocolateBars){
return ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars){
return [...chocolateBars, "foo"];
}

function destructivelyAddElementToEndOfArray(chocolateBars){
chocolateBars.push("foo");
return chocolateBars;
}

function accessElementInArray(chocolateBars, 
console.log(chocolateBars 
}