import { loadRecipes } from "./recipes.js";
import { toggleNavigation } from "./navigation.js";


const searchInput = document.getElementById("search");
const typeSelect = document.getElementById("category");

function applyFilters() {
  const text = searchInput.value;
  const type = typeSelect.value;
  loadRecipes(text, type);
}

searchInput.addEventListener("input", applyFilters);
typeSelect.addEventListener("change", applyFilters);

// Initial render
loadRecipes();

toggleNavigation();