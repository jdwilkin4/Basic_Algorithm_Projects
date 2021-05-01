// recursive case
const factorialize = (num) => {
  
  //base case
  if (num === 0) {
    return 1;
    
    //recursive case
  } else {
    return num * factorialize(num - 1);
  }
};

factorialize(5);

//recursive case using the ternary operator
const factorialize = (num) =>  num === 0 ? 1 : num * factorialize(num - 1)

factorialize(5);
