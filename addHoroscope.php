<?php
    

if($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
    $date=$_POST['newHoroscopeDate'];
    $month=$_POST['newHoroscopeMonth'];
    $day=$_POST['newHoroscopeDay'];
    $dateStr = '2019'.$month.$day;
    $addHoroscope = new AddHoroscope(); 
    $databaseResult = $addHoroscope->addNewHoroscope($dateStr);
    $sign = $databaseResult[0];
    
    session_start();
    $_SESSION["horoscopeSign"] = $sign[0];
    $_SESSION["dateofBirth"] = $date;

    echo json_encode($sign[0]);

    } catch (Exception $e){
            echo json_encode($e->getMessage());
        }
    }

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

       // hämta information ifrån databasen och spara det i $_SESSION.
       return $result;
    }
}

/*sidan ska bara gå att begära via POST, den ska kolla efter ett födelsedatum i $_POST, räkna ut
vilket horoskop födelsedatumet tillhör genom att hämta information ifrån databasen och spara det
i $_SESSION.
Om ett horoskop redan finns sparat ska det inte skrivas över. Om det inte gick att räkna ut
horoskopet ska ingenting sparas.
Sidan ska inte använda echo eller skriva någon output förutom true eller false, beroende på om
horoskopet sparades*/
?>