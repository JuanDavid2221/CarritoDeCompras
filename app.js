const containerCards = document.getElementById('container-cards');
const selectProducts=document.getElementById('select-products');

window.addEventListener('load', listSelect);
selectProducts.addEventListener('change',renderCards)

function renderCards() {
    fruits.map(fruit=> {fruit.product === selectProducts.value ? createCards(fruit) : null});

}

function listSelect() {
    fruits.map(fruit =>{
        const option= document.createElement('option');
        option.value= fruit.product;
        option.textContent = fruit.product;
        selectProducts.appendChild(option);
    });
}

function createCards(fruit) {
    const{product,image, id, price}= fruit;

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