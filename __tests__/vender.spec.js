const VendingMachine = require("../src/vender");
const data = require("../data.json");

describe("VendingMachine", () => {
  beforeEach(() => {
    test.result = new VendingMachine(data);
  });
  describe("inventoryFunc()", () => {
    describe("when the inventory is empty", () => {
      it("should throw an error", () => {
        expect(() => test.result.queryInventory()).toThrow(
          "Inventory is empty"
        );
      });
    });
    describe("when the inventory has added items", () => {
      it("should return product quantity", () => {
        expect(test.result.updateInventory()).toEqual(12);
      });
    });
  });

  describe("machineChangeFunc()", () => {
    describe("when there is change", () => {
      it("should return the total", () => {
        expect(test.result.queryMachineChangeTotal()).toEqual(83.5);
      });
    });
  });

  describe("userBuysItem()", () => {
    describe("when user puts in 5 loonies and 4 quarters for figbars", () => {
      it("should return the change", () => {
        expect(test.result.userBuysFigbars()).toEqual(3.5);
      });
    });

    describe("when item price is more than the amount of change given", () => {
      it("should throw an error", () => {
        expect(() => test.result.userBuysFanta()).toThrow(
          "Insufficient change"
        );
      });
    });

    describe("when the bill is not the type of changed accepted", () => {
      it("should throw an error", () => {
        expect(() => test.result.wrongBill()).toThrow(
          "This bill is not accepted"
        );
      });
    });
  });

  describe("coinsAdded()", () => {
    describe("when user puts in 5 loonies and 4 quarters", () => {
      it("should update the number of those denominations in vending machine", () => {
        expect(test.result.refillChange()).toEqual(15);
      });
    });
  });
});
