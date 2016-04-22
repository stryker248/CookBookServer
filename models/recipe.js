var Recipe = function(id, name, imgUrl, cookingTime, rating, ratingNumber, ingredients, directions, createdBy, createdDate, categoryId) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.cookingTime =  cookingTime;
    this.rating = rating;
    this.ratingNumber = ratingNumber;
    this.ingredients = ingredients;
    this.directions = directions;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.categoryId = categoryId;
}

var recipe1 = new Recipe(1, 'Recipe1', 'imgUrl', 'cookingTime', 0, 0, 'ingredients', 'directions', 'user1@cookbook.hu', new Date(), 1);
var recipe2 = new Recipe(2, 'Recipe2', 'imgUrl', 'cookingTime', 0, 0, 'ingredients', 'directions', 'user2@cookbook.hu', new Date(), 2);
var recipes = [ recipe1, recipe2 ];

var recipeId = 3;

Recipe.find = function(criteria, callBack) {
    var result = [];
    if (criteria.email) {
        recipes.forEach(function(recipe) {
            if (recipe.createdBy.toLowerCase() == criteria.email.toLowerCase()) {
                result.push(recipe);
            }
        });

        return callBack(result);
    }

    if (criteria.searchText) {
        recipes.forEach(function(recipe) {
            if (recipe.name.toLowerCase().indexOf(criteria.searchText.toLowerCase()) > -1) {
                result.push(recipe);
            }
        });

        return callBack(result);
    }

    return callBack(recipes);
}

Recipe.create = function(newRecipe, callBack) {
    var recipe = new Recipe(
        recipeId,
        newRecipe.name,
        newRecipe.imgUrl,
        newRecipe.cookingTime,
        0,
        0,
        newRecipe.ingredients,
        newRecipe.directions,
        newRecipe.createdBy,
        new Date(),
        recipe.categoryId
    );
    recipes.push(recipe);

    recipeId += 1;

    return callBack(recipe);
}

Recipe.rate = function(newRating, callBack) {
    var modifiedRecipe = undefined;
    recipes.some(function(recipe) {
        if (recipe.id == newRating.id) {
            recipe.rating = (recipe.rating * recipe.ratingNumber + newRating.rating) / (recipe.ratingNumber + 1);
            recipe.ratingNumber += 1;

            modifiedRecipe = recipe;
            return true;
        }
    });

    if (modifiedRecipe != undefined) {
        return callBack(modifiedRecipe);
    } else {
        return callBack(null);
    }
}

module.exports = Recipe;
