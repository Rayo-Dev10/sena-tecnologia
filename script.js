document.addEventListener("DOMContentLoaded", () => {
    showMainMenu();
});

function showMainMenu() {
    clearPage();
    addBackButton(null); // No hay vista anterior desde aquí

    const courses = [
        { name: "Estrategias para el acceso y uso de la información", id: "estrategias" },
        { name: "CoreSkills", id: "coreskills" },
        { name: "ADSO", id: "adso" } // Nueva opción para ADSO
    ];

    courses.forEach(course => {
        createButton(course.name, () => handleCourseClick(course.id));
    });
}

function handleCourseClick(courseId) {
    if (courseId === "coreskills") {
        window.location.href = "#";
    } else if (courseId === "estrategias") {
        showSubOptions();  // 🔹 Corrección: Ahora sí carga el menú de estrategias
    } else if (courseId === "adso") {
        showADSOOptions();
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

    const practicas = ["practica-1", "practica-2"];

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

    const talleres = ["taller-1", "taller-2"];

    talleres.forEach(taller => {
        createButton(
            taller.replace("-", " ").toUpperCase(),
            () => window.location.href = `cursos-cortos/talleres/${taller}/index.html`
        );
    });
}

function showADSOOptions() {
    clearPage();
    addBackButton(showMainMenu); // Volver al menú principal

    const activities = [
        { name: "Actividad 1", action: () => showActividad1() }
    ];

    activities.forEach(activity => {
        createButton(activity.name, activity.action);
    });
}

function showActividad1() {
    clearPage();
    addBackButton(showADSOOptions); // Volver a ADSO

    createButton("Evidencias", () => showEvidencias());
}

function showEvidencias() {
    clearPage();
    addBackButton(showActividad1); // Volver a Actividad 1

    createButton("1", () => window.location.href = "ADSoctividad 1/Evidencias/1/index.html");
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
