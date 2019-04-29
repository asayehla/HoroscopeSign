<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_SESSION["horoscopeSign"])) {
  
        session_unset();

        echo json_encode(true);
    } else {    
        echo json_encode(false);
    }

?>