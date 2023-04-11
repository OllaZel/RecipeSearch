

function ListRecipes({label, image, cuisineType, mealType, calories, ingredientLines}) {

    return(
        <div className="container">
        <div className="container-card">


            <div className="container-image">
                <img src={image} alt="foto"/>
            </div>

            <div className="card">

            <div>
                <h2>{label}</h2>
            </div>

            <div>
                <p>{cuisineType}</p>
                <p>{mealType}</p>
                <p>{calories.toFixed()} calories</p>
            </div>

            <ol>{ingredientLines.map((item, index) => (
                <li key={index} className="list">{item}</li>
            ))}</ol>

            </div>

        </div>
        </div>
    )
}

export default ListRecipes;