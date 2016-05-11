var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');
    var recipeResultModel = requireOption(objectRepository, 'recipeResultModel');

    return function (req, res, next) {
        recipeModel.find({
            searchText: req.params.searchText
        }, function(recipes) {
            var result = [];

            recipes.forEach(function(recipe) {
                result.push(new recipeResultModel(
                    recipe.id,
                    recipe.name,
                    recipe.imgUrl,
                    recipe.totalTime,
                    recipe.rating,
                    recipe.ingredients,
                    recipe.directions,
                    recipe.category
                ));
            });

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        });
    };

};
