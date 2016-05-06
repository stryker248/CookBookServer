var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.reset(function() {
            res.end();
        });
    };

};
