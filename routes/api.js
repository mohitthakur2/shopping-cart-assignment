const apiRouter = require('express').Router();
const bannersResponse = require('./banners.json');



apiRouter.get('/banners', (req, res) => {
    res.json({
        success: true,
        data: bannersResponse
    })
})

module.exports = apiRouter;