import { selectPaises, apiKey, contentMenuDesplegar, toggleAbrirNav, toggleCerrarNav, toggleAbrirMenuHeader, contentDesplegar, toggleCerrarMenuHeader, toggleCaretDown, contentConfiguracionUsuario, toggleCaretRight, tbody} from "./variables.js";

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
    // ESCONDER CONFIGURACIONES DEL USURIO
export function esconderConfiguraciones(){
    if(toggleCaretDown){
        toggleCaretDown.style.display = "none";
        toggleCaretRight.style.display = "block";
        contentConfiguracionUsuario.style.display = "none";
    }
}

let id = 1;

export function agregarInstancias(){
    const newRow = tbody.insertRow();
    newRow.setAttribute("id", id++);
    newRow.innerHTML = `
        <td>
            <div class="icon">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="id_instancia">
                #1
            </div>
        </td>
        <td>
            <span>23/03/2023</span>
        </td>
        <td>
            <span>23/03/2023</span>
        </td>
        <td>
            <span id="estatus">Iniciada</span>
        </td>
        <td>
            <div class="content_boton-pagar">
                <button type="button">
                    <i class="fa-regular fa-credit-card"></i>
                    <span>Pagar</span>
                </button>
            </div>
            <div class="content_boton-eliminar">
                <i class="fa-solid fa-trash eliminar" id="eliminar"></i>
            </div>
        </td>
    `
        const btnEliminarInstancia = document.querySelectorAll('.eliminar');
        btnEliminarInstancia.forEach((e) => {
            e.addEventListener('click', function(e){
                e.preventDefault();
                const clickedBtn = e.target;
                const parentRow = clickedBtn.closest("tr");
                tbody.deleteRow(parentRow.rowIndex - 1);
            });
        });
}

export function eliminarInstancias(id){
}








