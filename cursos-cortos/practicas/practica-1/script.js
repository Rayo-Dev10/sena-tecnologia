document.addEventListener("DOMContentLoaded", function () {
  // 📌 Datos generales
  const datos = {
      "Nombre del aprendiz": "Rayo Palatianos",
      "Número de identificación": "1002901429",
      "Nombre del Tutor": "Elcy Liliana Zapata Hoyos",
      "Ciudad y Fecha": "Pensilvania, 22 de marzo de 2025"
  };

  // 📌 Ejercicios prácticos con estrategias de búsqueda
  const ejercicios = [
      {
          caso: "Encuentre el título “Lineamientos ambientales para el desarrollo, implementación y seguimiento de planes de manejo ambiental de obras del proyecto de transporte urbano en Colombia” publicado por el Ministerio de Transporte en 2010.",
          herramienta: "Buscador web (Bing)",
          pasos: `
              <p><span class="numero-paso">1</span> Abrí el navegador Bing y escribí el siguiente texto entre comillas: <em>"Lineamientos ambientales para el desarrollo, implementación y seguimiento de planes de manejo ambiental de obras del proyecto de transporte urbano en Colombia"</em>.</p>
              <p><span class="numero-paso">2</span> En "Herramientas", utilicé el filtro de fecha personalizada y establecí el valor "01/01/2010".</p>
              <p><span class="numero-paso">3</span> Encontré el título en la siguiente URL:</p>
              <p class="url">https://documentos.bancomundial.org/es/publication/documents-reports/documentdetail/444561468018047428/lineamientos-ambientales-para-el-desarrollo-implementacion-y-seguimiento-de-planes-de-manejo-ambiental-de-obras-del-proyecto-de-transporte-urbano-en-colombia</p>
          `
      },
      {
          caso: "Encuentre en la biblioteca un libro que contenga en el título la palabra “Contabilidad”.",
          herramienta: "Catálogo de la Biblioteca del Banco de la República",
          pasos: `
              <p><span class="numero-paso">1</span> Accedí al sitio web de la Biblioteca del Banco de la República: </p>
              <p class="url">https://descubridor.banrepcultural.org/</p>
              <p><span class="numero-paso">2</span> Usé la opción de filtrar por tipo de contenido y seleccioné "Libro".</p>
              <p><span class="numero-paso">3</span> En "Otras opciones", seleccioné "Que empiece por" y escribí "Contabilidad" en el campo "Título".</p>
              <p><span class="numero-paso">4</span> Encontré el libro <em>"Contabilidad social y ambiental: un giro hacia el bienestar"</em> de Ricardo J. M. Pahlen Acuña, Ana María Campo y Paula A. D'Onofrío.</p>
              <p>URL del libro:</p>
              <p class="url">https://descubridor.banrepcultural.org/discovery/fulldisplay?docid=alma991017220037907486&context=L&vid=57BDLRDC_INST:57BDLRDC_INST&lang=es&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=ALL&query=title,begins_with,Contabilidad&pfilter=rtype,exact,books&offset=0</p>
          `
      },
      {
          caso: "Encuentre la norma técnica NTC2107 “Alimento para animales. Alimento completo para aves” que hace parte del sector de Agricultura.",
          herramienta: "Base de datos Icontec",
          pasos: `
              <p><span class="numero-paso">1</span> Abrí el navegador Bing y escribí exactamente lo siguiente en la barra de búsqueda: <em>"NTC2107" AND "AVES"</em>.</p>
              <p><span class="numero-paso">2</span> Encontré la norma en la siguiente URL:</p>
              <p class="url">https://tienda.icontec.org/gp-alimento-para-animales-alimento-completo-para-aves-de-corral-ntc2107-2021.html</p>
          `
      }
  ];

  // 📌 Referencias en formato APA con URLs visibles
  const referencias = [
      "Servicio Nacional de Aprendizaje (SENA). (2014). La información: acceso, fuentes y búsqueda. Servicio Nacional de Aprendizaje (SENA).",
      "Definición ABC. (s.f.). Definición de información. Consultado el 16 de noviembre de 2014, en: http://www.definicionabc.com/tecnologia/informacion.php#ixzz3J2tyTpMd",
      "Lamarca Lapuente, M. J. (2011). Principales buscadores. Consultado el 16 de noviembre de 2014, en: http://www.hipertexto.info/documentos/princip_buscad.htm"
  ];

  // 📌 Insertar información personal
  const infoContainer = document.getElementById("info");
  if (infoContainer) {
      for (const clave in datos) {
          let div = document.createElement("div");
          div.classList.add("info-item");
          div.innerHTML = `<strong>${clave}:</strong> ${datos[clave]}`;
          infoContainer.appendChild(div);
      }
  }

  // 📌 Insertar ejercicios en la tabla
  const tablaContainer = document.getElementById("tabla");
  if (tablaContainer) {
      ejercicios.forEach(item => {
          let row = `
              <tr>
                  <td>${item.caso}</td>
                  <td>${item.herramienta}</td>
                  <td>${item.pasos}</td>
              </tr>
          `;
          tablaContainer.innerHTML += row;
      });
  }

  // 📌 Insertar referencias en formato APA con URLs visibles
  const citaContainer = document.getElementById("cita");
  if (citaContainer) {
      let listaReferencias = "<ol>";
      referencias.forEach(ref => {
          listaReferencias += `<li>${ref}</li>`;
      });
      listaReferencias += "</ol>";
      citaContainer.innerHTML = listaReferencias;
  }
});
