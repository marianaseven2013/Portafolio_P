import { renderHeader } from "./header/header.js";
import { renderApps } from "./apps/apps.js";
import { renderCentroControl } from "./centrodecontrol/centrodecontrol.js";

const root = document.body;

let container = document.createElement("div");
container.className = "main-container";

container.appendChild(renderHeader());
container.appendChild(renderApps());
container.appendChild(renderCentroControl());

root.appendChild(container);
