var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  };
  
  cart.push(newItem);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  var l = cart.length;

  if(!l) {
    return ("Your shopping cart is empty.");
  }
  
  let itemsAndPrices = [];
    for (let i = 0; i < l; i++) {
      let itemAndPrice = cart[i];
      let item = itemAndPrice.itemName;
      let price = itemAndPrice.itemPrice;
  
      itemsAndPrices.push(`${item} at $${price}`);
    }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(", and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  return (`In your cart, you have ${itemsAndPrices}.`);

}

function total() {
  let t = 0;

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let itemPrice in cart[i]) {
      t += cart.itemPrice;
    }
  }
  return t;
}
//function total() {
  // write your code here
//}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
