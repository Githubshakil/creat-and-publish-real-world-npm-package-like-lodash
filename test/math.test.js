const { add, multiply } = require("../src/utils/math.js");

test("The Sum of two Numbers", () => {
   expect(add(6, 4)).toEqual(10);
  
});
test("The Sum of two Numbers", () => {
    expect(multiply(6,4)).toEqual(24);
  
});
