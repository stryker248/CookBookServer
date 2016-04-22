var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.create(req.body, function(newRecipe) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(newRecipe));
        });
    };

};
