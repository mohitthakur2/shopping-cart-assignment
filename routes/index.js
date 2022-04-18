const viewsRouter = require('express').Router();
const bannersResponse = require('./banners.json');
const categoriesResponse = require('./categories.json');
const productsResponse = require('./products.json');
const categoryIdToNameMap = {}
categoriesResponse.forEach(item => {
    categoryIdToNameMap[item.id] = item.name;
})

viewsRouter.get('/', (req, res) => {
    try {
        let filteredCategories = categoriesResponse.filter(category => category.enabled).sort((a, b) => a.order - b.order)
        console.log('sortedCategories ', filteredCategories);
        res.render('home', { banners: bannersResponse, categories: filteredCategories })
    } catch (error) {
        res.render('error')
    }
})

viewsRouter.get('/products', (req, res) => {

    try {
        let filteredProducts = productsResponse;
        let filterCategoryId = null;
        let filterCategoryName = null;

        if (req.query && req.query.category) {
            filteredProducts = filteredProducts.filter(item => item.category === req.query.category);
            filterCategoryId = req.query.category;
            filterCategoryName = categoryIdToNameMap[filterCategoryId]
        }

        let filteredCategories = categoriesResponse.filter(category => category.enabled).sort((a, b) => a.order - b.order)
        filteredCategories = filteredCategories.map(item => ({...item, activeCategory: item.id === filterCategoryId}))

        res.render('products', { categories: filteredCategories, products: filteredProducts, filterCategoryId, filterCategoryName });
    } catch (error) {
        res.render('error')
    }
})


viewsRouter.get('/login', (req, res) => {
    res.render('login');
});

viewsRouter.get('/register', (req, res) => {
    res.render('register');
});




module.exports = viewsRouter;