// var heure = document.getElementById("1valeur1").innerHTML;
var content = heure.split('H');
var hour1 = (content[0]);

var option = document.querySelectorAll("#heure1 option");

// document.getElementById("heure1").addEventListener("change", theClick);


function res() {
    document.getElementById("form").style.display="flex";
    document.getElementById("part1").style.display="none";
    document.getElementsByTagName("article")[0].style.margin="0";
    document.getElementsByTagName("article")[0].style.marginTop="10%";
}
function test() {
    var choix1 = document.getElementById('heure1');
    if (choix1 = "08H30") {
        document.getElementById('heure2').style.display="none";
    }
}

function heure8() {
document.getElementById('heure8').style.display="flex";   
document.getElementById('heure9').style.display="none";
document.getElementById('heure10').style.display="none";
document.getElementById('heure11').style.display="none";
document.getElementById('heure12').style.display="none";
document.getElementById('heure13').style.display="none";
document.getElementById('heure14').style.display="none";
document.getElementById('heure15').style.display="none";
}

function heure9() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="flex";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="none";
}

function heure10() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="flex";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="none";
}
function heure11() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="flex";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="none";
}

function heure12() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="flex";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="none";
}

function heure13() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="flex";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="none";
}
function heure14() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="flex";
    document.getElementById('heure15').style.display="none";
}

function heure15() {
    document.getElementById('heure8').style.display="none";   
    document.getElementById('heure9').style.display="none";
    document.getElementById('heure10').style.display="none";
    document.getElementById('heure11').style.display="none";
    document.getElementById('heure12').style.display="none";
    document.getElementById('heure13').style.display="none";
    document.getElementById('heure14').style.display="none";
    document.getElementById('heure15').style.display="flex";
}
