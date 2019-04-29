
getHoroscopes();

function makeRequest(url, method, formData, callback) {

    var header;

    if (method == "GET") {
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
        }).then((result) => {
            callback(result)
        }).catch((err) => {
            console.log(err)
        })
}

function getHoroscopes() {
    makeRequest("viewHoroscope.php", "GET", {}, (response) => {
        if (response) {
            writeHTML(response);
        }
    })
}

function deleteHoroscope() {
    var requestData = new FormData()
    requestData.append("action", "deleteHoroscope");

    makeRequest("deleteHoroscope.php", "DELETE", requestData, (response) => {
        console.log(response);
        writeDeleteHTML(response);
    })
}

function addNewHoroscope() {
    var saveNewDate = document.getElementById('newHoroscopeDate').value
    if (saveNewDate != '') {

        saveNewDate.split();
        var saveNewMonth = saveNewDate[4] + saveNewDate[5];
        var saveNewDay = saveNewDate[6] + saveNewDate[7];

        var requestData = new FormData();
        requestData.append("action", "addNewHoroscope");
        requestData.append("newHoroscopeDate", saveNewDate);
        requestData.append("newHoroscopeDay", saveNewDay);
        requestData.append("newHoroscopeMonth", saveNewMonth);
    
        makeRequest("addHoroscope.php", "POST", requestData, (response) => {
            if (response) {
                getHoroscopes(response);
            }
            console.log(response);
        })

    }
}
function updateHoroscope() {
    var saveNewDate = document.getElementById('newHoroscopeDate').value
    if (saveNewDate != '') {

        saveNewDate.split();
        var saveNewMonth = saveNewDate[4] + saveNewDate[5];
        var saveNewDay = saveNewDate[6] + saveNewDate[7];

        var requestData = new FormData();
        requestData.append("action", "updateHoroscope");
        requestData.append("newHoroscopeDate", saveNewDate);
        requestData.append("newHoroscopeDay", saveNewDay);
        requestData.append("newHoroscopeMonth", saveNewMonth);

        makeRequest("updateHoroscope.php", "POST", requestData, (response) => {
            if (response) {
                getHoroscopes(response);
            }
            console.log(response);
        })
    }
}

async function writeHTML(response) {
    var answers = document.getElementById('answers');
    var yourHoroscope = document.getElementById('yourHoroscope');
    yourHoroscope.innerHTML = " Your sign is: ";
    answers.innerHTML = response;
}
async function writeDeleteHTML(response) {
    var answers = document.getElementById('answers');
    answers.innerHTML = response;
}

