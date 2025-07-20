export async function loadRecipes(filterText = "", filterType = "") {
    try {
        const response = await fetch("recipes.json");
        let recipes = await response.json();

            // 🔽 Populate the <select> once when filters are empty
    if (filterText === "" && filterType === "") {
      const select = document.getElementById("category");

      // Remove all options except the first ("All types")
      select.innerHTML = '<option value="">Tout types</option>';

      const types = [...new Set(recipes.map(r => r.type))].sort();
      types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        select.appendChild(option);
      });
    }

        recipes = recipes.filter(recipe => {
        const matchesText = recipe.name.toLowerCase().includes(filterText.toLowerCase());
        const matchesType = filterType === "" || recipe.type === filterType;
        return matchesText && matchesType;
        });

        recipes.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        });


        const container = document.querySelector(".recipes-container");

        container.innerHTML = "";


        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('card');

            recipeDiv.innerHTML = `
            <header class="card-header">
            <h2 class="card-title">${recipe.name}</h2>
            <p class="card-type ${recipe.type}">${recipe.type}</p>
            </header>
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
