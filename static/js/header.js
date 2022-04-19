(()=>{"use strict";var t={241:(t,e,i)=>{function n(t,e){for(var i,n=0;n<e.length;n++)(i=e[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function a(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,{ZP:()=>m});var c=a((function t(e){var i=e.id,n=e.imgUrl,a=e.quantity,c=e.total,o=e.price,s=e.title;r(this,t),this.id=i,this.imgUrl=n,this.quantity=+a||1,this.price=+o,this.total=+c||+o,this.title=s})),o=function(){function t(){r(this,t),this.cartTotal=0,this.items=[]}return a(t,[{key:"setItems",value:function(t){this.items=t,this.updateCartToStorage()}},{key:"getItem",value:function(t){return this.items.find((function(e){return e.id===t}))||null}},{key:"getItemsCount",value:function(){return this.items.length}},{key:"addNewItem",value:function(t){var e=new c(t);this.items.push(e),this.updateCartToStorage()}},{key:"isItemAlreadyAdded",value:function(t){return!!this.items.find((function(e){return e.id===t}))}},{key:"removeItem",value:function(t){var e=this.items.findIndex((function(e){return e.id===t}));-1<e&&this.items.splice(e,1),this.updateCartToStorage()}},{key:"incrementQuantity",value:function(t){var e=this.items.find((function(e){return e.id===t}));e&&(e.quantity++,this.updateItemTotal(t)),this.updateCartToStorage()}},{key:"decrementQuantity",value:function(t){var e=this.items.find((function(e){return e.id===t}));e&&0<e.quantity&&(e.quantity--,0<e.quantity&&this.updateItemTotal(t)),this.updateCartToStorage()}},{key:"updateCartTotal",value:function(){this.cartTotal=this.items.reduce((function(t,e){e.total}),0)}},{key:"updateItemTotal",value:function(t){var e=this.items.find((function(e){return e.id===t}));e&&(e.total=e.quantity*e.price,this.updateCartTotal(),this.updateCartToStorage())}},{key:"getCartTotal",value:function(){return this.items.reduce((function(t,e){return t+e.total}),0)}},{key:"updateCartToStorage",value:function(){localStorage.setItem("cartItems",JSON.stringify(this.items))}},{key:"getItemsFromStorage",value:function(){var t=localStorage.getItem("cartItems");return t?JSON.parse(t):null}}]),t}(),s=function(){function t(){r(this,t),this.cartListEl=document.getElementById("cart-list"),this.cartItemsCountEl=document.getElementById("cart-items-count"),this.cartTotalEl=document.getElementById("cart-total")}return a(t,[{key:"renderCartItems",value:function(t){var e=this;this.cartListEl.innerHTML="",t.forEach((function(t){var i=e.getCartItemHtml(t);e.cartListEl.appendChild(i)}))}},{key:"getCartItemHtml",value:function(t){var e=document.createElement("li");return e.classList.add("cart__item"),e.dataset.id=t.id,e.innerHTML='\n            <img class="cart__item__img" src="'.concat(t.imgUrl,'" alt="{').concat(t.title,'}"></img>\n            <div class="cart__item__product">\n                <h4 class="cart__item__title">').concat(t.title,'</h4>\n                <div class="cart__item__quantity-box">\n                    <button class="cart__item__quantity-dec" aria-label="Decrease quantity of ').concat(t.title,'">&#45;</button>\n                    <div class="cart__item__quantity">').concat(t.quantity,'</div>\n                    <button class="cart__item__quantity-inc" aria-label="Increase quantity of ').concat(t.title,'">&#43;</button>\n                    <div class="cart__item__quantity-times">&#10006;</div>\n                    <div class="cart__item__quantity-price">Rs.').concat(t.price,'</div>\n                </div>\n            </div>\n            <div class="cart__item__total">Rs.').concat(t.total,"</div>\n        "),e}},{key:"updateItem",value:function(t){var e=this.cartListEl.querySelector('[data-id="'.concat(t.id,'"'));e&&(e.querySelector(".cart__item__quantity").textContent=t.quantity,e.querySelector(".cart__item__total").textContent="Rs.".concat(t.total))}},{key:"updateCartTotal",value:function(t){this.cartTotalEl.textContent="Rs.".concat(t)}},{key:"addNewItem",value:function(t,e,i){var n=this.getCartItemHtml(t);n.querySelector(".cart__item__quantity-dec").addEventListener("click",(function(){e(t.id)})),n.querySelector(".cart__item__quantity-inc").addEventListener("click",(function(){i(t.id)})),this.cartListEl.appendChild(n)}},{key:"getLiElById",value:function(t){return this.cartListEl.querySelector('[data-id="'.concat(t,'"'))}},{key:"removeItem",value:function(t){var e=this.getLiElById(t);this.cartListEl.removeChild(e)}},{key:"updateCartCount",value:function(t){this.cartItemsCountEl.textContent="".concat(t," Items"),document.getElementById("cart-item-count").textContent=t}},{key:"updateCartFooterButtonText",value:function(t){0<t?(document.getElementById("cart__footer__proceed-btn").style.display="flex",document.getElementById("cart__footer__start-shopping-btn").style.display="none",document.getElementById("cart-promo-code").style.display="block",document.getElementById("cart-lowest-price").style.display="flex",document.getElementById("cart-empty-msg").style.display="none"):(document.getElementById("cart__footer__proceed-btn").style.display="none",document.getElementById("cart__footer__start-shopping-btn").style.display="block",document.getElementById("cart-promo-code").style.display="none",document.getElementById("cart-lowest-price").style.display="none",document.getElementById("cart-empty-msg").style.display="flex")}}]),t}(),u=function(){function t(){r(this,t),this.cartView=new s,this.cartService=new o}return a(t,[{key:"initFromStorage",value:function(){var t=this,e=this.cartService.getItemsFromStorage();e&&e.forEach((function(e){t.addItem(e)})),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:"addItem",value:function(t){this.cartService.isItemAlreadyAdded(t.id)?(this.cartService.incrementQuantity(t.id),this.cartView.updateItem(this.cartService.getItem(t.id))):(this.cartService.addNewItem(t),this.cartView.addNewItem(t,this.handleDecrement.bind(this),this.handleIncrement.bind(this)),this.cartView.updateCartCount(this.cartService.getItemsCount())),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:"handleDecrement",value:function(t){this.cartService.decrementQuantity(t),0<this.cartService.getItem(t).quantity?this.cartView.updateItem(this.cartService.getItem(t)):(this.cartService.removeItem(t),this.cartView.removeItem(t),this.cartView.updateCartCount(this.cartService.getItemsCount())),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}},{key:"handleIncrement",value:function(t){this.cartService.incrementQuantity(t),this.cartView.updateItem(this.cartService.getItem(t)),this.cartView.updateCartTotal(this.cartService.getCartTotal()),this.cartView.updateCartFooterButtonText(this.cartService.getItemsCount())}}]),t}(),l=new o,d=new s;window.cartController||(window.cartController=new u(l,d));const m={addItem:function(t){window.cartController.addItem(t)},initFromStorage:function(){window.cartController.initFromStorage()}}}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(241),e=document.getElementById("cart-btn"),n=document.getElementById("cart"),a=document.getElementById("cart-overlay"),r=document.getElementById("cart-close-icon"),c="cart--visible";function o(){document.body.style.overflow="auto"}e.addEventListener("click",(function(){n.classList.toggle(c),n.classList.contains(c)?document.body.style.overflow="hidden":o()})),a.addEventListener("click",(function(){n.classList.remove(c),o()})),r.addEventListener("click",(function(){n.classList.remove(c),o()})),t.ZP.initFromStorage()})()})();