var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');
    var categoryModel = requireOption(objectRepository, 'categoryModel');

    return function (req, res, next) {
        var recipe = req.body;

        categoryModel.findById(recipe.categoryId, function(categoryName) {
            recipe.category = categoryName;

            recipeModel.create(recipe, function(newRecipe) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(newRecipe));
            });
        });
    };

};
