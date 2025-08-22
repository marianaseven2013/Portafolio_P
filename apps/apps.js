function renderApps() {
    let aside = document.createElement("aside");
    aside.className = "apps-container";

    let titulo = document.createElement("h3");
    titulo.textContent = "Stacks";
    aside.appendChild(titulo);

    const stacks = [
        "notion.png", "html.png", "css.png", "js.png",
        "github.png", "mysql.png", "vscode.png"
    ];

    let grid = document.createElement("div");
    grid.className = "stacks-grid";

    stacks.forEach(icon => {
        let img = document.createElement("img");
        img.src = `./assets/${icon}`;
        img.alt = icon;
        grid.appendChild(img);
    });

    aside.appendChild(grid);
    return aside;
}

export { renderApps };
