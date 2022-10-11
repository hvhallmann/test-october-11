const array = [-10, -5, 0, 5, 10];

const squares = array.map((numb) => numb * numb);

squares.sort((a, b) => a - b);

console.log("squares", squares);
