var getCategoryListMW = require('../middleware/category/getCategoryList');

var createRecipeMW = require('../middleware/recipe/createRecipe');
var getRecipeListMW = require('../middleware/recipe/getRecipeList');
var getRecipeListByEmailMW = require('../middleware/recipe/getRecipeListByEmail');
var rateRecipeMW = require('../middleware/recipe/rateRecipe');
var searchRecipesMW = require('../middleware/recipe/searchRecipes');
var resetRecipesMW = require('../middleware/recipe/resetRecipes');

var recipeModel = require('../models/recipe');
var recipeResultModel = require('../models/recipeResult');
var categoryModel = require('../models/category');

module.exports = function (app) {
    var objectRepository = {
        recipeModel: recipeModel,
        recipeResultModel: recipeResultModel,
        categoryModel: categoryModel
    };

    app.get('/api/v1/recipes',
        function (req, res, next) {
            console.log('GET /api/v1/recipes');
            return next();
        },
        getRecipeListMW(objectRepository)
    );

    app.get('/api/v1/recipes/creator/:userEmail',
        function (req, res, next) {
            console.log('GET /api/v1/recipes/:userEmail');
            console.log('userEmail: ' + req.params.userEmail);
            return next();
        },
        getRecipeListByEmailMW(objectRepository)
    );

    app.get('/api/v1/recipes/search/:searchText',
        function (req, res, next) {
            console.log('GET /api/v1/search/:searchText');
            console.log('searchText: ' + req.params.searchText);
            return next();
        },
        searchRecipesMW(objectRepository)
    );

    app.post('/api/v1/recipe',
        function (req, res, next) {
            console.log('POST /api/v1/recipe');
            console.log(req.body);
            return next();
        },
        createRecipeMW(objectRepository)
    );

    app.post('/api/v1/recipe/rate',
        function (req, res, next) {
            console.log('POST /api/v1/recipe/rate');
            console.log(req.body);
            return next();
        },
        rateRecipeMW(objectRepository)
    );

    app.get('/api/v1/categories',
        function (req, res, next) {
            console.log('GET /api/v1/categories');
            return next();
        },
        getCategoryListMW(objectRepository)
    );

    app.get('/api/v1/recipes/reset',
        function (req, res, next) {
            console.log('GET /api/v1/reset');
            return next();
        },
        resetRecipesMW(objectRepository)
    );
}
