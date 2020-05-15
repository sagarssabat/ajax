var pageCounter = 1;

// get the reference of button click
var btnClick = document.getElementById('getData');


btnClick.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    // below code when needs to load json from different url's
    // xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json', true);

    xhr.open('GET', 'json/animals-' + pageCounter + '.json', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var xhrData = JSON.parse(xhr.responseText);
            // console.log(xhrData);
            renderHTML(xhrData);
        } else {
            console.log("We connected to the server, but it returned an error");
        }
    }

    xhr.onerror - function () {
        console.log("Connection Error!");
    }

    xhr.send();

    pageCounter++;

    if (pageCounter > 3) {
        btnClick.classList.add("hide-me");
    }
})

// get the reference of div where the output needs to be displayed
var printHTML = document.getElementById('animal-info');

function renderHTML(data) {
    storeHTML = "";
    for (var i = 0; i < data.length; i++) {
        storeHTML += '<li class="list-group-item">' + data[i].name + ' is a ' + data[i].species + ' that likes to eat '
        for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                storeHTML += data[i].foods.likes[ii];
            } else {
                storeHTML += " and " + data[i].foods.likes[ii];
            }
        }

        storeHTML += ' and dislikes '

        for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                storeHTML += data[i].foods.dislikes[ii];
            } else {
                storeHTML += " and " + data[i].foods.dislikes[ii];
            }
        }

        storeHTML += '.</li>'
    }
    printHTML.insertAdjacentHTML('beforeend', storeHTML);
}