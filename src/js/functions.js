import { selectPaises, apiKey, contentMenuDesplegar, toggleAbrirNav, toggleCerrarNav } from "./variables.js";

// ABRIR NAV
export function abrirNav(){
        if(toggleAbrirNav){
            contentMenuDesplegar.style.display = "block";
        }
    }

    //CERRAR NAV
export function cerrarNav(){
        if(toggleCerrarNav){
            contentMenuDesplegar.style.display = "none";
        }
    }

    // CONSUMIR API
export const cargarPaises = async () =>{
    try {
        const resultado = await apiKey;
        if(resultado.status === 200){
            const datos = await resultado.json();
            console.log(datos);
            let paises = '';
            datos.forEach((country) => {
                paises +=`
                <option value="">${country.name}</option>
                `
            });

            selectPaises.innerHTML = paises
    }
    } catch(error){
        alert(error)
    }
}

