const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    // console.log(meals);
    // Step 1: Container Element
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        //Step 2: Create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
            <div class="col">
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>         
                <a href='${meal.strYoutube}'><button>Live</button></a>
                </div>
            </div>
            </div>
        `;

        mealsContainer.appendChild(mealDiv);


        //Step 3: Set contain of the child

        //Step 4: appendChild

    });
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}

loadMeals('');