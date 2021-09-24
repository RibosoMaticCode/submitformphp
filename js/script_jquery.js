$(document).ready(function() {

    /* Aqui especificamos el id del formulario
    establecemos el evento submit
    */
    $( "#form_jquery" ).on( "submit", function( event ) {
        event.preventDefault(); // Esto es para prevenir que cargue la pagina siguiente

        /* Hacemos la llamada AJAX
        Espeficamos el archivo que captura los datos enviados
        El metodo a usar es POST
        .serialize() es para capturar todos los valores a enviar
        de este formulario
        en success, definimos una funcion que muestra una alerta con la
        respuesta del servidor
        */
        $.ajax({
            url: "procesar_datos.php",
            type: 'post',
            data: $( this ).serialize(), 
            success: function(response){
                alert( response );
            }
        });
    });

    /* Aqui especificamos el id del formulario
    establecemos el evento submit
    */
    $( "#form_archivo_jquery" ).on( "submit", function( event ) {
        event.preventDefault(); // Esto es para prevenir que cargue la pagina siguiente

        /* Hacemos la llamada AJAX
        Espeficamos el archivo que captura los datos enviados
        El metodo a usar es POST
        En data usamos FormData para compilar los datos a enviar
        Hay dos claves mas: contentType y proccessData que seteamos a false
        En success, definimos una funcion que muestra una alerta con la
        respuesta del servidor
        */
        $.ajax({
            url:"procesar_datos_archivo.php",
            type: 'post',
            data: new FormData( document.getElementById('form_archivo_jquery') ), 
            contentType: false, // por defecto es application / x-www-form-urlencoded; charset = UTF-8, al poner false desactivamos esto
            processData: false, // por defecto es true, que transforma los datos enviados en una cadena de consulta, al poner false desactivamos esto
            success: function(response){
                alert( response );
            }
        });
    });

});