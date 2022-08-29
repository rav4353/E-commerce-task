function calculatePrice() {

    var unitPrice, qty, price,
        unitPriceElement = document.getElementById("unitPrice"), 
        qtyElement = document.getElementById("qty"), 
        priceElement = document.getElementById("price");
    
    unitPrice = unitPriceElement.innerText;

    qty = qtyElement.value;
    
    price = unitPrice * qty; 

    priceElement.innerText = price; 

    return 'DONE';
}

var triggerElement = document.getElementById('trigger');

triggerElement.addEventListener('click', calculatePrice);