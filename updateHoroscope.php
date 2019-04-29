<?php
/*
räkna ut vilket horoskop födelsedatumet tillhör och uppdaterade det sparade horoskopet som
finns i $_SESSION och skriva ut true.
Om inget horoskop finns i $_SESSION ska sidan inte uppdatera något och skriva ut false
*/

    session_start();

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION["horoscopeSign"])) {
    try {
    $date=$_POST['newHoroscopeDate'];
    $month=$_POST['newHoroscopeMonth'];
    $day=$_POST['newHoroscopeDay'];
    $dateStr = '2019'.$month.$day;
    $addHoroscope = new AddHoroscope(); 
    $databaseResult = $addHoroscope->addNewHoroscope($dateStr);
    $sign = $databaseResult[0];
    
    $_SESSION["horoscopeSign"] = $sign[0];
    $_SESSION["dateofBirth"] = $date;

    echo json_encode(true);
    
    } catch (Exception $e){
        echo json_encode($e->getMessage());
    }
} else {
    echo json_encode(false);
}
//include classAddHoroscope.php;
//include_once classAddHoroscope.php;


class AddHoroscope {
    function __construct()
    {
        include_once('databasehandler.php');
        $this->database = new Database();
    }
    
    public function addNewHoroscope($dateStr) {
        $query = $this->database->connection->prepare(
            "SELECT HoroscopeSign FROM horoscopesignlist 
            WHERE $dateStr BETWEEN dateFrom AND dateUntil");
                   
        $query->execute();
        $result = $query->fetchAll();

        if (empty($result)) {
            return array("error" => "result empty");
        }

       return $result;
    }
}

?>