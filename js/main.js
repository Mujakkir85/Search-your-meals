
const loadSearchedFood = () => {
    let searchField = document.getElementById('input-field');
    const searchFooditem = searchField.value;
    console.log(searchFooditem);

    const allSearchedUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFooditem}`

    searchField.value = '';

    fetch(allSearchedUrl)
        .then(Response => Response.json())
        .then(data => displaySearchFood(data.meals));

}

//show all meals according to search

const displaySearchFood = (mealsData) => {
    //console.log(mealsData);
    const ShowfoodItems = document.getElementById('show-foods');

    ShowfoodItems.textContent = ''; /// clear previous items

    mealsData.forEach(singleMeal => {
        //console.log(singleMeal);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
           <div class="card">
                <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title text-primary">Name: ${singleMeal.strMeal}</h3>
                    <h5 class="card-title text-success">Category: ${singleMeal.strCategory}</h5>
                    <h5 class="card-title text-success">Origin: ${singleMeal.strArea}</h5>
                    <div class="text-center">
                    <a onclick = "getFoodItemDetails('${singleMeal.idMeal}')" class="btn btn-primary ">Explore Details</a> 
                    </div>
                </div>
            </div>
        `
        ShowfoodItems.appendChild(div);
    });

}

//get meal details by id

const getFoodItemDetails = (DetailsById) => {
    //console.log(DetailsById);
    const urlById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${DetailsById}`
    //console.log(urlById);

    fetch(urlById)
        .then(Response => Response.json())
        .then(dataById => showFoodItemDetails(dataById.meals))
}

//show meal details by id

const showFoodItemDetails = (singleMealDetails) => {
    // console.log(singleMealDetails);
    const singleDetails = document.getElementById('single-food-details');

    singleMealDetails.forEach(details => {
        //console.log(details);
        singleDetails.textContent = ''; /// clear previous items

        singleDetails.innerHTML = `
        <img src="${details.strMealThumb}" class="card-img-top " alt="...">
        <div class="card-body">
    
            <h3 class="card-title text-primary">Name: ${details.strMeal}</h3>
            <h5 class="card-title text-success">Category: ${details.strCategory}</h5>
            <h5 class="card-title text-success">Origin: ${details.strArea}</h5>
            <h3 class="text-warning">Ingredient Lists</h3>
            <ul>    
                 <li>${details.strIngredient1}</li>
                 <li>${details.strIngredient2}</li>
                 <li>${details.strIngredient3}</li>
                 <li>${details.strIngredient4}</li>
                 <li>${details.strIngredient5}</li>
                 <li>${details.strIngredient6}</li>
            </ul>
            <p class="card-text">${details.strInstructions.slice(0, 500)}</p>
    
        </div>
        `
    })

}


