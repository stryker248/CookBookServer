var Recipe = function(id, category, name, imgUrl, totalTime, rating, ratingNumber, createdBy, createdDate, ingredients, directions) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.totalTime =  totalTime;
    this.rating = rating;
    this.ratingNumber = ratingNumber;
    this.ingredients = ingredients;
    this.directions = directions;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.category = category;
}

var recipeAppetizer1 = new Recipe(
    1, 'Appetizer', 'Strawberry Goat Cheese Bruschetta', 'http://images.media-allrecipes.com/userphotos/600x600/1039162.jpg', '25 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '1/2 cup balsamic vinegar|12 slices Italian bread|1 tablespoon olive oil|1 pound strawberries, washed and diced|2 teaspoons fresh thyme leaves, plus more for serving|1 cup goat cheese, room temperature|salt and freshly ground pepper to taste',
    '1. Heat vinegar in a small skillet over medium-low heat. Simmer until reduced by about half, 8 to 10 minutes. Remove from heat and allow to cool to room temperature.|2. Prepare a grill for high heat. Place bread slices on a foil-lined baking sheet and drizzle with olive oil.|3. Combine strawberries and thyme in a small bowl and set aside.|4. Grill bread on the preheated grill until browned, about 3 minutes per side.|5. Spread goat cheese on toasted bread. Add black pepper, salt, and reduced vinegar to the strawberry mixture. Spoon over the goat cheese topped bruschetta. Garnish with additional thyme.'
);
var recipeAppetizer2 = new Recipe(
    2, 'Appetizer', 'Bacon Wrapped Smokies', 'http://images.media-allrecipes.com/userphotos/600x600/581356.jpg', '90 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '1 pound sliced bacon, cut into third|1 (14 ounce) package beef cocktail wieners|3/4 cup brown sugar, or to taste',
    '1. Preheat the oven to 325 degrees F (165 degrees C).|2. Refrigerate 2/3 of the bacon until needed. It is easier to wrap the wieners with cold bacon. Wrap each cocktail wiener with a piece of bacon and secure with a toothpick. Place on a large baking sheet. Sprinkle brown sugar generously over all.|3. Bake for 40 minutes in the preheated oven, until the sugar is bubbly. To serve, place the wieners in a slow cooker and keep on the low setting.'
);

var recipeChicken1 = new Recipe(
    3, 'Chicken', 'Baked Garlic Parmesan Chicken', 'http://images.media-allrecipes.com/userphotos/600x600/618489.jpg', '45 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '2 tablespoons olive oil|1 clove garlic, minced|1 cup dry bread crumbs|2/3 cup grated Parmesan cheese|1 teaspoon dried basil leaves|1/4 teaspoon ground black pepper|6 skinless, boneless chicken breast halves',
    '1. Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x13 inch baking dish.|2. In a bowl, blend the olive oil and garlic. In a separate bowl, mix the bread crumbs, Parmesan cheese, basil, and pepper. Dip each chicken breast in the oil mixture, then in the bread crumb mixture. Arrange the coated chicken breasts in the prepared baking dish, and top with any remaining bread crumb mixture.|3. Bake 30 minutes in the preheated oven, or until chicken is no longer pink and juices run clear.'
);
var recipeChicken2 = new Recipe(
    4, 'Chicken', 'Salsa Chicken', 'http://images.media-allrecipes.com/userphotos/600x600/3294655.jpg', '45 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '4 skinless, boneless chicken breast halves|4 teaspoons taco seasoning mix|1 cup salsa|1 cup shredded Cheddar cheese|2 tablespoons sour cream (optional)',
    '1. Preheat oven to 375 degrees F (190 degrees C)|2. Place chicken breasts in a lightly greased 9x13 inch baking dish. Sprinkle taco seasoning on both sides of chicken breasts, and pour salsa over all.|3. Bake at 375 degrees F (190 degrees C) for 25 to 35 minutes, or until chicken is tender and juicy and its juices run clear.|4. Sprinkle chicken evenly with cheese, and continue baking for an additional 3 to 5 minutes, or until cheese is melted and bubbly. Top with sour cream if desired, and serve.'
);

