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

Category.findById = function(id, callBack) {
    var category = '';

    switch (id) {
    case 1:
        category = categories[0].name;
        break;
    case 2:
        category = categories[1].name;
        break;
    case 3:
        category = categories[2].name;
        break;
    case 4:
        category = categories[3].name;
        break;
    case 5:
        category = categories[4].name;
        break;
    case 6:
        category = categories[5].name;
        break;
    }

    return callBack(category);
}

module.exports = Category;
