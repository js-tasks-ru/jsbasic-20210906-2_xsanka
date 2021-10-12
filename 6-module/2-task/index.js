import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = document.createElement('div');
    this.elem.id = `${product.id}`;
    this.elem.classList.add('container_half');

    this.price = `€${product.price.toFixed(2)}`;
    this.src = `/assets/images/products/${product.image}`;

    this.elem.innerHTML = `
    <div class="card">
      <div class="card__top">
        <img src="${this.src}" class="card__image" alt="product">
        <span class="card__price">${this.price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `;

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event) {    
    let target = event.target;    
    if (target.closest('.card__button')) {
      console.log('target ',target);
    }

    const cardEvent = new CustomEvent('product-add', {
      detail: this.elem.id,
      bubbles: true
    });
    
    this.elem.dispatchEvent(cardEvent);

  }

  
}