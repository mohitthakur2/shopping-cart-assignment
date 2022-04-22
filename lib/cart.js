import { sanitize } from 'dompurify';

export class CartItem {
    constructor({ id, imgUrl, quantity, total, price, title }) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.quantity = Number(quantity) || 1;
        this.price = Number(price);
        this.total = Number(total) || Number(price);
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
        this.updateCartToStorage();
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
        let newItem = new CartItem(item)
        this.items.push(newItem);
        this.updateCartToStorage();
    }

    isItemAlreadyAdded(id) {
        return !!this.items.find(i => i.id === id);
    }

    removeItem(id) {
        let itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
        this.updateCartToStorage();
    }

    incrementQuantity(id) {
        let productInCart = this.items.find(item => item.id === id);
        if (productInCart) {
            productInCart.quantity++;
            this.updateItemTotal(id);
        }
        this.updateCartToStorage();
    }

    decrementQuantity(id) {
        let productInCart = this.items.find(item => item.id === id);
        if (productInCart && productInCart.quantity > 0) {
            productInCart.quantity--;

            if (productInCart.quantity > 0) {
                this.updateItemTotal(id);
            }
        }
        this.updateCartToStorage();
    }

    updateCartTotal() {
        this.cartTotal = this.items.reduce((acc, cur) => {
            acc += cur.total;
        }, 0);
    }

    updateItemTotal(id) {
        let productInCart = this.items.find(item => item.id === id);

        if (!productInCart) return;
        productInCart.total = productInCart.quantity * productInCart.price;
        this.updateCartTotal();
        this.updateCartToStorage();
    }

    getCartTotal() {
        let total = this.items.reduce((acc, cur) => acc += cur.total, 0);
        return total;
    }

    updateCartToStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    getItemsFromStorage() {
        let cartItems = localStorage.getItem('cartItems');
        if (!cartItems) return null;
        return JSON.parse(cartItems);
    }
}

class CartView {
    constructor() {
        this.cartListEl = document.getElementById('cart-list');
        this.cartItemsCountEl = document.getElementById('cart-items-count');
        this.cartTotalEl = document.getElementById('cart-total')
    }

    renderCartItems(items) {
        this.cartListEl.innerHTML = '';

        items.forEach(item => {
            let liEl = this.getCartItemHtml(item);
            this.cartListEl.appendChild(liEl);
        })
    }

    getCartItemHtml(item) {
        let liEl = document.createElement('li');
        liEl.classList.add('cart__item');
        liEl.dataset.id = item.id;

        let innerHtml = `
            <img class="cart__item__img" src="${item.imgUrl}" alt="{${item.title}}"></img>
            <div class="cart__item__product">
                <h4 class="cart__item__title">${item.title}</h4>
                <div class="cart__item__quantity-box">
                    <button class="cart__item__quantity-dec" aria-label="Decrease quantity of ${item.title}">&#45;</button>
                    <div class="cart__item__quantity">${item.quantity}</div>
                    <button class="cart__item__quantity-inc" aria-label="Increase quantity of ${item.title}">&#43;</button>
                    <div class="cart__item__quantity-times">&#10006;</div>
                    <div class="cart__item__quantity-price">Rs.${item.price}</div>
                </div>
            </div>
            <div class="cart__item__total">Rs.${item.total}</div>
        `

        // Purifying the inner html before adding. This will remove any script tag inside it
        let purifiedInnerHtml = sanitize(innerHtml);
        liEl.innerHTML = purifiedInnerHtml

        return liEl;
    }

    updateItem(item) {
        let liEl = this.cartListEl.querySelector(`[data-id="${item.id}"`);
        if (liEl) {
            liEl.querySelector('.cart__item__quantity').textContent = item.quantity;
            liEl.querySelector('.cart__item__total').textContent = `Rs.${item.total}`;
        }
    }

    updateCartTotal(total) {
        this.cartTotalEl.textContent = `Rs.${total}`;
    }

