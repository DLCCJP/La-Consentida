// Funciones para abrir y cerrar los modales
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Limpia los campos al abrir el modal
    clearFormFields(modal);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para limpiar los campos del formulario en el modal
function clearFormFields(modal) {
    var form = modal.querySelector('form');
    if (form) {
        form.reset();
    }
}

// Función para manejar la lógica de agregar
function agregar() {
    var id = document.getElementById('entrega-id').value;
    var calle = document.getElementById('calle').value;
    var numero = document.getElementById('numero').value;
    var colonia = document.getElementById('colonia').value;
    var ciudad = document.getElementById('ciudad').value;
    var estado = document.getElementById('estado').value;
    var codigoPostal = document.getElementById('codigo-postal').value;
    var notas = document.getElementById('notas').value;

    // Agrega aquí la lógica para procesar los datos (por ejemplo, enviarlos al servidor)

    // Cierra el modal después de agregar
    closeModal('agregar-entrega-modal');
}

// Función para manejar la lógica de eliminar
function eliminarPorID() {
    var selectedID = document.getElementById('eliminar-entrega-id').value;

    // Agrega aquí la lógica para eliminar por ID (por ejemplo, enviar la solicitud al servidor)

    // Cierra el modal después de eliminar
    closeModal('eliminar-entrega-modal');
}
