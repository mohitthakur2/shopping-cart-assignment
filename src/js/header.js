import cartHelpers from './cart'
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
        window.scrollTo(0, 0);
    } else {
        addScrollToBody();
    }
})

function hideCart() {
    cart.classList.remove(CART_VISIBLE_CLASS);
    addScrollToBody();
}

cartOverlay.addEventListener('click', hideCart)

cartCloseIcon.addEventListener('click', hideCart)

cartHelpers.initFromStorage();

document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
        if (cart.classList.contains(CART_VISIBLE_CLASS)) {
            hideCart();
        }
    }
})