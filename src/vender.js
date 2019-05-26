function sum(obj) {
  var sum = 0;
  for (var value in obj) {
    if (obj.hasOwnProperty(value)) {
      sum += parseFloat(obj[value]);
    }
  }
  return sum;
}
class VendingMachine {
  constructor(data) {
    this.data = data;
  }

  userBuysFigbars() {
    let numOfLoonies = 5;
    let numOfQuarters = 4;
    const quarterValue = this.data.vendingData.denominations.quarter;
    const loonieValue = this.data.vendingData.denominations.loonie;
    const figBarPrice = this.data.vendingData.productPrices.FigBars;
    let userInputOfLoonies = numOfLoonies * loonieValue;
    let userInputOfQuarters = numOfQuarters * quarterValue;
    let userInput = userInputOfLoonies + userInputOfQuarters;

    return userInput - figBarPrice;
  }

  refillChange() {
    let numOfLoonies = 5;

    const addNumber = this.data.vendingData.machineChange.loonie + numOfLoonies;

    return addNumber;
  }

  queryInventory() {
    const val = Object.keys(this.data.vendingData.inventory).map(key => {
      return this.data.vendingData.inventory[key];
    });
    const isAllZero = !val.some(el => el !== 0);
    if (isAllZero === true) throw "Inventory is empty";
    return this.data.vendingData.inventory;
  }
  updateInventory() {
    const inventory = { FigBars: 12 };
    this.data.vendingData.inventory = inventory;
    return this.data.vendingData.inventory.FigBars;
  }

  queryMachineChangeTotal() {
    const quarter = this.data.vendingData.machineChange.quarter * 0.25;
    const dime = this.data.vendingData.machineChange.dime * 0.1;
    const loonie = this.data.vendingData.machineChange.loonie * 1.0;
    const toonie = this.data.vendingData.machineChange.toonie * 2.0;
    const fiveDollars = this.data.vendingData.machineChange.fiveDollars * 5.0;
    const added = quarter + dime + loonie + toonie + fiveDollars;
    const total = sum(this.data.vendingData.machineChange);

    if (!total) throw "There is no change";

    return added;
  }
}

module.exports = VendingMachine;
