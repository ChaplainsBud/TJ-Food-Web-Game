document.addEventListener("DOMContentLoaded", () => {
    const ecosystemSelect = document.getElementById("ecosystem");
    const selectedEcosystemSpan = document.getElementById("selected-ecosystem");
    const startButton = document.getElementById("start-button");
    let selectedEcosystem = "Forests"; // default ecosystem

    // Function to update the background image based on selected ecosystem
    function updateBackgroundImage(ecosystem) {
        document.body.style.backgroundImage = `url('${ecosystem.toLowerCase()}.jpg')`;
    }

    // Update the displayed selected ecosystem and background image when the selection changes
    ecosystemSelect.addEventListener("change", (event) => {
        selectedEcosystem = event.target.value;
        selectedEcosystemSpan.textContent = selectedEcosystem;
        updateBackgroundImage(selectedEcosystem);
    });

    // Handle the start button click
    startButton.addEventListener("click", () => {
        console.log(`Starting game with the ${selectedEcosystem} ecosystem.`);
        // TODO: Add logic to generate the initial incorrect food web setup based on the selected ecosystem
    });
});
