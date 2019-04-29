<?php
/*
sidan ska bara gå att begära via DELETE, den ska ta bort det sparade horoskopet i $_SESSION
och echo:a true. Om inget finns sparat ska den echo:a false.
*/

echo json_encode("hejdel");

if($_POST["action"]=="deleteHoroscope"){
    /*
    error_log("delete");
    $id=$_POST['HoroscopeId'];

    $viewHoroscope = new ViewHoroscope(); 
    $databaseResult = $viewHoroscope->deleteHoroscope($id);
    echo json_encode($databaseResult);  
    */
    echo json_encode("hejdel!");   
    exit;
}
?>