var recipeDessert1 = new Recipe(
    5, 'Dessert', 'Apple Pie', 'http://images.media-allrecipes.com/userphotos/600x600/736203.jpg', '90 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '1 recipe pastry for a 9 inch double crust pie|1/2 cup unsalted butter|3 tablespoons all-purpose flour|1/4 cup water|1/2 cup white sugar|1/2 cup packed brown sugar|8 Granny Smith apples - peeled, cored and sliced',
    '1. Preheat oven to 425 degrees F (220 degrees C). Melt the butter in a saucepan. Stir in flour to form a paste. Add water, white sugar and brown sugar, and bring to a boil. Reduce temperature and let simmer.|2. Place the bottom crust in your pan. Fill with apples, mounded slightly. Cover with a lattice work crust. Gently pour the sugar and butter liquid over the crust. Pour slowly so that it does not run off.|3. Bake 15 minutes in the preheated oven. Reduce the temperature to 350 degrees F (175 degrees C). Continue baking for 35 to 45 minutes, until apples are soft.'
);
var recipeDessert2 = new Recipe(
    6, 'Dessert', 'Chocolate Applesauce Cake', 'http://images.media-allrecipes.com/userphotos/600x600/563692.jpg', '55 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '2 cups unbleached all-purpose flour|2 tablespoons unsweetened cocoa powder|1 1/2 teaspoons baking soda|1/2 teaspoon salt|1/2 cup butter|1 1/2 cups white sugar|2 eggs|2 teaspoons vanilla extract|2 cups unsweetened applesauce|1 cup semisweet chocolate chips|1/2 cup chopped walnuts',
    '1. Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch pan. Sift together the flour, cocoa, baking soda and salt in a bowl. Set aside.|2. In a large bowl, cream the butter and sugar together until light and fluffy, using an electric mixer set on medium speed. Beat in the eggs one at a time. Blend in the vanilla extract. Beat in the flour mixture alternately with the applesauce.|3. Pour the batter into a 9x13 inch baking pan. Sprinkle with the chocolate chips and chopped walnuts. Bake at 350 degrees F (175 degrees C) for 35 minutes or until a toothpick inserted into the center of the cake comes out clean. Cool in the pan on a wire rack.'
);

var recipePasta1 = new Recipe(
    7, 'Pasta', 'Sausage Pasta', 'http://images.media-allrecipes.com/userphotos/600x600/1814168.jpg', '45 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '3/4 pound pasta|1 tablespoon olive oil|1 pound spicy Italian sausage|1 onion, chopped|4 cloves garlic, minced|1 (14.5 ounce) can chicken broth|1 teaspoon dried basil|1 (14.5 ounce) can diced tomatoes|1 (10 ounce) package frozen chopped spinach|1/2 cup grated Parmesan cheese',
    '1. Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain and reserve.|2. In a large skillet, heat oil and sausage; cook through until no longer pink. During the last 5 minutes of cooking, add onion and garlic to skillet. Add broth, basil and tomatoes with liquid.|3. Cook over medium heat for 5 minutes to slightly reduce. Add chopped spinach; cover skillet and simmer on reduced heat until spinach is tender.|4. Add pasta to skillet and mix together. Sprinkle with cheese and serve immediately.'
);
var recipePasta2 = new Recipe(
    8, 'Pasta', 'Mediterranean Pasta', 'http://images.media-allrecipes.com/userphotos/600x600/683300.jpg', '40 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '1 (8 ounce) package linguine pasta|3 slices bacon|1 pound boneless chicken breast half, cooked and diced|salt to taste|1 (14.5 ounce) can peeled and diced tomatoes with juice|1/4 teaspoon dried rosemary|1/3 cup crumbled feta cheese|2/3 cup pitted black olives|1 (6 ounce) can artichoke hearts, drained',
    '1. Bring a large pot of lightly salted water to a boil. Add linguine and cook for 8 to 10 minutes or until al dente; drain.|2. Place bacon in a large, deep skillet. Cook over medium-high heat until evenly brown. Drain, crumble and set aside.|3. Season chicken with salt. Stir chicken with bacon in a large skillet or saucepan. Add tomatoes and rosemary, and simmer 20 minutes. Stir in feta cheese, olives and artichoke hearts and cook until heated through. Toss with fresh cooked pasta and serve warm. Garnished with extra feta if desired.'
);