    addNewItem(item, handleDecrement, handleIncrement) {
        let liEl = this.getCartItemHtml(item)

        // DECREMENT HANDLER
        let decEl = liEl.querySelector('.cart__item__quantity-dec');
        decEl.addEventListener('click', function () {
            handleDecrement(item.id)
        })

        // INCREMENT HANDLER
        let incEl = liEl.querySelector('.cart__item__quantity-inc');
        incEl.addEventListener('click', function () {
            handleIncrement(item.id)
        })

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
        document.getElementById('cart-item-count').textContent = count;
    }

    updateCartFooterButtonText(cartCount) {
        if (cartCount > 0) {
            document.getElementById('cart__footer__proceed-btn').style.display = 'flex';
            document.getElementById('cart__footer__start-shopping-btn').style.display = 'none';
            document.getElementById('cart-promo-code').style.display = 'block';

            document.getElementById('cart-lowest-price').style.display = 'flex';
            document.getElementById('cart-empty-msg').style.display = 'none';
        } else {
            document.getElementById('cart__footer__proceed-btn').style.display = 'none';
            document.getElementById('cart__footer__start-shopping-btn').style.display = 'block'
            document.getElementById('cart-promo-code').style.display = 'none';

            document.getElementById('cart-lowest-price').style.display = 'none';
            document.getElementById('cart-empty-msg').style.display = 'flex';
        }
    }
}

export class Cart {
    constructor() {
        this.cartView = new CartView();
        this.cartService = new CartService();
    }

    initFromStorage() {
        let cartItems = this.cartService.getItemsFromStorage();
        if (cartItems) {
            cartItems.forEach(item => {
                this.addItem(item)
            })
        }
        this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount());
    }

    addItem(item) {
        if (this.cartService.isItemAlreadyAdded(item.id)) {
            // this.cartService.incrementQuantity(item.id)
            this.handleIncrement(item.id);
            // this.cartView.updateItem(this.cartService.getItem(item.id));
        } else {
            fetch('/add-to-cart', { method: 'POST', body: JSON.stringify(item) })
                .then(response => {
                    if (response.ok) {
                        this.cartService.addNewItem(item);
                        this.cartView.addNewItem(item, this.handleDecrement.bind(this), this.handleIncrement.bind(this))
                        this.cartView.updateCartCount(this.cartService.getItemsCount())

                        this.cartView.updateCartTotal(this.cartService.getCartTotal())
                        this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount());
                    }
                })
                .catch(error => {
                    console.log('error', error)
                })
        }
    }

    handleDecrement(id, event) {
        this.cartService.decrementQuantity(id);
        let item = this.cartService.getItem(id);
        fetch('/decrement-quantity', { method: 'POST', body: JSON.stringify({ id }) })
            .then(response => {
                if (response.ok) {
                    if (item.quantity > 0) {
                        this.cartView.updateItem(this.cartService.getItem(id))
                    } else {
                        this.cartService.removeItem(id)
                        this.cartView.removeItem(id)
                        this.cartView.updateCartCount(this.cartService.getItemsCount())
                    }
                    this.cartView.updateCartTotal(this.cartService.getCartTotal())
                    this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount());
                }
            })
            .catch(error => {

            })
    }

    handleIncrement(id, event) {
        fetch('/increment-quantity', { method: 'POST', body: JSON.stringify({ id }) })
            .then(response => {
                if (response.ok) {
                    this.cartService.incrementQuantity(id);
                    this.cartView.updateItem(this.cartService.getItem(id))
                    this.cartView.updateCartTotal(this.cartService.getCartTotal())
                    this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount());
                }
            })
            .catch(error => {

            })
    }
}

const cartService = new CartService();
const cartView = new CartView();

if (!window.cartController) {
    window.cartController = new Cart(cartService, cartView);
}

// cartController.initFromStorage();

export default {
    addItem(item) {
        window.cartController.addItem(item)
    },

    initFromStorage() {
        window.cartController.initFromStorage()
    }
}