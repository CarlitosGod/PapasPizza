var input1 = "Esperando...";
var match;

$('.slider').glide({
    autoplay: false,
    arrowsWrapperClass: 'slider-arrows',
    arrowRightText: '',
    arrowLeftText: ''
  });

function getMatch() {
    $.ajax({
        dataType: "json",
        headers: {token: sessionStorage.getItem('token')},
        url: "http://localhost:8080/api/Match/getMatchById/"+sessionStorage.getItem("match_id"),
        type: "GET",

        success: function (res) {
            console.log(res);
            match = res;
        }
    });
}

function namepoA() {
    document.write(input1);
    sessionStorage.getItem("match_id")
    getMatch();
}

function namelibA() {
    document.write(input1);
}

function namedefA() {
    document.write(input1);
}

function namemedA() {
    document.write(input1);
}

function namedelA() {
    document.write(input1);
}

function namepoB() {
    document.write(input1);
}

function namelibB() {
    document.write(input1);
}

function namedefB() {
    document.write(input1);
}

function namemedB() {
    document.write(input1);
}

function namedelB() {
    document.write(input1);
}