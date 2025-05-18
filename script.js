function openModal (id) {
    document.getElementById("modal" + id).style.display = "block"; 
}
function closeModal (id) {
    document.getElementById("modal" + id).style.display = "none"; 
}

function plusProduct (id) {
    let countProduct = document.getElementById("count-product" + id);
    let oldValue = parseInt(countProduct.textContent);
    let newValue = oldValue + 1;
    countProduct.textContent = newValue;
}

function minusProduct (id) {
    let countProduct = document.getElementById("count-product" + id);
    let oldValue = parseInt(countProduct.textContent);
    let newValue = oldValue - 1;
    if (oldValue > 1) {
        countProduct.textContent = newValue;  
    }
}

function addToCart (id) {
    let countCart = document.getElementById("count-cart");
    let countProduct = document.getElementById("count-product" + id);
    let productValue = parseInt(countProduct.textContent);
    let oldCartValue = parseInt(countCart.textContent);
    countCart.textContent = oldCartValue + productValue;
}