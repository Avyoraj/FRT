document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recipeForm');
    const recipeResults = document.getElementById('recipeResults');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const preferences = form.elements['preferences'].value;

        // For simplicity, we'll just display a mock recipe list
        const recipes = [
            { name: 'Pasta Carbonara', description: 'Creamy pasta with bacon and cheese.' },
            { name: 'Chicken Stir Fry', description: 'Healthy chicken and vegetable stir fry.' },
            { name: 'Chocolate Chip Cookies', description: 'Classic homemade cookies with chocolate chips.' }
        ];

        // Clear previous results
        recipeResults.innerHTML = '';

        // Display each recipe
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
            `;
            recipeResults.appendChild(recipeElement);
        });

        // Optionally, you can send user preferences to the backend for real recommendations
        // This would involve making a fetch request to your backend API

    });
});
