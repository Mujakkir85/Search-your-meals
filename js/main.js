
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

const displaySearchFood = (mealsData) => {
    //console.log(mealsData);
    const ShowfoodItems = document.getElementById('show-foods');
    ShowfoodItems.textContent = '';
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


const getFoodItemDetails = (DetailsById) => {
    //console.log(DetailsById);
    const urlById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${DetailsById}`
    //console.log(urlById);

    fetch(urlById)
        .then(Response => Response.json())
        .then(dataById => showFoodItemDetails(dataById.meals[0]))
}


const showFoodItemDetails = () => {

    const singleDetails = document.getElementById('single-food-details');

}