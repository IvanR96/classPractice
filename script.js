class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    
}


const btn = document.querySelector('button');



btn.addEventListener('click', function(event){
    event.preventDefault();

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


/*
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener('click', () =>{
  confirmCloseDialog.close();

});

discardBtn.addEventListener('click', () =>{
  confirmCloseDialog.close();
  taskForm.classList.toggle('hidden');
});
*/
    
