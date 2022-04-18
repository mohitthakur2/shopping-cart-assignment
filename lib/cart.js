export class CartItem {
    constructor({ id, imgUrl, quantity, total, price, title }) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.quantity = quantity || 1;
        this.price = price;
        this.total = total || price;
        this.title = title
    }
}

class CartService {
    constructor() {
        this.cartTotal = 0;
        this.items = []
    }

    setItems(items) {
        this.items = items;
    }

    getItem(id) {
        let item = this.items.find(item => item.id === id)
        if (item) {
            return item;
        }
        return null;
    }

    getItemsCount() {
        return this.items.length;
    }

    addNewItem(item) {
        console.log('item', item)
        let existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            this.incrementQuantity(item.id)
        } else {
            let newItem = new CartItem(item)
            this.items.push(newItem);
            console.log(this.items)
        }
    }

    removeItem(id) {
        let itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
    }

    incrementQuantity(id) {
        let productInCart = this.items.find(item => item.id === id);
        if (productInCart) {
            productInCart.quantity++;
            this.updateItemTotal(id);
            console.log(this.items);
        }
    }

    decrementQuantity(id) {
        let productInCart = this.items.find(item => item.id === id);
        if (productInCart && productInCart.quantity > 0) {
            productInCart.quantity--;

            if (productInCart.quantity > 0) {
                this.updateItemTotal(id);
            }
        }
    }

    updateCartTotal() {
        this.cartTotal = this.items.reduce((acc, cur) => {
            acc += cur.total;
        }, 0);
    }

    updateItemTotal(id) {
        let productInCart = this.items.find(item => item.id === id);
        console.log(productInCart);

        if (!productInCart) return;
        productInCart.total = productInCart.quantity * productInCart.price;
        this.updateCartTotal();
    }
}

class CartView {
    constructor() {
        this.cartListEl = document.getElementById('cart-list');
        this.cartItemsCountEl = document.getElementById('cart-items-count');
    }

    renderCartItems(items) {
        this.cartListEl.innerHTML = '';
        console.log('items', JSON.stringify(items));


        items.forEach(item => {
            console.log('item', item)
            let liEl = this.getCartItemHtml(item);
            this.cartListEl.appendChild(liEl);
        })
    }

    getCartItemHtml(item) {
        let liEl = document.createElement('li');
        liEl.classList.add('cart__item');
        liEl.dataset.id = item.id;

        liEl.innerHTML = `
            <img class="cart__item__img" src="${item.imgUrl}" alt="{${item.title}}"></img>
            <div class="cart__item__product">
                <h4 class="cart__item__title">${item.title}</h4>
                <div class="cart__item__quantity-box">
                    <div class="cart__item__quantity-dec">&#45;</div>
                    <div class="cart__item__quantity">${item.quantity}</div>
                    <div class="cart__item__quantity-inc">&#43;</div>
                    <div class="cart__item__quantity-times">&#10006;</div>
                    <div class="cart__item__quantity-price">Rs.${item.price}</div>
                </div>
            </div>
            <div class="cart__item__total">Rs.${item.total}</div>
        `

        return liEl;
    }

    getCartItemHtmlLong(item) {
        let liEl = document.createElement('li');
        liEl.classList.add('cart__item');
        liEl.dataset.id = item.id;

        // IMAGE
        let imgEl = document.createElement('img');
        imgEl.classList.add('cart__item__img');
        imgEl.setAttribute('alt', item.title);
        imgEl.src = item.imgUrl;
        liEl.appendChild(imgEl);

        // PRODUCT
        let productEl = document.createElement('div');
        productEl.classList.add('cart__item__product');

        // TITLE
        let titleEl = document.createElement('h4');
        titleEl.textContent = item.title;
        productEl.appendChild(titleEl);

        // QUANTITY BOX
        let quantityBoxEl = document.createElement('div');
        quantityBoxEl.classList.add('cart__item__quantity-box')

        // QUANTITY DEC
        let quantityDecEl = document.createElement('div');
        quantityDecEl.classList.add('cart__item__quantity-dec');
        quantityDecEl.textContent = '&#45;'
        quantityBoxEl.appendChild(quantityDecEl)

        // QUANTITY
        let quantityEl = document.createElement('div');
        quantityEl.classList.add('cart__item__quantity');
        quantityEl.textContent = item.quantity;
        quantityBoxEl.appendChild(quantityEl);

        // QUANTITY INC
        let quantityIncEl = document.createElement('div');
        quantityIncEl.classList.add('cart__item__quantity-inc');
        quantityIncEl.textContent = '&#43;'
        quantityBoxEl.appendChild(quantityIncEl)

        // QUANTITY TIMES
        let quantityTimesEl = document.createElement('div');
        quantityTimesEl.classList.add('cart__item__quantity-times');
        quantityTimesEl.textContent = '&#10006;'
        quantityBoxEl.appendChild(quantityTimesEl)

        // QUANTITY PRICE
        let quantityPriceEl = document.createElement('div');
        quantityPriceEl.classList.add('cart__item__quantity-price');
        quantityPriceEl.textContent = item.price;
        quantityBoxEl.appendChild(quantityPriceEl)

        productEl.appendChild(quantityBoxEl);
        liEl.appendChild(productEl);

        // TOTAL
        let total = document.createElement('div');
        total.classList.add('cart__item__total');
        total.textContent = item.total;
        liEl.appendChild(total)

        return liEl;
    }

