<?php
/*
sidan ska bara gå att begära via DELETE, den ska ta bort det sparade horoskopet i $_SESSION
och echo:a true. Om inget finns sparat ska den echo:a false.
*/
session_start();

if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_SESSION["horoscopeSign"])) {
    
    if (isset($_SESSION["horoscopeSign"])) {
        session_unset();

        echo json_encode(true);
    } else {
        echo json_encode(false);
    }

}

?>
