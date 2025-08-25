const { add, multiply, ceil } = require("../src/utils/math.js");

test("The Sum of two Numbers", () => {
   expect(add(6, 4)).toEqual(10);
  
});
test("The Sum of two Numbers", () => {
    expect(multiply(6,4)).toEqual(24);
  
});
test("The Sum of two Numbers", () => {
    expect(ceil(4.9)).toEqual(5);
  
});


