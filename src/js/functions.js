import { contentMenuDesplegar, toggleAbrirNav, toggleCerrarNav } from "./variables.js";

export function abrirNav(){
        if(toggleAbrirNav){
            contentMenuDesplegar.style.display = "block";
        }
    }

export function cerrarNav(){
        if(toggleCerrarNav){
            contentMenuDesplegar.style.display = "none";
        }
    }