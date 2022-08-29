function calculatePrice() {

    var unitPrice, qty, price, 
    rowElement = this.parentNode.parentNode,
    unitPriceElements = rowElement.getElementsByClassName('unitPrice'),
    unitPriceElement = unitPriceElements[0],
    qtyElements = rowElement.getElementsByClassName('qty'),
    qtyElement = qtyElements[0],
    priceElements = rowElement.getElementsByClassName('price'),
    priceElement = priceElements[0],

    unitPrice = unitPriceElement.innerText;
    unitPrice = parseInt(unitPrice);

    qty = qtyElement.value;
    qty = parseInt(qty);
    
    price = unitPrice * qty; 

    priceElement.innerText = price; 

    return 'DONE';
}

var triggerElement = document.getElementsByClassName('trigger');

for(i=0; i<triggerElement.length; i++) {
    triggerElement[i].addEventListener('click', calculatePrice)
}