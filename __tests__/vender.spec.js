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

  describe("userBuysFigbars()", () => {
    describe("when user puts in 5 loonies and 4 quarters for figbars", () => {
      it("should return the change", () => {
        expect(test.result.userBuysFigbars()).toEqual(3.5);
      });
    });
  });

  describe("coinsAdded()", () => {
    describe("when user puts in 5 loonies and 4 quarters", () => {
      it("should update the number of each denomination of the machineChange", () => {
        expect(test.result.refillChange()).toEqual(15);
      });
    });
  });
});
