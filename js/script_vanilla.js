const form = document.getElementById('form_js');
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener('click', function(event){

    event.preventDefault();
    const formattedFormData = new FormData(form);
    postData(formattedFormData);

});

async function postData(formattedFormData){

    const response = await fetch('procesar_datos.php',{
        method: 'POST',
        body: formattedFormData
    });
   
    const data = await response.text();
    alert(data);

}

// definimos el formulario a usar formFile
const formFile = document.getElementById('form_archivo_js');

// definimos el boton a usar btnSendFile
const btnSendFile = document.getElementById("btnSendFile");

// definimos la accion clic al pulsar el boton btnSendFile
btnSendFile.addEventListener('click', function(event){

    event.preventDefault(); // anulamos que boton nos lleve a otro lado

    //usamos FormData para compilar los datos a enviar
    const formattedFormData = new FormData(formFile); 

    // llamamos a una funcion que enviara los datos,
    // como parametro pasamos los datos del formulario
    postData(formattedFormData);

});

async function postData(formattedFormData){

    // en fetch especificamos el archivo en el servidor que captura los datos enviados
    const response = await fetch('procesar_datos_archivo.php',{
        // el metodo a usar
        method: 'POST',
        // los datos a ser enviados
        body: formattedFormData
    });
   
    // data contendra la respuesta del servidor
    const data = await response.text();

    // y la mostramos en un alert
    alert(data);

}