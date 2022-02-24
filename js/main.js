
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

