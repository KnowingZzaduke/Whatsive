import { abrirMenuHeader, cerrarMenuHeader, mostrarConfiguraciones, esconderConfiguraciones } from "./functions.js";
import { toggleAbrirMenuHeader, toggleCaretDown, toggleCaretRight, toggleCerrarMenuHeader } from "./variables.js";

//EVENTOS PARA ABRIR Y CERRAR EL MENÚ
toggleAbrirMenuHeader.onclick = abrirMenuHeader;
toggleCerrarMenuHeader.onclick = cerrarMenuHeader;

// EVENTOS PARA ABRIR Y CERRAR LAS CONFIGURACIONES DEL USUARIO
toggleCaretRight.onclick = mostrarConfiguraciones;
toggleCaretDown.onclick = esconderConfiguraciones;