function randomNumber() {
    var randomNumber = Math.random() * 1000;
    //alert(fRandomNumber);


    var sPrevContent = document.getElementById('displayNumber').innerHTML
    var number = parseInt(randomNumber);

    document.getElementById('displayNumber').innerHTML = sPrevContent + "<br>" + number;
}

function sayHello(){
    document.getElementById('demo').innerHTML = "You have made a fatal error......";
}