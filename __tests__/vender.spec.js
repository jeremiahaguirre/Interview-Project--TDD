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

    describe("when there is change in machine", () => {
      it("should allow user to not use exact change", () => {
        expect(test.result.thereIsChange()).toBeGreaterThan(0);
      });
    });
  });

  describe("userBuysItem()", () => {
    describe("when user puts in 5 loonies and 4 quarters for figbars", () => {
      it("should return the change", () => {
        expect(test.result.userBuysFigbars()).toEqual(3.5);
      });
    });

    describe("when a user asked for an item that is out of stock", () => {
      it("should throw error", () => {
        expect(() => test.result.noProduct()).toThrow(
          "This item is out of stock"
        );
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
          "This type payment is not accepted"
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
  describe("noChange()", () => {
    describe("when there in no change in machine", () => {
      beforeEach(() => {
        let dime = { dime: 0 };
        let quarter = { quarter: 0 };
        let loonie = { loonie: 0 };
        let toonie = { toonie: 0 };
        let fiveDollars = { fiveDollars: 0 };
        test.result.data.vendingData.machineChange = dime;
        test.result.data.vendingData.machineChange = quarter;
        test.result.data.vendingData.machineChange = loonie;
        test.result.data.vendingData.machineChange = toonie;
        test.result.data.vendingData.machineChange = fiveDollars;
      });

      it("should throw an error", () => {
        expect(() => test.result.noChange()).toThrow("Please use exact change");
      });
    });
  });
});
