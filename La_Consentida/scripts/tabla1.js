document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('userTableBody');

    // Función para cargar y mostrar usuarios
    function loadUsers() {
        fetch('http://localhost:3001/api/v1/usuarios') // Reemplaza PUERTO con el puerto real de tu API
            .then(response => response.json())
            .then(data => displayUsers(data));
    }

    // Función para mostrar usuarios en la tabla
    function displayUsers(users) {
        // Limpiar la tabla antes de agregar nuevos datos
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nombre}</td>
                <td>${user.correo}</td>
                <td>${user.Estado.nombre}</td>
                <td>
                    <button onclick="deleteUser(${user.id})">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    function deleteUser(userId) {
        // Confirmar antes de eliminar el usuario
        const confirmDelete = confirm('¿Está seguro de que desea eliminar este usuario?');

        if (confirmDelete) {
            // Realizar la solicitud DELETE a la API para eliminar el usuario
            fetch(`http://localhost:3001/api/v1/usuarios/${userId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.status === 204) {
                        console.log('Usuario eliminado con éxito');
                        // Volver a cargar la lista de usuarios después de la eliminación
                        loadUsers();
                    } else {
                        console.error('Error al eliminar el usuario');
                    }
                })
                .catch(error => console.error('Error al eliminar el usuario:', error));
        }
    }

    // Llamar a loadUsers al cargar la página para obtener la lista inicial de usuarios
    loadUsers();
});