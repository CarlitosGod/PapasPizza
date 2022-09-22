function getPerfil(){

    $.ajax({
        url:"http://localhost:8080/api/Player/getPlayerById",
        type:'GET',
        headers:{token: sessionStorage.getItem('token'),
                 id: sessionStorage.getItem('user_id')},
        dataType: 'JSON',
        contentType:'application/json',
        success:function(response) {
                console.log(response);
                document.getElementById('nombre').innerHTML += response.name+" "+response.last_name;
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function ultPosicion(){
    $.ajax({
        url:"http://localhost:8080/api/PlayerTemp/lastpt",
        type:'GET',
        headers:{token: sessionStorage.getItem('token'),
            id: sessionStorage.getItem('user_id')},
        dataType: 'JSON',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
            document.getElementById('posicion').innerHTML += response.ingame_pos;
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}


function GenerarPag(){
    const scrollPage = document.createElement("scroll-page");  //creamos un <scroll-page></scroll-page>
    var texto = "<scroll-page id='page-1'>";
    var texto1 = "</scroll-page>";
    for (var i = 0; i < 9; i++) {
        document.write(texto);
        document.write(i+1);
        document.write(texto1);
        //scrollPage.id = "page"+i;
        //scrollPage.textContent = 'Item número ${i}';
        //fragment.appendChild(scrollPage);
        //document.write(fragment);
    }
    //document.appendChild(fragment);
}