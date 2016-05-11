var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');
    var recipeResultModel = requireOption(objectRepository, 'recipeResultModel');

    return function (req, res, next) {
        recipeModel.rate(req.body, function(recipe) {
            if (recipe != null) {
                var result = new recipeResultModel(
                    recipe.id,
                    recipe.name,
                    recipe.imgUrl,
                    recipe.totalTime,
                    recipe.rating,
                    recipe.ingredients,
                    recipe.directions,
                    recipe.category
                );

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));
            } else {
                res.status(404).send('Recipe not found!');
            }
        });
    };

};
