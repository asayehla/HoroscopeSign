<?php

//sidan ska bara gå att begära via GET, den ska kolla om ett horoskop finns sparat i $_SESSION
//och i så fall skriva ut det i output. Annars ska sidan inte skriva ut någonting.

session_start();

echo json_encode("hej");
/*
if(isset($_SESSION["toplist"])){

}
*/

?>