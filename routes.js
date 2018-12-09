const controller = require("./controllers");

module.exports = function(app){
    app.get('/allCakes',controller.allCakes)
    app.get('/cake/:id',controller.showOne)
    app.post('/createCake',controller.createCake)
    app.post('/newRate/:id',controller.rateCake)
}