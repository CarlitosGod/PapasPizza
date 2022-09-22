var playerTemp;
function sendData(){

    let u={
        id:0,
        date_created: Date.now(),
        start_date: Date.parse($("#st_date").val()+" "+$("#st_hour").val()),
        end_date: Date.parse($("#ed_date").val()+" "+$("#ed_hour").val()),
        gender_type: $("#gener").val(),
        status: "W",
        place: $("#places").val(),
        matchScores: null,
        matchStats: null,
        teamA:null,
        a_score: 0,
        teamB: null,
        b_score: 0,
    }

    let userToSend=JSON.stringify(u);
    $.ajax({
        url:"http://localhost:8080/api/Match/save",
        type:'POST',
        data:userToSend,
        headers:{token: sessionStorage.getItem('token')},
        dataType: 'JSON',
        contentType:'application/json',
        async:false,

        success:function(response) {

            if (response != null) {
                var template_id = createPlayerTemplate(response.id);
                sessionStorage.setItem('match_id', response.id);
                console.log(sessionStorage.getItem('user_id'));
                window.location.replace("Crear.html");

            }else{
                alert("-> Ocurrió un error, verifica la información");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function createPlayerTemplate(id_match){

    let t={
        id:null,
        ingame_pos: $("#pos").val(),
        player: {
            id:sessionStorage.getItem('user_id')
        },
        team:"A",
        match:{
            id:id_match
        }//sessionStorage.getItem('match_tmp')
    }
    playerTemp=t;

    let userToSend=JSON.stringify(t);
    $.ajax({
        url:"http://localhost:8080/api/PlayerTemp/save",
        type:'POST',
        data:userToSend,
        headers:{token: sessionStorage.getItem('token')},
        dataType: 'JSON',
        contentType:'application/json',
        async:false,

        success:function(response) {
            console.log(response);
            if (response != null) {
                return response;
            }else{

                alert("-> Ocurrió un error, verifica la información");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {

        },
        complete:function(g){

        }
    });
}

function  addPlayerTemplateMatch(match){

    let t={
        id:playerTemp.id,
        ingame_pos: playerTemp.ingame_pos,
        player: playerTemp.player,
        match:  playerTemp.match //sessionStorage.getItem('match_tmp')
    }

    let player_t_ToSend = JSON.stringify(playerTemp);

    $.ajax({
        url:"http://localhost:8080/api/Match/addPlayerTemplate",
        type:'POST',
        data:player_t_ToSend,
        headers:{token: sessionStorage.getItem('token'), team:"A", m:match },
        dataType: 'JSON',
        contentType:'application/json',

        success:function(response) {
            console.log(sessionStorage.getItem('token'));
            console.log(response);
            if (response != null) {

            }else{
                alert("-> Ocurrió un error, verifica la información");

            }
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}
