const containerCards = document.getElementById('container-cards');
const selectProducts=document.getElementById('select-products');
 const btnCreate= document.getElementById('btn-create');
let imgSelected= ""; 
let idProduct= 0

 const modal= document.querySelector('.modal');
const closeModal= document.getElementById('close-modal');
const newProduct= document.getElementById('new-product');
const newPrice= document.getElementById('new-price');
const newImage= document.getElementById('new-image'); 
const btnNewProduct= document.getElementById('btn-new-create'); 

window.addEventListener('load', card);
btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click',createNewProduct);
newImage.addEventListener('change',importImg);

function importImg(event) {
    const currentImg= event.target.files[0];
    const objectURL= URL.createObjectURL(currentImg);
    console.log(objectURL);
}

function createNewProduct() {
    idProduct++;
    const titleProduct= newProduct.value;
    const priceProduct= newPrice.value;
    const id= idProduct

    const newFruit= {id:"fruit-10",product: titleProduct, price: priceProduct, image: imgSelected};

    fruits.push(newFruit);
    card();
    modal.style.display='none';
}

 function showModal() {
    modal.style.display= 'flex';
} 
function card() {
    // Limpiar el contenedor antes de volver a agregar las tarjetas
containerCards.innerHTML = "";

// Iterar sobre cada elemento en la matriz cell y crear una tarjeta para cada uno
fruits.forEach((fruits) => createCards(fruits));
}




function createCards(fruits) {
    const{product,image, id, price}= fruits;

    const card= document.createElement('div');
    card.classList.add('card-product');

    const imgcard= document.createElement('img');
    imgcard.setAttribute('src',image);
    imgcard.setAttribute('alte',`${id}-${product}`);
    imgcard.classList.add('img-product');

    const namecard= document.createElement('p');
    namecard.textContent= product;
    namecard.classList.add('name-product');
    
    const pricecard= document.createElement('p');
    pricecard.classList.add('price-product');
    pricecard.textContent= price;

    const btnAdd= document.createElement('button');
    btnAdd.setAttribute('id',id);
    btnAdd.classList.add('btn-add');
    btnAdd.textContent="Add to cart";

    card.appendChild(imgcard);
    card.appendChild(namecard);
    card.appendChild(pricecard);
    card.appendChild(btnAdd);

    containerCards.appendChild(card);


}
