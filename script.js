class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    
}


const btn = document.querySelector('button');

const newProduct = new Product(productName, productPrice);

btn.addEventListener('click', function(){
    
    const prodDiv = document.getElementById('product');

    prodDiv.innerHTML  = `You have entered ${newProduct.name} with a price tag of $${newProduct.price}`;



});
