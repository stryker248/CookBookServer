var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.rate(req.body, function(recipe) {
            if (recipe != null) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(recipe));
            } else {
                res.status(404).send('Recipe not found!');
            }
        });
    };

};
