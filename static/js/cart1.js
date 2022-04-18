/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/cart.js":
/*!*********************!*\
  !*** ./lib/cart.js ***!
  \*********************/
/***/ (() => {

eval("function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,\"prototype\",{writable:!1}),a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}var CartItem=/*#__PURE__*/_createClass(function b(a){var c=a.id,d=a.imgUrl,e=a.quantity,f=a.total,g=a.price,h=a.title;_classCallCheck(this,b),this.id=c,this.imgUrl=d,this.quantity=e||1,this.price=g,this.total=f||g,this.title=h}),CartService=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartTotal=0,this.items=[]}return _createClass(a,[{key:\"setItems\",value:function setItems(a){this.items=a}},{key:\"addNewItem\",value:function addNewItem(a){this.newItem=new CartItem(a),this.items.push(newItem)}},{key:\"removeItem\",value:function removeItem(a){var b=this.items.findIndex(function(b){return b.id===a});-1<b&&this.items.splice(b,1)}},{key:\"incrementQuantity\",value:function incrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&b.quantity++}},{key:\"decrementQuantity\",value:function decrementQuantity(a){var b=this.items.find(function(b){return b.id===a});b&&0<b.quantity&&(b.quantity--,0===b.quantity&&this.removeItem(a))}},{key:\"updateCartTotal\",value:function updateCartTotal(){this.cartTotal=this.items.reduce(function(a,b){a+=b.total},0)}},{key:\"updateItemTotal\",value:function updateItemTotal(a){var b=this.items.find(function(b){return b.id===a});b&&(b.total=b.quantity*b.price,this.updateCartTotal())}}]),a}(),CartView=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartListEl=document.getElementById(\"cart-list\"),this.cartItemsCountEl=document.getElementById(\"cart-items-count\")}return _createClass(a,[{key:\"renderCartItems\",value:function renderCartItems(a){var b=this;this.cartListEl.innerHTML=\"\",console.log(\"items\",JSON.stringify(a)),a.forEach(function(a){console.log(\"item\",a);var c=b.getCartItemHtml(a);b.cartListEl.appendChild(c)})}},{key:\"getCartItemHtml\",value:function getCartItemHtml(a){var b=document.createElement(\"li\");b.classList.add(\"cart__item\"),b.dataset.id=a.id;// IMAGE\nvar c=document.createElement(\"img\");c.classList.add(\"cart__item__img\"),c.setAttribute(\"alt\",a.title),c.src=a.imgUrl,b.appendChild(c);// PRODUCT\nvar d=document.createElement(\"div\");d.classList.add(\"cart__item__product\");// TITLE\nvar e=document.createElement(\"h4\");e.textContent=a.title,d.appendChild(e);// QUANTITY BOX\nvar f=document.createElement(\"div\");f.classList.add(\"cart__item__quantity-box\");// QUANTITY DEC\nvar g=document.createElement(\"div\");g.classList.add(\"cart__item__quantity-dec\"),g.textContent=\"&#45;\",f.appendChild(g);// QUANTITY\nvar h=document.createElement(\"div\");h.classList.add(\"cart__item__quantity\"),h.textContent=a.quantity,f.appendChild(h);// QUANTITY INC\nvar i=document.createElement(\"div\");i.classList.add(\"cart__item__quantity-inc\"),i.textContent=\"&#43;\",f.appendChild(i);// QUANTITY TIMES\nvar j=document.createElement(\"div\");j.classList.add(\"cart__item__quantity-times\"),j.textContent=\"&#10006;\",f.appendChild(j);// QUANTITY PRICE\nvar k=document.createElement(\"div\");k.classList.add(\"cart__item__quantity-price\"),k.textContent=a.price,f.appendChild(k),d.appendChild(f),b.appendChild(d);// TOTAL\nvar l=document.createElement(\"div\");l.classList.add(\"cart__item__total\"),l.textContent=a.total,b.appendChild(l)}},{key:\"handleIncrement\",value:function handleIncrement(){}}]),a}(),CartController=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.cartView=new CartView,this.cartService=new CartService,this.listEl=this.cartView.cartListEl,this.setItemsFromLocalStorage(),this.setUpDecHandlers()}return _createClass(a,[{key:\"setItemsFromLocalStorage\",value:function setItemsFromLocalStorage(){var a=localStorage.getItem(\"cartItems\");null!==a&&(console.log(\"\"),this.cartService.setItems(JSON.parse(a)),this.cartView.renderCartItems(this.cartService.items))}},{key:\"setUpDecHandlers\",value:function setUpDecHandlers(){var a=this;Array.from(this.listEl.children).forEach(function(b){var c=b.dataset.id,d=b.querySelector(\".cart__item__quantity-dec\");d.addEventListener(\"click\",function(b){a.handleDecrement(c,b)})})}},{key:\"handleDecrement\",value:function handleDecrement(){// console.log('this', this);\n// this.cartService.decrementQuantity(item);\n// this.cartView.renderCartItems(this.cartService.items);\n}}]),a}(),cartItem=new CartItem({id:\"testing\",imgUrl:\"/images/logo.png\",price:50,title:\"Testing\"});localStorage.setItem(\"cartItems\",JSON.stringify([cartItem]));var cartController=new CartController(new CartView(),new CartService());console.log(cartController);\n\n//# sourceURL=webpack://code-exercise/./lib/cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/cart.js"]();
/******/ 	
/******/ })()
;