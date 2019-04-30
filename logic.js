//this function will check if there is anything in session storage when you load the website.
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
        if (response) {
            writeDeleteHTML();
        }
        else {
            tryAgainHTML();
        }
    })
}

//this function and update is almost the same
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
            else {
                tryAgainHTML();
            }
        })
    }
}

function updateHoroscope() {
    var saveNewDate = document.getElementById('newHoroscopeDate').value
    if (saveNewDate != '') {

        // removing the year and save day and month 
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
            tryAgainHTML();
        })
    }
}

async function writeHTML(response) {
    var answers = document.getElementById('answers');
    var yourHoroscope = document.getElementById('yourHoroscope');
    yourHoroscope.innerHTML = "Your sign is: ";
    answers.innerHTML = response;
}

async function writeDeleteHTML() {
    var answers = document.getElementById('answers');
    answers.innerHTML = "Your sign is deleted";
    var yourHoroscope = document.getElementById('yourHoroscope');
    yourHoroscope.innerHTML = "";
}

async function tryAgainHTML() {
    var answers = document.getElementById('answers');
    answers.innerHTML = "Something went wrong, please try again.";
}