document.addEventListener("DOMContentLoaded", () => {
    const listaTareas = document.getElementById("lista-tareas");
    const formTarea = document.getElementById("form-tarea");
    const inputNuevaTarea = document.getElementById("nueva-tarea");

    const tareas = [];

    // Función para renderizar tareas
    function renderizarTareas() {
        listaTareas.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.textContent = tarea;

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.onclick = () => eliminarTarea(index);
            li.appendChild(botonEliminar);
            listaTareas.appendChild(li);
        });
    }

    // Función para agregar una nueva tarea
    function agregarTarea(tarea) {
        if (tarea.trim() !== "") {
            tareas.push(tarea);
            renderizarTareas();
            inputNuevaTarea.value = "";
        }
    }

    // Función para eliminar una tarea
    function eliminarTarea(index) {
        tareas.splice(index, 1);
        renderizarTareas();
    }

    // Manejar el evento de envío del formulario
    formTarea.addEventListener("submit", (e) => {
        e.preventDefault();
        agregarTarea(inputNuevaTarea.value);
    });
});
