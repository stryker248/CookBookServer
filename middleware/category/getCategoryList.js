var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var categoryModel = requireOption(objectRepository, 'categoryModel');

    return function (req, res, next) {
        categoryModel.find(function(categories) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(categories));
        });
    };

};