    updateItem(item) {
        let liEl = this.cartListEl.querySelector(`[data-id="${item.id}"`);
        if (liEl) {
            liEl.querySelector('.cart__item__quantity').textContent = item.quantity;
            liEl.querySelector('.cart__item__total').textContent = `Rs.${item.total}`;
        }
    }

    addNewItem(item) {
        let liEl = this.getCartItemHtml(item)
        this.cartListEl.appendChild(liEl)
    }

    getLiElById(id) {
        let liEl = this.cartListEl.querySelector(`[data-id="${id}"`);
        return liEl;
    }

    removeItem(id) {
        let liEl = this.getLiElById(id)
        this.cartListEl.removeChild(liEl)
    }

    updateCartCount(count) {
        this.cartItemsCountEl.textContent = `${count} Items`;
    }
}

export class CartController {
    constructor(cartService, cartView) {
        this.cartView = cartView;
        this.cartService = cartService;
        this.setItemsFromLocalStorage();

        this.setUpHandlers();
    }

    setItemsFromLocalStorage() {
        let cartItems = localStorage.getItem('cartItems');
        if (cartItems !== null) {
            this.cartService.setItems(JSON.parse(cartItems))
            this.cartView.renderCartItems(this.cartService.items);
            this.cartView.updateCartCount(this.cartService.getItemsCount())
        }
    }

    setUpHandlers() {
        Array.from(this.cartView.cartListEl.children).forEach(li => {
            let id = li.dataset.id;

            // DECREMENT HANDLER
            let decEl = li.querySelector('.cart__item__quantity-dec');
            decEl.addEventListener('click', event => {
                this.handleDecrement(id, event)
            })

            // INCREMENT HANDLER
            let incEl = li.querySelector('.cart__item__quantity-inc');
            incEl.addEventListener('click', event => {
                this.handleIncrement(id, event)
            })
        })
    }

    handleDecrement(id, event) {
        this.cartService.decrementQuantity(id);
        let item = this.cartService.getItem(id);
        if (item.quantity > 0) {
            this.cartView.updateItem(this.cartService.getItem(id))
        } else {
            this.cartService.removeItem(id)
            this.cartView.removeItem(id)
            this.cartView.updateCartCount(this.cartService.getItemsCount())
        }
    }

    handleIncrement(id, event) {
        this.cartService.incrementQuantity(id);
        // this.cartView.renderCartItems(this.cartService.items);
        this.cartView.updateItem(this.cartService.getItem(id))
    }
}

export const cartService = new CartService();
export const cartView = new CartView();

export class Cart {
    constructor(cartService, cartView) {
        this.cartView = cartView;
        this.cartService = cartService;
    }

    setUpHandlerForItem(id) {
        let liEl = this.cartView.getLiElById(id);
        if (liEl) {
            // DECREMENT HANDLER
            let decEl = liEl.querySelector('.cart__item__quantity-dec');
            decEl.addEventListener('click', event => {
                this.handleDecrement(id, event)
            })

            // INCREMENT HANDLER
            let incEl = liEl.querySelector('.cart__item__quantity-inc');
            incEl.addEventListener('click', event => {
                this.handleIncrement(id, event)
            })
        }
    }

    addItem(item) {
        console.log('item', item)
        this.cartService.addNewItem(item);
        this.cartView.addNewItem(item)
        this.cartView.updateCartCount(this.cartService.getItemsCount())
        this.setUpHandlerForItem(item.id)
    }
}