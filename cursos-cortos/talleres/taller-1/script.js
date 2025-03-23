document.addEventListener("DOMContentLoaded", function () {
    // Datos generales
    const datos = {
        "Nombre del aprendiz": "Rayo Palatianos",
        "Número de identificación": "1002901429",
        "Nombre del Tutor": "Elcy Liliana Zapata Hoyos",
        "Ciudad y Fecha": "Pensilvania, 22 de marzo de 2025"
    };

    // Preguntas y respuestas
    const preguntasRespuestas = [
        {
            pregunta: "a. ¿Cuáles son las ventajas de utilizar las comillas en el proceso de búsqueda?",
            respuesta: "Las comillas permiten realizar búsquedas exactas, reduciendo la ambigüedad y mejorando la precisión al encontrar frases específicas."
        },
        {
            pregunta: "b. Explique: ¿Qué facilita el uso de comodines en una caja de búsqueda?",
            respuesta: "El uso de comodines facilita la búsqueda de variaciones de una palabra, incluyendo plurales y diferentes terminaciones."
        },
        {
            pregunta: "c. Mencione 1 ventaja y una desventaja de usar búsqueda por palabra clave y por tema.",
            respuesta: "Ventaja búsqueda por palabra clave: Mayor flexibilidad para descubrir términos nuevos. Desventaja: Puede ser menos precisa. <br><br> Ventaja búsqueda por tema: Más específica y recupera información relevante. Desventaja: Requiere conocer términos específicos."
        }
    ];

    // Tabla de fuentes y herramientas
    const tablaDatos = [
        { fuente: "Libros", herramienta: "Catálogo de bibliotecas" },
        { fuente: "Normas", herramienta: "Bases de datos especializadas (ej. Icontec)" },
        { fuente: "Páginas web", herramienta: "Buscadores de internet (Google, Bing, etc.)" },
        { fuente: "Redes sociales", herramienta: "Plataformas sociales (Facebook, X, etc.)" },
        { fuente: "Revistas", herramienta: "Bases de datos académicas (Google Académico)" },
        { fuente: "Multimedia", herramienta: "Plataformas audiovisuales (YouTube, Vimeo, etc.)" }
    ];

    // Llenar ficha de información
    const infoContainer = document.getElementById("info");
    for (const clave in datos) {
        let div = document.createElement("div");
        div.classList.add("info-item");
        div.innerHTML = `<strong>${clave}:</strong> ${datos[clave]}`;
        infoContainer.appendChild(div);
    }

    // Llenar preguntas y respuestas
    const preguntasContainer = document.getElementById("preguntas");
    preguntasRespuestas.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `<p class="pregunta">${item.pregunta}</p><p class="respuesta">${item.respuesta}</p>`;
        preguntasContainer.appendChild(div);
    });

    // Llenar tabla
    const tablaContainer = document.getElementById("tabla");
    tablaDatos.forEach(item => {
        let row = `<tr><td>${item.fuente}</td><td>${item.herramienta}</td></tr>`;
        tablaContainer.innerHTML += row;
    });

    // Insertar cita APA
    document.getElementById("cita").innerHTML = `<strong>Referencia:</strong> <br>
    Servicio Nacional de Aprendizaje (SENA). (2014). <em>La información: acceso, fuentes y búsqueda</em>. Servicio Nacional de Aprendizaje (SENA).`;
});
