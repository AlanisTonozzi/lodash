const chunk = require("./chunk");

describe("chunk", () => {
  it("Deve retornar um array no pedaços de tamanho 2", () => {
    const actual = chunk([1, 2, 3, 4, 5], 2);
    const expected = [[1, 2], [3, 4], [5]];
    expect(actual).toEqual(expected);
  });
});
