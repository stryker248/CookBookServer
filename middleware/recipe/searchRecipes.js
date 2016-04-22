var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var recipeModel = requireOption(objectRepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.find({
            searchText: req.params.searchText
        }, function(recipes) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(recipes));
        });
    };

};
