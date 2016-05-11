var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');
    var categoryModel = requireOption(objectRepository, 'categoryModel');
    var recipeResultModel = requireOption(objectRepository, 'recipeResultModel');

    return function (req, res, next) {
        var recipe = req.body;

        categoryModel.findById(recipe.categoryId, function(categoryName) {
            recipe.category = categoryName;

            recipeModel.create(recipe, function(newRecipe) {
                var result = new recipeResultModel(
                    newRecipe.id,
                    newRecipe.name,
                    newRecipe.imgUrl,
                    newRecipe.totalTime,
                    newRecipe.rating,
                    newRecipe.ingredients,
                    newRecipe.directions,
                    newRecipe.category
                );

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));
            });
        });
    };

};
