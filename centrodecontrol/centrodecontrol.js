function renderCentroControl() {
    let section = document.createElement("section");
    section.className = "centro-control";

    let titulo = document.createElement("h2");
    titulo.textContent = "Proyectos";
    section.appendChild(titulo);

    const proyectos = [
        { nombre: "Página Asistencia", stacks: "[ html,css,render,overcloud ]", categoria: "finished", repo: "https://marianaseven2013.github.io/Asistencia-Examen/" },
        { nombre: "Juegos", stacks: "[ html,css,javascript, render, overcloud]", categoria: "finished", repo: "https://cartasfronted.onrender.com/" },
        { nombre: "Dashboard Raspberry pi pico W", stacks: "[ html,css,javascript,fireBase ]", categoria: "finished", repo: "#" },
        { nombre: "Juego de memoria", stacks: "[ html,css,javascript ]", categoria: "finished", repo: "#" },
        { nombre: "Galería de Productos", stacks: "[ html,css,javascript ]", categoria: "finished", repo: "https://marianaseven2013.github.io/galeria-deProductos/" },
        { nombre: "Finanzas personales", stacks: "[ Notion ]", categoria: "Notion", repo: "#" },
       
    ];

    let tabla = document.createElement("table");
    tabla.className = "tabla-proyectos";

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

    let tbody = document.createElement("tbody");
    proyectos.forEach(p => {
        let fila = document.createElement("tr");

        // Nombre proyecto con link
        let colProyecto = document.createElement("td");
        let linkProyecto = document.createElement("a");
        linkProyecto.href = p.repo; // aquí pondrás tus links
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

        // Botón GitHub
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
