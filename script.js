function calculatePrice(price, quantity) {
    return { price: price, quantity: quantity };
}

function getTax(amount, taxRate) {
    return { amount: amount, taxRate: taxRate };
}

const priceInfo = calculatePrice(15, 4);
const taxInfo = getTax(15, 0.07);

const subtotal = priceInfo.price * priceInfo.quantity;
const taxAmount = taxInfo.amount * taxInfo.taxRate;

console.log("Subtotal:", subtotal);
console.log("Tax:", taxAmount);