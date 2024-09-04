document.addEventListener("DOMContentLoaded", () => {
    const ecosystemSelect = document.getElementById("ecosystem");
    const selectedEcosystemSpan = document.getElementById("selected-ecosystem");
    const startButton = document.getElementById("start-button");
    const ecosystemSelectionDiv = document.getElementById("ecosystem-selection");
    const foodWebDiv = document.getElementById("food-web");
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
        ecosystemSelectionDiv.classList.add('hidden'); // Hide ecosystem selection
        foodWebDiv.classList.remove('hidden'); // Show the food web diagram
    });

    // Drag and Drop functionality
    const organisms = document.querySelectorAll('.organism');
    const webBoxes = document.querySelectorAll('.web-box');

    organisms.forEach(organism => {
        organism.addEventListener('dragstart', dragStart);
    });

    webBoxes.forEach(box => {
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const draggedElement = document.getElementById(data);
        event.target.appendChild(draggedElement);
    }
});
