var Category = function(id, name) {
    this.id = id;
    this.name = name;
}

var category1 = new Category(1, 'Category1');
var category2 = new Category(2, 'Category2');

var categories = [ category1, category2 ];

Category.find = function(callBack) {
    return callBack(categories);
}

module.exports = Category;
