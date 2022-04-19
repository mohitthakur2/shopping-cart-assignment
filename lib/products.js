import cartHelpers, { CartItem } from "./cart";


let productListingEl = document.getElementById('products-listing');
Array.from(productListingEl.children).forEach(item => {
    let btn = item.querySelector('button.btn');
    let product = new CartItem({
        id: item.dataset.id,
        title: item.dataset.title,
        imgUrl: item.dataset.imgurl,
        price: item.dataset.price,
    })
    btn.addEventListener('click', () => {
        cartHelpers.addItem(product)
    })
})