var recipePork1 = new Recipe(
    9, 'Pork', 'Baked Pork Chops', 'http://images.media-allrecipes.com/userphotos/600x600/3453298.jpg', '120 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '6 pork chops|1 teaspoon garlic powder|1 teaspoon seasoning salt|2 egg, beaten|1/4 cup all-purpose flour|2 cups Italian-style seasoned bread crumbs|4 tablespoons olive oil|1 (10.75 ounce) can condensed cream of mushroom soup|1/2 cup milk|1/3 cup white wine',
    '1. Preheat oven to 350 degrees F (175 degrees C).|2. Rinse pork chops, pat dry, and season with garlic powder and seasoning salt to taste. Place the beaten eggs in a small bowl. Dredge the pork chops lightly in flour, dip in the egg, and coat liberally with bread crumbs.|3. Heat the oil in a medium skillet over medium-high heat. Fry the pork chops 5 minutes per side, or until the breading appears well browned. Transfer the chops to a 9x13 inch baking dish, and cover with foil.|4. Bake in the preheated oven for 1 hour. While baking, combine the cream of mushroom soup, milk and white wine in a medium bowl. After the pork chops have baked for an hour, cover them with the soup mixture. Replace foil, and bake for another 30 minutes.'
);
var recipePork2 = new Recipe(
    10, 'Pork', 'Caramel Apple Pork Chops', 'http://images.media-allrecipes.com/userphotos/600x600/971671.jpg', '45 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '4 (3/4 inch) thick pork chops|1 teaspoon vegetable oil|2 tablespoons brown sugar|salt and pepper to taste|1/8 teaspoon ground cinnamon|1/8 teaspoon ground nutmeg|2 tablespoons unsalted butter|2 tart apples - peeled, cored and sliced|3 tablespoons pecans (optional)',
    '1. Preheat oven to 175 degrees F (80 degrees C). Place a medium dish in the oven to warm.|2. Heat a large skillet over medium-high heat. Brush chops lightly with oil and place in hot pan. Cook for 5 to 6 minutes, turning occasionally, or until done. Transfer to the warm dish, and keep warm in the preheated oven.|3. In a small bowl, combine brown sugar, salt and pepper, cinnamon and nutmeg. Add butter to skillet, and stir in brown sugar mixture and apples. Cover and cook until apples are just tender. Remove apples with a slotted spoon and arrange on top of chops. Keep warm in the preheated oven.|4. Continue cooking sauce uncovered in skillet, until thickened slightly. Spoon sauce over apples and chops. Sprinkle with pecans.'
);

var recipeSalad1 = new Recipe(
    11, 'Salad', 'Avocado Salad', 'http://images.media-allrecipes.com/userphotos/600x600/256657.jpg', '10 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '2 avocados - peeled, pitted and diced|1 sweet onion, chopped|1 green bell pepper, chopped|1 large ripe tomato, chopped|1/4 cup chopped fresh cilantro|1/2 lime, juiced|salt and pepper to taste',
    '1. In a medium bowl, combine avocados, onion, bell pepper, tomato, cilantro and lime juice. Gently toss until evenly coated. Season with salt and pepper.'
);
var recipeSalad2 = new Recipe(
    12, 'Salad', 'Spring Salad', 'http://images.media-allrecipes.com/userphotos/600x600/461429.jpg', '25 min', 0, 0, 'admin@cookbook.asd', new Date(),
    '12 slices bacon|2 heads fresh broccoli, florets only|1 cup chopped celery|1/2 cup chopped green onions|1 cup seedless green grapes|1 cup seedless red grapes|1/2 cup raisins|1/2 cup blanched slivered almonds|1 cup mayonnaise|1 tablespoon white wine vinegar|1/4 cup white sugar',
    '1. Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, crumble and set aside.|2. In a large salad bowl, toss together the bacon, broccoli, celery, green onions, green grapes, red grapes, raisins and almonds.|3. Whisk together the mayonnaise, vinegar and sugar. Pour dressing over salad and toss to coat. Refrigerate until ready to serve.'
);

var recipes = [
    recipeAppetizer1,
    recipeAppetizer2,
    recipeChicken1,
    recipeChicken2,
    recipeDessert1,
    recipeDessert2,
    recipePasta1,
    recipePasta2,
    recipePork1,
    recipePork2,
    recipeSalad1,
    recipeSalad2
];

var recipeId = 100;

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
        newRecipe.category,
        newRecipe.name,
        newRecipe.imgUrl,
        newRecipe.totalTime,
        0,
        0,
        newRecipe.createdBy,
        new Date(),
        newRecipe.ingredients,
        newRecipe.directions
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

Recipe.reset = function(callBack) {
    recipes = [
        recipeAppetizer1,
        recipeAppetizer2,
        recipeChicken1,
        recipeChicken2,
        recipeDessert1,
        recipeDessert2,
        recipePasta1,
        recipePasta2,
        recipePork1,
        recipePork2,
        recipeSalad1,
        recipeSalad2
    ];

    recipes.forEach(function(item) {
        item.rating = 0;
        item.ratingNumber = 0;
    });

    return callBack();
}

module.exports = Recipe;
