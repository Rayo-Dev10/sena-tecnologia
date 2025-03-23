document.addEventListener("DOMContentLoaded", () => {
    showMainMenu();
});

function showMainMenu() {
    clearPage();
    addBackButton(null); // No hay vista anterior desde aquí

    const courses = [
        { name: "Estrategias para el acceso y uso de la información", id: "estrategias" },
        { name: "CoreSkills", id: "coreskills" }
    ];

    courses.forEach(course => {
        createButton(course.name, () => handleCourseClick(course.id));
    });
}

function handleCourseClick(courseId) {
    if (courseId === "coreskills") {
        window.location.href = "https://example.com";
    } else if (courseId === "estrategias") {
        showSubOptions();
    }
}

function showSubOptions() {
    clearPage();
    addBackButton(showMainMenu); // Volver al menú principal

    const options = [
        { name: "Prácticas", action: () => loadPracticas() },
        { name: "Talleres", action: () => loadTalleres() }
    ];

    options.forEach(option => {
        createButton(option.name, option.action);
    });
}

function loadPracticas() {
    clearPage();
    addBackButton(showSubOptions); // Volver a elegir entre prácticas/talleres

    const practicas = ["practica-1", "practica-2"]; // Se pueden agregar más dinámicamente

    practicas.forEach(practica => {
        createButton(
            practica.replace("-", " ").toUpperCase(),
            () => window.location.href = `cursos-cortos/practicas/${practica}/index.html`
        );
    });
}

function loadTalleres() {
    clearPage();
    addBackButton(showSubOptions); // Volver a elegir entre prácticas/talleres

    const talleres = ["taller-1", "taller-2"]; // Se pueden agregar más dinámicamente

    talleres.forEach(taller => {
        createButton(
            taller.replace("-", " ").toUpperCase(),
            () => window.location.href = `cursos-cortos/talleres/${taller}/index.html`
        );
    });
}

/* 🔹 Funciones reutilizables */
function createButton(text, action) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = text;
    button.onclick = action;
    document.getElementById("courses-container").appendChild(button);
}

function clearPage() {
    document.getElementById("courses-container").innerHTML = "";
}

function addBackButton(action) {
    const container = document.getElementById("back-button-container");
    container.innerHTML = "";

    if (action) {
        const backButton = document.createElement("div");
        backButton.id = "back-button";
        backButton.textContent = "Regresar atrás";
        backButton.onclick = action;
        container.appendChild(backButton);
    }
}
