const calculatePrice = (price, quantity) => {
    return { price: price, quantity: quantity };
};

const getTax = (amount, taxRate) => {
    return { amount: amount, taxRate: taxRate };
};

const priceInfo = calculatePrice(15, 4);
const taxInfo = getTax(15, 0.07);

const subtotal = priceInfo.price * priceInfo.quantity;
const taxAmount = taxInfo.amount * taxInfo.taxRate;

console.log("Subtotal:", subtotal);
console.log("Tax:", taxAmount);

function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;
    return amount * defaultTaxRate;
}

console.log(calculateStoreTax(100));

const applyDiscount = (total, discountCallback) => {
  return discountCallback(total);
};

function studentDiscount(total) {
  return total * 0.9;
}

function seniorDiscount(total) {
  return total * 0.8;
}

console.log(applyDiscount(100, studentDiscount));
console.log(applyDiscount(100, seniorDiscount));

function calculateFinalBill(price, quantity, discountCallback) {
    let subtotal = calculatePrice(price, quantity);
    let discountedPrice = applyDiscount(subtotal, discountCallback);
    let taxAmount = getTax(discountedPrice, 0.07);
    return discountedPrice + taxAmount;
}