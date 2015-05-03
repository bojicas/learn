describe('Investment', function () {
  var stock, investment;

  beforeEach(function () {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100
    });
  });

  it('should be of a stock', function () {
    expect(investment.stock).toBe(stock);
  });

  it("should have the invested shares' quantity", function () {
    expect(investment.shares).toEqual(100);
  });
});
