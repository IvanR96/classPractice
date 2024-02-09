class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    
}


const btn = document.querySelector('button');



btn.addEventListener('click', function(){

    const container = document.getElementById('container');
    
    const prodDiv = document.getElementById('product');

    
    const productName = document.getElementById('names').value;
    const productPrice = document.getElementById('price').value;

    const newProduct = new Product(productName, productPrice);



    const text = document.createElement('p');

    text.innerHTML = (`You have entered ${newProduct.name} with a price tag of $${newProduct.price}`);

    prodDiv.appendChild(text);

    container.appendChild(prodDiv);



});

    
