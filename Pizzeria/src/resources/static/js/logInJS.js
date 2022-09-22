function sendData(pwd){

    let u={
        id:$("#identification").val(),
        password: pwd//OK
    }

    let userToSend=JSON.stringify(u);
    $.ajax({
        url:"http://localhost:8080/api/Player/validate",
        type:'POST',
        data:userToSend,
        dataType: 'text',
        contentType:'application/json',

        success:function(response) {
            console.log(response);
            if (response != "empty") {
                sessionStorage.setItem('token', response);
                sessionStorage.setItem('user_id', $("#identification").val());
                window.location.replace("Inicio.html");
            }else{
                alert("-> Usuario o Contraseña incorrectos");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    });
}
function getPwd(){
    sha512($("#pass").val()).then(x => sendData(x));
}