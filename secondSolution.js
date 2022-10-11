const array = [-2, -1];

const squares = array.map((numb) => numb * numb);

squares.sort((a, b) => a - b);

console.log("squares", squares);
