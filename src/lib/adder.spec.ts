import adder from './adder';

describe("Adder", () => {
  test("Should add two numbers together", () => {
    expect(adder(1, 2)).toBe(3)
  })

  test("Should add negative and positive numbers together", () => {
    expect(adder(-1, 5)).toBe(4)
  })

  test("Should add negative numbers together", () => {
    expect(adder(-1, -5)).toBe(-6)
  })
});
