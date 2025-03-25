document.addEventListener("DOMContentLoaded", () => {
    const eventos = [
        {
            año: "Definición",
            titulo: "¿Qué es un sistema?",
            descripcion: `
                Un sistema es un <b>conjunto organizado</b> de elementos interdependientes que <b>interactúan</b> entre sí para formar un <b>todo complejo</b> y funcional. <br><br>
                Está compuesto por <b>componentes</b> (partes individuales), <b>relaciones</b> (interacciones entre ellos) y un <b>propósito</b> (objetivo final). <br><br>
                Puede clasificarse según su naturaleza (<i>físico o abstracto</i>), su relación con el entorno (<i>abierto o cerrado</i>) y su grado de complejidad (<i>simple o complejo</i>). <br><br>
                Ejemplos: <i>Un ecosistema, una empresa, el cuerpo humano o un software.</i>
            `,
            imagen: "./img/1.webp",
        },

        {
            año: "Conceptos Fundamentales",
            titulo: "Enfoque Holístico y Retroalimentación",
            descripcion: `
                El enfoque holístico, propuesto por <b>Ludwig von Bertalanffy</b>, sostiene que un sistema debe analizarse como un <b>todo integrado</b>, en lugar de estudiar sus partes de manera aislada. <br><br>
                🔄 <b>Retroalimentación:</b> Es el proceso mediante el cual un sistema <b>ajusta su comportamiento</b> en función de los resultados obtenidos. Se clasifica en: <br>
                🔹 <b>Positiva:</b> Amplifica los cambios, promoviendo el crecimiento o desestabilización (<i>Ej: reacción en cadena nuclear, expansión económica</i>). <br>
                🔹 <b>Negativa:</b> Mantiene el equilibrio del sistema al contrarrestar desviaciones (<i>Ej: termorregulación en el cuerpo, control de temperatura en un aire acondicionado</i>). <br><br>
                Ambos conceptos son esenciales para comprender la <b>autorregulación y evolución</b> de los sistemas en distintos ámbitos.
            `,
            imagen: "./img/2.jpg",
        },

        {
            año: "Clasificación",
            titulo: "Tipos de sistemas",
            descripcion: `
                <b>🌱 Naturales:</b> Se originan sin intervención humana. <i>Ej: bosque, río.</i><br> 
                <b>🏭 Artificiales:</b> Creaciones humanas con propósito específico. <i>Ej: automóvil, edificio.</i><br> 
                <b>🔄 Mixtos:</b> Combinan elementos naturales y artificiales. <i>Ej: invernadero, presa hidroeléctrica.</i><br> 
                <b>🌎 Abiertos:</b> Intercambian materia y energía con el entorno. <i>Ej: cuerpo humano, ecosistema.</i><br> 
                <b>🔒 Cerrados:</b> Solo permiten el intercambio de energía. <i>Ej: lata de refresco cerrada, botella térmica.</i><br> 
                <b>👀 Reales:</b> Existen físicamente y pueden observarse. <i>Ej: montaña, computadora.</i><br> 
                <b>📊 Ideales:</b> Modelos teóricos sin existencia tangible. <i>Ej: ecuación de crecimiento, números imaginarios.</i><br> 
                <b>💡 Abstractos:</b> Conceptos intangibles y sistemas de pensamiento. <i>Ej: lenguaje de programación, teorías filosóficas.</i>
            `,
            imagen: "./img/3.webp",
        },
        {
            año: "Elementos Básicos",
            titulo: "Entradas, Procesamiento y Salidas",
            descripcion: `
                Todo sistema funcional opera mediante <b>tres elementos esenciales</b>: <br><br>
                🔹 <b>Entrada (Input):</b> Elementos que ingresan al sistema para ser procesados (<i>Ej: materia prima en una fábrica, datos en un software</i>). <br>
                🔹 <b>Procesamiento:</b> Transformación de las entradas para generar un resultado (<i>Ej: ensamblaje de productos, ejecución de un algoritmo</i>). <br>
                🔹 <b>Salida (Output):</b> Resultados obtenidos tras el procesamiento (<i>Ej: producto terminado, informe generado</i>). <br><br>
                Estos elementos permiten comprender la <b>dinámica operativa</b> de cualquier sistema, desde organismos vivos hasta estructuras tecnológicas. 
            `,
            imagen: "./img/4.webp",
        },
        {
            año: "Aplicaciones",
            titulo: "Uso en Diversas Áreas",
            descripcion: `
                La teoría de sistemas tiene aplicaciones en múltiples disciplinas, permitiendo analizar estructuras complejas: <br><br>
                🔬 <b>Biología:</b> Comprende organismos como sistemas interconectados (<i>Ej: ecosistemas, metabolismo celular</i>). <br>
                🏗️ <b>Ingeniería:</b> Optimiza procesos y estructuras (<i>Ej: diseño de circuitos, gestión de redes</i>). <br>
                🌍 <b>Ciencias Sociales:</b> Estudia sociedades y organizaciones (<i>Ej: sistemas políticos, redes sociales</i>). <br>
                💰 <b>Economía:</b> Modela flujos financieros y productivos (<i>Ej: oferta y demanda, mercados</i>). <br>
                💻 <b>Desarrollo de Software:</b> Estructura programas en módulos interdependientes (<i>Ej: arquitectura de software, bases de datos</i>). <br><br>
                Su versatilidad la convierte en una <b>herramienta clave</b> para comprender y mejorar sistemas en distintos ámbitos.  
            `,
            imagen: "./img/5.webp",
        }


    ];

    const gridTop = document.getElementById("gridTop");
    const gridBottom = document.getElementById("gridBottom");

    // Renderizar tarjetas en el primer grid
    eventos.slice(0, 3).forEach((evento, index) => {
        const div = document.createElement("div");
        div.classList.add("event");
        div.style.borderColor = getBorderColor(index);
        div.innerHTML = `
            <h2>${evento.titulo}</h2>
            <p class="year">${evento.año}</p>
            <p>${evento.descripcion}</p>
            <img src="${evento.imagen}" alt="${evento.titulo}">
        `;
        gridTop.appendChild(div);
    });

    // Renderizar tarjetas en el segundo grid
    eventos.slice(3).forEach((evento, index) => {
        const div = document.createElement("div");
        div.classList.add("event");
        div.style.borderColor = getBorderColor(index + 3);
        div.innerHTML = `
            <h2>${evento.titulo}</h2>
            <p class="year">${evento.año}</p>
            <p>${evento.descripcion}</p>
            <img src="${evento.imagen}" alt="${evento.titulo}">
        `;
        gridBottom.appendChild(div);
    });

    // Función para asignar colores distintivos a las tarjetas
    function getBorderColor(index) {
        const colors = ["#5e3370", "#3498db", "#e74c3c", "#2ecc71", "#f39c12"];
        return colors[index % colors.length];
    }

    // Generar PDF al hacer clic en el botón
    document.getElementById("generatePDF").addEventListener("click", async () => {
        const { jsPDF } = window.jspdf;
        const button = document.getElementById("generatePDF");
    
        // Ocultar botón durante la generación del PDF
        button.style.display = "none";
    
        const content = document.querySelector(".container");
        const images = content.querySelectorAll("img");
    
        // Guardar estilos originales de las imágenes
        const originalStyles = [];
        images.forEach((img, index) => {
            originalStyles[index] = {
                width: img.style.width,
                height: img.style.height,
                maxWidth: img.style.maxWidth,
                maxHeight: img.style.maxHeight,
                display: img.style.display,
                margin: img.style.margin
            };
    
            // Aplicar tamaño 256x256px y centrar (excepto la segunda imagen)
            if (!img.classList.contains("img-tarjeta-2")) {
                img.style.width = "256px";
                img.style.height = "256px";
                img.style.maxWidth = "256px";
                img.style.maxHeight = "256px";
                img.style.display = "block";
                img.style.margin = "0 auto"; // Centrar la imagen
            }
        });
    
        // Capturar el contenido con html2canvas
        const canvas = await html2canvas(content, {
            scale: 2,
            scrollY: 0,
            useCORS: true,
            backgroundColor: "#ffffff"
        });
    
        // Restaurar estilos originales de las imágenes después de la captura
        images.forEach((img, index) => {
            img.style.width = originalStyles[index].width;
            img.style.height = originalStyles[index].height;
            img.style.maxWidth = originalStyles[index].maxWidth;
            img.style.maxHeight = originalStyles[index].maxHeight;
            img.style.display = originalStyles[index].display;
            img.style.margin = originalStyles[index].margin;
        });
    
        // Convertir el canvas a una imagen
        const imgData = canvas.toDataURL("image/png");
    
        // Obtener dimensiones del contenido
        const contentWidth = canvas.width;
        const contentHeight = canvas.height;
    
        // Calcular dimensiones en mm (1px ≈ 0.2645mm)
        const pdfWidth = contentWidth * 0.2645;
        const pdfHeight = contentHeight * 0.2645;
    
        // Crear el documento PDF con tamaño dinámico
        const doc = new jsPDF({
            orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
            unit: "mm",
            format: [pdfWidth, pdfHeight]
        });
    
        // Agregar la imagen al PDF
        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    
        // Guardar el PDF con un nombre personalizado
        doc.save("Infografía_Teoría_de_Sistemas.pdf");
    
        // Modificar el botón cuando reaparece
        button.textContent = "PDF descargado";
        button.style.display = "block";
        button.style.margin = "20px auto";
        button.style.textAlign = "center";
    });
    
});