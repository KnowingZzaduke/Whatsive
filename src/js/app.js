import { abrirNav, cerrarNav } from "./functions.js";
import { contentMenuDesplegar, toggleAbrirNav, toggleCerrarNav } from "./variables.js";

toggleAbrirNav.onclick = abrirNav;
toggleCerrarNav.onclick = cerrarNav;