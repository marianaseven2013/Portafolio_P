function renderHeader() {
    let header = document.createElement("header");
    header.className = "header-container";

    let nombre = document.createElement("h2");
    nombre.textContent = "Génesis Luch";
    header.appendChild(nombre);

    let btnCertificados = document.createElement("button");
    btnCertificados.className = "btn-certificados";
    btnCertificados.textContent = "GitHub General";

    btnCertificados.addEventListener("click", () => {
    window.open("https://github.com/marianaseven2013", "_blank");
    });
    header.appendChild(btnCertificados);

    return header;
}

export { renderHeader };
