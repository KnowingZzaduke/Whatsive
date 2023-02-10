import { selectPaises, apiKey, contentMenuDesplegar, toggleAbrirNav, toggleCerrarNav, toggleAbrirMenuHeader, contentDesplegar, toggleCerrarMenuHeader, toggleCaretDown, contentConfiguracionUsuario, toggleCaretRight } from "./variables.js";

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

    // ABRIR MENU DEL HEADER EN EL PANEL DE BIENVENIDA
export function abrirMenuHeader(){
    if(toggleAbrirMenuHeader){
        contentDesplegar.style.display = "block";
    }
}
    // CERRAR MENU DEL HEADER EN EL PANEL DE BIENVENIDA
export function cerrarMenuHeader(){
    if(toggleCerrarMenuHeader){
        contentDesplegar.style.display = "none";
    }
}

    // MOSTRAR CONFIGURACIONES DEL USUARIO
export function mostrarConfiguraciones(){
    if(toggleCaretRight){
        toggleCaretRight.style.display = "none";
        toggleCaretDown.style.display = "block";
        contentConfiguracionUsuario.style.display = "block";
    }
}

export function esconderConfiguraciones(){
    if(toggleCaretDown){
        toggleCaretDown.style.display = "none";
        toggleCaretRight.style.display = "block";
        contentConfiguracionUsuario.style.display = "none";
    }
}
