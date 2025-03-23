document.addEventListener("DOMContentLoaded", () => {
  // Datos generales
  const datosGenerales = {
    titulo: "Taller No. 2: Leer y tomar nota",
    aprendiz: "Rayo Palatianos",
    identificacion: "1002901429",
    tutor: "Elcy Liliana Zapata Hoyos",
    ciudadFecha: "Pensilvania, 23 de Marzo de 2025"
  };

  // Actividad 1
  const actividad1 = {
    ideaPrincipal: "La idea central del video es que <strong>la pobreza puede reducirse mediante la mejora de las condiciones habitacionales</strong>. Paul Pholeros argumenta que reparar y adecuar viviendas no solo resuelve problemas inmediatos de salud y seguridad, sino que también empodera a las comunidades para romper ciclos de desventaja económica.",
    datosRelevantes: [
      "Viviendas en mal estado contribuyen a enfermedades respiratorias y parasitarias.",
      "La inversión en infraestructura doméstica reduce costos médicos a largo plazo.",
      "Las mejoras técnicas (techos, pisos, sistemas de agua) transforman la calidad de vida."
    ],
    opinion: "Este enfoque es revolucionario porque aborda la pobreza desde la raíz. Coincido con la premisa de que un entorno digno es fundamental para el desarrollo humano. En mi experiencia, he observado cómo el acceso a servicios básicos mejora la productividad en comunidades vulnerables."
  };

  // Actividad 2
  const actividad2 = {
    tituloArticulo: "Internet seguro: recomendaciones para educadores, padres y estudiantes",
    pistasTipograficas: [
      "<strong>Negritas:</strong> Destacan conceptos clave como <em>“privacidad”</em> y <em>“ciberacoso”</em>.",
      "<strong>Subtítulos:</strong> Dividen el contenido en secciones como <em>“Riesgos en línea”</em> y <em>“Herramientas de protección”</em>.",
      "<strong>Viñetas:</strong> Organizan recomendaciones prácticas para padres y educadores."
    ],
    pistasDiscursivas: [
      "Frases como <em>“Es fundamental enseñar a los estudiantes a identificar fuentes confiables”</em> señalan prioridades.",
      "Ejemplos concretos de plataformas seguras (ej. <em>Google Classroom</em>) ilustran aplicaciones prácticas."
    ],
    resumen: [
      "Supervisión activa del uso de dispositivos.",
      "Enseñanza de protocolos de seguridad en redes sociales.",
      "Fomento de la comunicación abierta sobre riesgos en línea."
    ]
  };

  const infografia = [
    { icono: "📝", titulo: "Materiales esenciales", descripcion: "Organiza tus herramientas: libros, cuadernos, computadora y accesorios de escritura.", imagen: "./img/Materiales.webp" },
    { icono: "⏰", titulo: "Horario fijo", descripcion: "Define bloques de estudio diarios para evitar la procrastinación y maximizar la productividad." },
    { icono: "🪑", titulo: "Mobiliario ergonómico", descripcion: "Silla con soporte lumbar y escritorio ajustable para una postura saludable.", imagen: "./img/Silla.webp" },
    { icono: "💡", titulo: "Iluminación adecuada", descripcion: "Combina luz natural y LED para reducir la fatiga visual y crear un ambiente claro." },
    { icono: "🔇", titulo: "Control de sonidos", descripcion: "Espacio silencioso o música instrumental suave para mantener la concentración.", imagen: "./img/Espacio.jpeg" },
    { icono: "🏠", titulo: "Lugar dedicado", descripcion: "Área exclusiva para estudiar, lejos de zonas de tránsito o entretenimiento." },
    { icono: "🌡️", titulo: "Temperatura óptima", descripcion: "Mantén una temperatura entre 18-22°C para evitar distracciones por calor o frío.", imagen: "./img/Temperatura.jpeg" }
  ];

// Argumentos con pistas tipográficas
const argumentos = [
  "Un espacio de estudio bien <strong>organizado</strong> ayuda a minimizar las interrupciones <em>visuales</em> y auditivas, mejorando la <span style='color: var(--azul-claro); font-weight: bold;'>concentración</span>.",
  "El mobiliario <em>ergonómico</em>, como una silla con <strong>soporte lumbar</strong> y un escritorio ajustable, reduce el riesgo de problemas físicos y contribuye a mantener <span class='resaltado'>altos niveles de energía</span> durante el estudio.",
  "Tener un espacio <strong>dedicado</strong> con todos los materiales necesarios permite <em>ahorrar tiempo</em> y evitar interrupciones innecesarias, optimizando el <span style='font-style: italic; color: var(--gris);'>flujo de trabajo</span>.",
  "La iluminación adecuada, el control del ruido y una temperatura <strong>óptima</strong> son factores clave para crear un ambiente cómodo y <span style='color: var(--azul-oscuro); font-weight: bold;'>motivador</span>, favoreciendo la concentración y evitando distracciones."
];

  // Renderizar datos generales
  document.getElementById("titulo-taller").textContent = datosGenerales.titulo;
  document.getElementById("datos-generales").innerHTML = `
    <p><strong>Nombre del aprendiz:</strong> ${datosGenerales.aprendiz}</p>
    <p><strong>Número de identificación:</strong> ${datosGenerales.identificacion}</p>
    <p><strong>Nombre del Tutor:</strong> ${datosGenerales.tutor}</p>
    <p><strong>Ciudad y Fecha:</strong> ${datosGenerales.ciudadFecha}</p>
  `;

  // Renderizar Actividad 1
  document.getElementById("actividad1").innerHTML = `
    <h3>a. Idea principal del expositor</h3>
    <p>${actividad1.ideaPrincipal}</p>
    <h3>b. Datos relevantes</h3>
    <ul>${actividad1.datosRelevantes.map(dato => `<li>${dato}</li>`).join("")}</ul>
    <h3>c. Opinión personal</h3>
    <p>${actividad1.opinion}</p>
  `;

  // Renderizar Actividad 2
  document.getElementById("actividad2").innerHTML = `
    <h3>Análisis del artículo</h3>
    <p>El artículo <em>“${actividad2.tituloArticulo}”</em> utiliza las siguientes pistas para guiar la lectura:</p>
    <h4>Pistas tipográficas:</h4>
    <ul>${actividad2.pistasTipograficas.map(pista => `<li>${pista}</li>`).join("")}</ul>
    <h4>Pistas discursivas:</h4>
    <ul>${actividad2.pistasDiscursivas.map(pista => `<li>${pista}</li>`).join("")}</ul>
    <h4>Resumen:</h4>
    <ul>${actividad2.resumen.map(punto => `<li>${punto}</li>`).join("")}</ul>
  `;

  // Renderizar Infografía
  const infografiaContainer = document.getElementById("infografia");
  infografia.forEach(item => {
    if (item.imagen) {
      infografiaContainer.innerHTML += `<img src="${item.imagen}" alt="${item.titulo}" class="foto">`;
    }
    infografiaContainer.innerHTML += `
      <div class="tarjeta">
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      </div>
    `;
  });

  // Renderizar Conclusión con la clase correcta
  document.getElementById("conclusion").innerHTML = `
    <div class="conclusion">
      <h3>🎯</h3>
      <p>Un ambiente de estudio adecuado mejora la concentración, la productividad y el bienestar.</p>
    </div>
  `;

  // Renderizar Argumentos
  const argumentosContainer = document.getElementById("argumentos");
  argumentos.forEach(arg => {
    argumentosContainer.innerHTML += `<li>${arg}</li>`;
  });

// Insertar referencias y citas APA
document.getElementById("nota-imagenes").innerHTML = `
  <strong>Nota:</strong> <br>
  Todas las imágenes utilizadas en este documento fueron generadas con la herramienta de inteligencia artificial 
  <em>Microsoft Designer</em>. Las imágenes son ilustrativas y fueron diseñadas específicamente para este proyecto.
  <br><br>
  <strong>Referencias:</strong> <br>
  Servicio Nacional de Aprendizaje (SENA). (2014). <em>Lectura y toma de notas</em>. Recuperado de 
  <a href="https://zajuna.sena.edu.co/Repositorio/Complementaria/institution/SENA/Tecnologia/13510005/Contenido/DocArtic/AA2_Bibliotecas.pdf" target="_blank">https://zajuna.sena.edu.co/Repositorio/Complementaria/institution/SENA/Tecnologia/13510005/Contenido/DocArtic/AA2_Bibliotecas.pdf</a>
`;
  
});
