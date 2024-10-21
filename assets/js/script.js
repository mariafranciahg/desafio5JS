let tareas = [
    {
        id: 1,
        nombre: "Hacer mercado",
        realizado: false
    },
    {
        id: 2,
        nombre: "Estudiar para la prueba",
        realizado: false
    },
    {
        id: 3,
        nombre: "Sacar a pasear a Tobby",
        realizado: false
    }
];

actualizarTareas ();
    


function actualizarTareas () {
    let html = '';
    let totalTareas = 0;
    let totalRealizadas = 0;

    for (let tarea of tareas) {
        let estadoCheck = '';
        if (tarea.realizado) {
            estadoCheck = 'checked';
            totalRealizadas++;
        }
        html += 
            `<tr>
                <td>${tarea.id}</td>  
                <td class="tarea">${tarea.nombre}</td> 
                <td><input type="checkbox" ${estadoCheck} onclick="confirmarTarea(${tarea.id});"/></td> 
                <td><button onclick="eliminarTarea(${tarea.id});">X</button></td>
            </tr>`
        totalTareas++;
        
    }
    document.querySelector('#cuerpoTabla').innerHTML = html;
    document.querySelector('#total').innerHTML = totalTareas;
    document.querySelector('#realizadas').innerHTML = totalRealizadas;
};



function agregar (event) {
    let nuevaTarea = document.querySelector('#nuevaTarea');
    tareas.push ({
        id: tareas.length+1,
        nombre: nuevaTarea.value,
        realizado: false
    });
    nuevaTarea.value = '';
    actualizarTareas ();
};

function eliminarTarea(id) {
    const indice = tareas.findIndex ((tarea) => tarea.id === id);
    tareas.splice(indice,1);
    actualizarTareas ();
}

function confirmarTarea (id) {
    const indice = tareas.findIndex ((tarea) => tarea.id === id);
    tareas[indice].realizado = !tareas[indice].realizado;
    actualizarTareas ();
}

