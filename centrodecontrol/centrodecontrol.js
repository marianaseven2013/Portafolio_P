function renderCentroControl() {
    let section = document.createElement("section");
    section.className = "centro-control";

    let titulo = document.createElement("h2");
    titulo.textContent = "Proyectos";
    section.appendChild(titulo);

    const proyectos = [
        { 
            nombre: "Página Asistencia", 
            stacks: "[ html, css, render, overcloud ]", 
            categoria: "finished", 
            deploy: "https://marianaseven2013.github.io/Asistencia-Examen/", 
            repo: "https://github.com/marianaseven2013/Asistencia-Examen" 
        },
        { 
            nombre: "Juegos", 
            stacks: "[ html, css, javascript, render, overcloud]", 
            categoria: "finished", 
            deploy: "https://cartasfronted.onrender.com/", 
            repo: "https://github.com/marianaseven2013/cartasfronted" 
        },
        { 
            nombre: "Dashboard Raspberry pi pico W", 
            stacks: "[ html, css, javascript, fireBase ]", 
            categoria: "finished", 
            deploy: "#", 
            repo: "https://github.com/marianaseven2013/dashboard-pico-w" 
        },
        { 
            nombre: "Galería de Productos", 
            stacks: "[ html, css, javascript ]", 
            categoria: "finished", 
            deploy: "https://marianaseven2013.github.io/galeria-deProductos/", 
            repo: "https://github.com/marianaseven2013/galeria-deProductos" 
        },
    ];

    // Crear tabla
    let tabla = document.createElement("table");
    tabla.className = "tabla-proyectos";

    // Cabecera
    let thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>PROYECTOS</th>
            <th>STACKS</th>
            <th>ESTADO</th>
            <th>REPOSITORIO</th>
        </tr>
    `;
    tabla.appendChild(thead);

    // Cuerpo de la tabla
    let tbody = document.createElement("tbody");
    proyectos.forEach(p => {
        let fila = document.createElement("tr");

        // Nombre proyecto con link al deploy
        let colProyecto = document.createElement("td");
        let linkProyecto = document.createElement("a");
        linkProyecto.href = p.deploy;
        linkProyecto.target = "_blank"; // abre en nueva pestaña
        linkProyecto.textContent = p.nombre;
        colProyecto.appendChild(linkProyecto);
        fila.appendChild(colProyecto);

        // Stacks
        let colStack = document.createElement("td");
        colStack.textContent = p.stacks;
        fila.appendChild(colStack);

        // Categoría
        let colCat = document.createElement("td");
        colCat.textContent = p.categoria;
        fila.appendChild(colCat);

        // Repositorio con botón de GitHub
        let colRepo = document.createElement("td");
        let btnRepo = document.createElement("button");
        btnRepo.className = "btn-repo";
        btnRepo.textContent = "Github";
        btnRepo.onclick = () => window.open(p.repo, "_blank");
        colRepo.appendChild(btnRepo);
        fila.appendChild(colRepo);

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    section.appendChild(tabla);
    return section;
}

export { renderCentroControl };
