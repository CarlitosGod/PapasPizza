function sendData(pws) {
    var x = document.getElementById("P1").value;
    alert(x);
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