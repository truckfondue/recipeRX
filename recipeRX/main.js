// $(document).on('ready', function() {
  
// });
//
//Initial Ingredient Contructor 
// the argument type is not adding to the user experience. This will nee to be added at a later time
// 
// Ingredients will be converted or scaled before being added to a recipe


// Recipe.prototype.convert = function(){
	


// }

// Recipe.prototype.scale = function(recipe){

// }

// ingredients will be an array of individual Ingredient items

var Recipe = function(name, ingredients) {
	this.name = name;
	this.ingredients = ingredients;
};

//need an add ingrdients prototype to the recipe
//
//Recipes will get posted to MyRx

// allRecipes is where user created recipes are pushed
var allRecipes = [];

$('#create').on('click', function(e){
	e.preventDefault();
	console.log('creat a recipe test');
	var name = $('#rx-name').val();
	// helper function to work around name being a problematic naming convention
	var recipe = name;
	var items = [];
	// using each allows n-number of items to be added to iems
	$('.clone').each(function(){
		var name = $(this).find('.name').val();
		var amount = $(this).find('.amount').val();
		var units = $(this).find('.units').val();
		// essentially an Ingredient constructor
		items.push({
			name: name,
			amount: amount,
			units: units
		});
	});
	console.log(items);
	console.log(name);
	// using the Recipe Contructor
	var recipe = new Recipe(name, items);
	allRecipes.push(recipe);
	console.log('created a ingredients list');
	
});
	
// allows the user to enter as many ingredients as they wish
$('#add-items').on('click', function(){
	console.log('test');
	var clone = $('#input-template')
  			.clone()
  			.attr('id', null)
  			.addClass('clone');
	$('#items').append(clone);
});

$('.btn-danger').on('click', function(){
	console.log('Name your Rx event-handler');
	$('#name-your-rx').attr('id', null);

});

$("#scale-btn").on('click', function(e){
	e.preventDefault();
	console.log('Scale Button event-handler');
<<<<<<< HEAD
	var scaleFactor = prompt('What factor would you like to scale by? \n For ex: 2, 3, 1/2...')
});

=======
	var scaleFactor = prompt('What factor would you like to scale by? \n For ex: 2, 3, 1/2...');
	$('.clone').each(function(){
		var amount = $(this).find('.amount').val();
		$(this).find('.amount').val(amount*scaleFactor);
	});	

});

$('#convert-btn').on('click', function(e){
	e.preventDefault(e);
	alert('By clicking the convert button you have opted to convert your entries to metric.\nUnits will be changed to grams(g) for values less than 1000g. Those larger will be converted to kilograms(kg).\nClick ok to continue.');
	$('.clone').each(function(){
		var amount = $(this).find('.amount').val();
		var units = $(this).find('.units').val();
		metricConverter(amount, units);

		$(this).find('.amount').val(A);
		$(this).find('.units').val(B);
		
	});	

});

// var A = [];
// var B = [];
var metricConverter = function(amount, units) {
	A = [];
	B = [];
	var conversionFactor = 1;
	var metricUnit = 'g';
	if (units === 'ea') {
		conversionFactor = 1;
		metricUnit = 'ea';
	}
	else if (units === 'tsp'){
		conversionFactor = 5;
	}
	else if (units === 'tbsp'){
		conversionFactor = 15;
	}
	else if (units === 'oz'){
		conversionFactor = 28;
	}
	else if (units === 'lbs'){
		conversionFactor = 454;
	}
	
	var newQuantity = amount * conversionFactor;
	if (newQuantity > 1000) {
		newQuantity = newQuantity/1000;
		metricUnit = 'kg';
	}
	console.log(newQuantity, metricUnit);
	A.push(newQuantity);
	B.push(metricUnit);
	return;

};

>>>>>>> 86c4b9ea538e69d62ccb1fc233afccff8058490f
var Ingredient = function(name, quantity, unit) {
	this.name = name;
	//this.type = type;
	this.quantity = quantity;
	this.unit = unit;

};

var chicken = new Ingredient('chicken', 4, 'oz');

var rice = new Ingredient('rice', 4, 'oz');

var cheese = new Ingredient('cheese', 2, 'oz');

var tortilla = new	Ingredient('tortilla', 1, 'ea');

var burrito = new Recipe('Burrito', [chicken, rice, cheese, tortilla]);
