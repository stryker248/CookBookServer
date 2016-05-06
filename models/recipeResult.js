var RecipeResult = function(id, name, imgUrl, totalTime, rating, ingredients, directions, category) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.totalTime =  totalTime;
    this.rating = rating;
    this.ingredients = ingredients;
    this.directions = directions;
    this.category = category;
}

module.exports = RecipeResult;
