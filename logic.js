function makeRequest(url, method, formData, callback){

    var header;

    if(method == "GET") {
        header = {
            method: method
        }
    } else {
        header = {
            method: method,
            body: formData
        }
    }
    
    fetch(url, header)
    .then((data) => {
        return data.json()
    }).then((result)=>{
        callback(result)
    }).catch((err)=>{
        console.log(err)
    })
}

function getHoroscopes() {
    makeRequest("viewHoroscope.php", "GET", {}, (response)=> { 
        console.log(response);
    })
}

function deleteHoroscope(id) {
    //console.log(id);
    var requestData = new FormData()
    requestData.append("collectionType", "Horoscopes")
    requestData.append("action", "deleteHoroscope");
    requestData.append("HoroscopeId", id);
    
    makeRequest("deleteHoroscope.php", "POST", requestData, (response)=> {
        console.log(response);
    })

}

function addNewHoroscope() {
    //insertadjesentHTML
    var saveNewDate = document.getElementById('newHoroscopeDate').value
    if (saveNewDate != '') {
        
        saveNewDate.split();
        var saveNewMonth = saveNewDate[4] + saveNewDate[5];
        var saveNewDay = saveNewDate[6] + saveNewDate[7];

    var requestData = new FormData();
    requestData.append("collectionType", "Horoscopes");
    requestData.append("action", "addNewHoroscope");
    requestData.append("newHoroscopeDate", saveNewDate);
    requestData.append("newHoroscopeDay", saveNewDay);
    requestData.append("newHoroscopeMonth", saveNewMonth);
    
    //var answer = document.getElementById('answer');

    makeRequest("addHoroscope.php", "POST", requestData, (response)=> {
        console.log(response);
    })

    //async await?
    //answer.innerHTML=respose;
    }
}
function updateHoroscope (){
    var requestData = new FormData()  
    requestData.append("collectionType", "Horoscopes");
    requestData.append("action", "updateHoroscope");

    makeRequest("updateHoroscope.php", "POST", requestData, (response)=> {
        console.log(response);
    })
}
