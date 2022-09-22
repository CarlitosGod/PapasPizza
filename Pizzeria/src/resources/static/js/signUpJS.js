function sendData(pws) {
    let p = {
        id: $("#identification").val(), //OK
        name: $("#name").val(), //OK
        last_name: $("#lastName").val(), //OK
        birth_day: Date.parse($("#birth").val()),
        gender: $("#geners").val(),
        rating: 0.0,
        password: pws,//OK
        playerTemplates: null,
        games_won: 0,
        games_lost:0,
        games_tied:0
    }

    let userToSend = JSON.stringify(p);

    $.ajax({
        url: "http://localhost:8080/api/Player/save",
        type: 'POST',
        data: userToSend,
        dataType: 'text',
        //headers:{loquesea:"HOLA MUNDO"},

        contentType: 'application/json',

        success: function (response) {

            if (response != "empty") {
                sessionStorage.setItem('token', response);
                sessionStorage.setItem('user_id', $("#identification").val());
                window.location.replace("Inicio.html");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    });
}

function getPass(){
    sha512($("#pass").val()).then(x => sendData(x));

}

/*
function getData(){
    $.ajax({
        dataType: 'json',
        url:"http://localhost:8081/api/Person/all",
        type:'GET',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}
*/