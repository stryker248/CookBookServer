var Category = function(id, name) {
    this.id = id;
    this.name = name;
}

var categoryAppetizer = new Category(1, 'Appetizer');
var categoryChicken = new Category(2, 'Chicken');
var categoryDessert = new Category(3, 'Dessert');
var categoryPasta = new Category(4, 'Pasta');
var categoryPork = new Category(5, 'Pork');
var categorySalad = new Category(6, 'Salad');

var categories = [
    categoryAppetizer,
    categoryPasta,
    categoryChicken,
    categoryDessert,
    categorySalad,
    categoryPork
];

Category.find = function(callBack) {
    return callBack(categories);
}

module.exports = Category;
