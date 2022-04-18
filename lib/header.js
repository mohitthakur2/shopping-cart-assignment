import {CartItem, CartController, cartService, cartView} from './cart'
let cartBtn = document.getElementById('cart-btn');
let cart = document.getElementById('cart');
let cartOverlay = document.getElementById('cart-overlay');
let cartCloseIcon = document.getElementById('cart-close-icon');

const CART_VISIBLE_CLASS = 'cart--visible'

function removeScrollFromBody() {
    document.body.style.overflow = 'hidden';
}

function addScrollToBody() {
    document.body.style.overflow = 'auto';
}


cartBtn.addEventListener('click', () => {
    cart.classList.toggle(CART_VISIBLE_CLASS);
    if (cart.classList.contains(CART_VISIBLE_CLASS)) {
        removeScrollFromBody();
    } else {
        addScrollToBody();
    }
})

cartOverlay.addEventListener('click', () => {
    cart.classList.remove(CART_VISIBLE_CLASS);
    addScrollToBody();
})

cartCloseIcon.addEventListener('click', () => {
    cart.classList.remove(CART_VISIBLE_CLASS);
    addScrollToBody();
})

let cartController = new CartController(cartService, cartView)
console.log(cartController)