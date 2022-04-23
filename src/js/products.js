import cartHelpers, { CartItem } from "./cart";


let productListingEl = document.getElementById('products-listing');
Array.from(productListingEl.children).forEach(item => {
    let btns = Array.from(item.querySelectorAll('button.add-to-cart-btn'));
    let product = new CartItem({
        id: item.dataset.id,
        title: item.dataset.title,
        imgUrl: item.dataset.imgurl,
        price: item.dataset.price,
    })
    btns.forEach(item => {
        item.addEventListener('click', () => {
            cartHelpers.addItem(product)
        })
    })
})




/**************************************************************************
 * NAVIGATION USING SELECT FOR MOBILE
 */

function getCategoryIdFromUrl() {
    let href = window.location.href;
    return href.split('=')[1] || '';
}

let select = document.getElementById('mobile-category-dropdown');
let selectedCategoryId = getCategoryIdFromUrl()
let options = Array.from(select.querySelectorAll('option'));
options.forEach(item => {
    if (item.value === selectedCategoryId) {
        item.selected = true;
    }
})

select.addEventListener('change', function () {
    let value = this.value;
    value === "" ? document.location = `/products` : document.location = `/products?category=${value}`
})
