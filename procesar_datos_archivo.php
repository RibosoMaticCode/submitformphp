<?php
// Si esta definido el archivo
if(isset($_FILES['archivo']['name'])){
    if(move_uploaded_file($_FILES['archivo']['tmp_name'], 'upload/'.$_FILES['archivo']['name'] )){
        echo 'Archivo subido <br />';
    }
}

if( $_POST ){
    foreach ($_POST as $key => $value) {
        echo $key.': <br />'.$value.'<br />';
    }
}