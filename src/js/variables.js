//TOGGLES Y CONTENEDOR DEL NAV EN EL PANEL PRINCIPAL
export const contentMenuDesplegar = document.querySelector('.content_menu-desplegable-header');
export const toggleAbrirNav = document.querySelector('.abrir_nav');
export const toggleCerrarNav = document.querySelector('.cerrar_nav');

//APIKEY
export const apiKey = fetch("https://restcountries.com/v2/all");
export const selectPaises = document.getElementById('paises');

//TOGGLES Y CONTENEDOR DEL NAV EN PANEL DE BIENVENIDA
export const toggleAbrirMenuHeader = document.querySelector('.toggleAbrirMenuHeader');
export const toggleCerrarMenuHeader = document.querySelector('.toggleCerrarMenuHeader');
export const contentDesplegar = document.querySelector('.content_menu-desplegable');

//TOGGLES Y CONTENEDOR DE LAS CONFIGURACIONES DEL USUARIO
export const toggleCaretRight = document.querySelector('.caret_right');
export const toggleCaretDown = document.querySelector('.caret_down');
export const contentConfiguracionUsuario = document.querySelector('.content_configuracion-usuario');

//BOTON Y TABLA PARA AGREGAR INSTANCIAS
export const tablaInstancias = document.getElementById('tabla_instnacias');
export const btnAgregarIntancia = document.getElementById('btn_agregar-instancias');
export const tbody = document.getElementById('tbody');
