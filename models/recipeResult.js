var RecipeResult = function(id, name, imgUrl, cookingTime, rating, ingredients, directions, category) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.cookingTime =  cookingTime;
    this.rating = rating;
    this.ingredients = ingredients;
    this.directions = directions;
    this.category = category;
}

module.exports = RecipeResult;
