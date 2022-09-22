//var nombre = "carlos"
//var texto = "<div align='center' class='partidos'><div id='marcador'> 0 - 0 </div><div id='equipos'><div id='idEquipoA'>Equipo A</div><div id='idEquipoB'>Equipo B</div></div></div>";
//var texto2 = "<div align='center' class='partidos'><div class='resultadoA'><div id='marcadorA'><p><script>' marcadorA()'</script></p></div><div class='resultados'><p> - </p></div><div class='resultadoB'><div id='marcadorB'><p><script>' marcadorB() '</script></p></div></div><div id='equipos'><div id='idEquipoA'>Equipo A</div><div id='idEquipoB'>Equipo B</div></div><div class='ui segment fondo'><div class='ui two column very relaxed grid ' align='center'><div class='column'><div class='opcA'>EQUIPO A<div class='ui segment fondo'><div class='ui fondoA massive '>PO</div><div class='ui segment fondoB massive blue'><p>Esperando...</p></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>LIB</div><div class='ui segment fondoB massive blue'><p>Esperando...</p></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>DEF</div><div class='ui segment fondoB massive blue'><p>Esperando...</p></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>MED</div><div class='ui segment fondoB massive blue'><p>Esperando...</p></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>DEL</div><div class='ui segment fondoB massive blue'><p>Esperando...</p></div></div></div></div><div class='column'><div class='opcB'>EQUIPO B<div class='ui segment fondo'><div class='ui fondoA massive '>PO</div><div class='ui segment fondoB massive red'><P>Esperando...</P></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>LIB</div><div class='ui segment fondoB massive red'><P>Esperando...</P></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>DEF</div><div class='ui segment fondoB massive red'><P>Esperando...</P></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>MED</div><div class='ui segment fondoB massive red'><P>Esperando...</P></div></div><div class='ui segment fondo'><div class='ui fondoA massive '>DEL</div><div class='ui segment fondoB massive red'><P>Esperando...</P></div></div></div></div></div></div></div>";
var matchs;
var id_r;


function getDisponibleMatchs() {
    $.ajax({
        dataType: "json",
        headers: {token: sessionStorage.getItem('token')},
        url: "http://localhost:8080/api/Match/getFilterMatch/"+ $("#opcG").val() +"/"+ $("#opcP").val()+"/"+sessionStorage.getItem('user_id'),
        type: "GET",

        success: function (res) {
            matchs = res;
            drawDisponibleMatchs();
        }
    });
}

function drawDisponibleMatchs() {
    let data = '';

    $.each(matchs, function () {
        PRINC = "<div align='center' class='partidos' id=idRoom>" +
            "<div class='resultadoA'><div id='marcadorA'>" +
            "<p id='resultado'>0-0</p></div>" +
            "<div id='equipos'><div id='idEquipoA'>Equipo A</div>" +
            "<div id='idEquipoB'>Equipo B</div></div><div class='ui segment fondo'>" +
            "<div class='ui two column very relaxed grid ' align='center'><div class='column'>" +
            "<div class='opcA'>EQUIPO A<div class='ui segment fondo'>"
        PRINC=PRINC.replace("idRoom",this.id)
        id_r = this.id;
        POA = "<div class='ui fondoA massive '>PO</div>" +
            "<div class='ui segment fondoB large blue'><p>Esperando...</p></div></div>"
        LIBA = "<div class='ui segment fondo'><div class='ui fondoA massive '>LIB</div>" +
            "<div class='ui segment fondoB large blue'><p>Esperando...</p></div></div>"
        DEFA = "<div class='ui segment fondo'><div class='ui fondoA massive '>DEF</div>" +
            "<div class='ui segment fondoB large blue'><p>Esperando...</p></div></div>"
        MEDA = "<div class='ui segment fondo'><div class='ui fondoA massive '>MED</div>" +
            "<div class='ui segment fondoB large blue'><p>Esperando...</p></div></div>"
        DELA = "<div class='ui segment fondo'>" +
            "<div class='ui fondoA massive '>DEL</div>" +
            "<div class='ui segment fondoB large blue'><p>Esperando...</p></div></div></div></div>"
        teamB = "<div class='column'><div class='opcB'>EQUIPO B<div class='ui segment fondo'>"
        POB = "<div class='ui fondoA massive '>PO</div>" +
            "<div class='ui segment fondoB large red'><P>Esperando...</P></div></div>"
        LIBB = "<div class='ui segment fondo'><div class='ui fondoA massive '>LIB</div>" +
            "<div class='ui segment fondoB large red'><P>Esperando...</P></div></div>"
        DEFB = "<div class='ui segment fondo'><div class='ui fondoA massive '>DEF</div>" +
            "<div class='ui segment fondoB large red'><P>Esperando...</P></div></div>"
        MEDB = "<div class='ui segment fondo'><div class='ui fondoA massive '>MED</div>" +
            "<div class='ui segment fondoB large red'><P>Esperando...</P></div></div>"
        DELB = "<div class='ui segment fondo'> <div class='ui fondoA massive '>DEL</div>" +
            "<div class='ui segment fondoB large red'><P>Esperando...</P></div>" +
            "</div></div>"
        $.each(this.players, function () {
            //PO - LIB - DEF - MC -  DEL
            name_player = this.player.name + " " + this.player.last_name
            if (this.team.includes("A")) {
                if (this.ingame_pos.includes("PO")) {
                    POA = POA.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("LIB")) {
                    LIBA = LIBA.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("DEF")) {
                    DEFA = DEFA.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("MED")) {
                    MEDA = MEDA.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("DEL")) {
                    DELA = DELA.replace("Esperando...", name_player);
                }
            } else if (this.team.includes("B")) {
                if (this.ingame_pos.includes("PO")) {
                    POB = POB.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("LIB")) {
                    LIBB = LIBB.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("DEF")) {
                    DEFB = DEFB.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("MED")) {
                    MEDB = MEDB.replace("Esperando...", name_player);
                } else if (this.ingame_pos.includes("DEL")) {
                    DELB = DELB.replace("Esperando...", name_player);
                }
            }
        });
        UNC = "<form >"+
              "<button id='btnjoin' class='ui right floated button inverted yellow massive' onclick='funcion'>"+
              "Unirse"+
              "</button></form>"+
              "</div></div></div></div></div>";
        UNC=UNC.replace("funcion",id_room(this.id));

        data += PRINC + POA + LIBA + DEFA + MEDA + DELA + teamB + POB + LIBB + DEFB + MEDB + DELB + UNC;

    });

    document.getElementById('tarjetas').innerHTML += data;

}

function buscar(){
    document.getElementById('tarjetas').innerHTML="";
    getDisponibleMatchs();
}

function id_room(room){
    alert(room);
}