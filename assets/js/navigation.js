export function toggleNavigation() {
    const buttonMenu = document.querySelector(".navigation-button");
    const buttonExit = document.querySelector(".navigation-exit-button");

    const navigationMenu = document.querySelector(".navigation-links");

    buttonMenu.addEventListener("click", () => {
        console.log("hekk");
        
        navigationMenu.classList.add("active");
    });

    buttonExit.addEventListener("click", () => {
        navigationMenu.classList.remove("active");
    });
}