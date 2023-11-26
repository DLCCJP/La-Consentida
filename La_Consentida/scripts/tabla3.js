function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function eliminarPorNombre() {
    // Agrega la lógica para eliminar por nombre aquí
    var selectedNombre = document.getElementById('eliminar-nombre').value;
    alert('Eliminar: ' + selectedNombre);
}
