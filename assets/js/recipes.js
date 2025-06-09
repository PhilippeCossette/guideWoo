export async function loadRecipes() {
    try {
        const response = await fetch("recipes.json");
        const recipes = await response.json();
        const container = document.querySelector(".recipes-container");

        container.innerHTML = "";


        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('card');

            recipeDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            `;

            container.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error('Failed to load recipes:', error);
    }
}
