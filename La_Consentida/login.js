$(function () {
    // Función para manejar la autenticación
    const authenticateUser = async (email, password) => {
        try {
            const response = await $.ajax({
                url: "https://ezerdeveloper.top/api/v1/login",
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ correo_electronico: email, contrasena: password }),
            });

            if (response && response.token) {
                return response.token;
            } else {
                throw new Error("Correo electrónico y/o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error en la solicitud AJAX:", error);
            throw new Error("Correo electrónico y/o contraseña incorrectos");
        }
    };

    // Función para verificar el token al intentar acceder a una página
    const checkAuthentication = () => {
        if (!localStorage.getItem('token')) {
            window.location.href = "login.html";
        }
    };

    // Evento de envío del formulario de inicio de sesión
    $('#formLogin').submit(async function (e) {
        e.preventDefault();

        const correo_electronico = $.trim($("#usuario").val());
        const contrasena = $.trim($("#password").val());

        if (correo_electronico.length === 0 || contrasena.length === 0) {
            Swal.fire({
                type: 'warning',
                title: 'Debe ingresar un correo electrónico y/o contraseña',
            });
            return false;
        }
        
try {
            const token = await authenticateUser(correo_electronico, contrasena);

            // Almacenar el token en el localStorage
            localStorage.setItem('token', token);

            Swal.fire({
                type: 'success',
                title: '¡Conexión exitosa!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ingresar'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "index.html";
                }
            });
        } catch (error) {
            Swal.fire({
                type: 'error',
                title: error.message,
            });
        }
    });

    // Verificar si el usuario está autenticado al intentar acceder a index.html
    checkAuthentication();
});