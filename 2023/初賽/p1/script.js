const d = document;
var all = d.querySelector(".all-photo");
var nature = d.querySelector(".nature-photo");
var city = d.querySelector(".city-photo");


function Choose(func) {
    var allbtn = d.querySelector(".all-btn");
    var naturebtn = d.querySelector(".nature-btn");
    var citybtn = d.querySelector(".city-btn");

    if (func == 1) {
        $(".all-photo").show();
        $(".nature-photo").hide();
        $(".city-photo").hide();
        allbtn.setAttribute("class", "btn btn-primary all-btn");
        naturebtn.setAttribute("class", "btn btn-outline-primary nature-btn");
        citybtn.setAttribute("class", "btn btn-outline-primary city-btn");
    } else if (func == 2) {
        $(".all-photo").hide();
        $(".nature-photo").show();
        $(".city-photo").hide();
        allbtn.setAttribute("class", "btn btn-outline-primary all-btn");
        naturebtn.setAttribute("class", "btn btn-primary nature-btn");
        citybtn.setAttribute("class", "btn btn-outline-primary city-btn");
    } else if (func == 3) {
        $(".all-photo").hide();
        $(".nature-photo").hide();
        $(".city-photo").show();
        allbtn.setAttribute("class", "btn btn-outline-primary all-btn");
        naturebtn.setAttribute("class", "btn btn-outline-primary nature-btn");
        citybtn.setAttribute("class", "btn btn-primary city-btn");
    }
}

window.onload = function () {
    $(".all-photo").show();
    $(".nature-photo").hide();
    $(".city-photo").hide();
}