<?php
/*
sidan ska bara gå att begära via PUT, den ska kolla efter ett födelsedatum i PUT datan, det finns
ingen inbyggd $_PUT men ni kan skapa den själva genom att köra denna raden längst upp i filen:
parse_str(file_get_contents("php://input"), $_PUT);
(Om ni använder fetch är det OK att använda POST istället för PUT).
räkna ut vilket horoskop födelsedatumet tillhör och uppdaterade det sparade horoskopet som
finns i $_SESSION och skriva ut true.
Om inget horoskop finns i $_SESSION ska sidan inte uppdatera något och skriva ut false
*/
echo json_encode("hejupdate");

if($_POST["action"]=="updateHoroscope"){
    /*
    error_log("update");
    $id=$_POST['HoroscopeId'];

    $viewHoroscope = new ViewHoroscope(); 
    $databaseResult = $viewHoroscope->updateHoroscope($id);
    echo json_encode($databaseResult);  
    */
    echo json_encode("hejupdate!");   
    exit;
}
?>