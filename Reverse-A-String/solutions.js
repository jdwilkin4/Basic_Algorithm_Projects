// brute force solution using for loop
const reverseString = (str) => {
  
  let reversedStr = "";

  //str.length - 1 = last index number

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  console.log(reversedStr);
  return reversedStr;
};

// using built in JavaScript reverse method without chaining
const reverseString = (str) => {
  // Step 1: convert string into array
  // Step 2: reverse the array
  // Step 3: convert array to string and concatenate elements together
  // Step 4: return result

  let splitStr = str.split("");
  console.log(splitStr); // [ 'h', 'e', 'l', 'l', 'o' ]
  
  let reversedArrOfChars = splitStr.reverse();
  console.log(reversedArrOfChars); // [ 'o', 'l', 'l', 'e', 'h' ]
  
  let reversedStr = reversedArrOfChars.join(""); // olleh
  console.log(reversedStr);

  return reversedStr;
};

//using built in JavaScript reverse method with chaining 
const reverseString = (str) => str.split("").reverse().join("");




