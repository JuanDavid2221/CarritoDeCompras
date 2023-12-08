const containerCards = document.getElementById('container-cards');
const selectProducts=document.getElementById('select-products');
 const btnCreate= document.getElementById('btn-create');
 const closemodal = document.getElementById('close-modal');
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
closemodal.addEventListener("click", close_modal);

function importImg(event) {
    const currentImg= event.target.files[0];
    const objectURL= URL.createObjectURL(currentImg);
    imgSelected= objectURL;
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

//BUSCADOR
$(document).ready(function(){
    $("#input_buscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card-product").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//Actualizar

// variables de modal de actualizar producto
const modalupdate = document.querySelector('.modal-upload');
const btnupdate = document.getElementById('btn-upload');
const closemodalupdate = document.getElementById('close-modal-upload');
const idproduct= document.getElementById('id-product');
const btnbuscar = document.getElementById('buscar-product');
const updatename= document.getElementById('update-name');
const updateprice = document.getElementById('update-price');
const updatecategory = document.getElementById('update-category');
const btnupdateproduct = document.getElementById('btn-new-update');

closemodalupdate.addEventListener("click" , close_modal_update)
btnbuscar.addEventListener("click" , buscarproduct);
btnupdate.addEventListener("click" ,showmodalupdate);
btnupdateproduct.addEventListener("click" , updateproduct)

//actualizar prducto encontrado
function updateproduct() {
    const product = idproduct.value
    const objetoBuscado = fruits.find(objeto => objeto.id === product);

    objetoBuscado.product = updatename.value;
    objetoBuscado.price = updateprice.value;

    close_modal_update();
    card();
}

//buscar producto para actualizar
function buscarproduct() {
    const product = idproduct.value
    const objetoBuscado = fruits.find(objeto => objeto.id === product);

if (objetoBuscado) {
    const name = objetoBuscado.product;
    const price = objetoBuscado.price;

    updatename.value = name;
    updateprice.value=price;
} else {
    console.log("Objeto no encontrado");
}
}

//abrir y cerrar modal actualizar
function showmodalupdate() {
    modalupdate.style.display= 'flex';
}
function close_modal_update() {
    modalupdate.style.display='none';
}

function close_modal() {
    modal.style.display = 'none';
}

