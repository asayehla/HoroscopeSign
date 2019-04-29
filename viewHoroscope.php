<?php
session_start();

if(isset($_SESSION["horoscopeSign"])){

    echo json_encode($_SESSION["horoscopeSign"]);

} else {
    echo json_encode(false);
}
?>