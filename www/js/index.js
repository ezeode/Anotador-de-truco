
    $(document).ready(function() {

        console.log("ready");
        $("#inicio").on("click",cambpant)
        $("#s1").on("click",suma1)
        $("#r1").on("click",resta1)
        $("#s2").on("click",suma2)
        $("#r2").on("click",resta2)
        $("#a24").on("click",a24)    
        $("#a30").on("click",a30)
        $("#final").on("click",final)


        function cambpant(){
            if(acuanto == 0){
                alert("Por favor, seleccione a cuanto quiere jugar")
            } else {
            $("#contP1").removeClass("visible").addClass("oculto")
            $("#contP2").removeClass("oculto").addClass("visible")

            $("#ne1").html($("#e1").val())
            $("#ne2").html($("#e2").val())
            }
        }  
        var va1 = 0
        var va2 = 0
        var acuanto = 0

        function a24(){
            $("#acuanto").html($("#a24").val())
            acuanto = 24
            console.log(acuanto)
        }
        function a30(){
            $("#acuanto").html($("#a30").val())
            acuanto = 30
            console.log(acuanto)
        }

        function suma1(){
            console.log(va1)
            console.log(acuanto)
            if(va1 < acuanto){
            va1 = parseInt($("#pe1").text())
            va1++;
            $("#pe1").text(va1)
            }
            dibujame(1)
        }
        function resta1(){
            if(va1 > 0){
            va1 = parseInt($("#pe1").text())
            va1--;
            $("#pe1").text(va1)
            }
            dibujame(1)
        }
        function suma2(){
            if(va2 < acuanto){
            va2 = parseInt($("#pe2").text())
            va2++;
            $("#pe2").text(va2)
            }
            dibujame(2)
        }
        function resta2(){
            if(va2 > 0){
            va2 = parseInt($("#pe2").text())
            va2--;
            $("#pe2").text(va2)
            }
            dibujame(2)
        }
        function final(){
            if(acuanto == 0){
                alert("¿Esta seguro que desea terminar?")
            } else {
            $("#contP1").removeClass("oculto").addClass("visible")
            $("#contP2").removeClass("visible").addClass("oculto")
        }
    }

    function dibujame(e){
        puntose = parseInt($("#pe" + e).text());
        var compt = puntose;
    if(acuanto == 30){
        for(i=1; i<=6; i++){
            if(compt>=5){
                $("#e" + e + i).attr("src","puntos/5.png");
                compt -= 5;
            } else {
                $("#e" + e + i).attr("src","puntos/" + compt + ".png")
                compt = 0;
            }
        }
    }

    if(acuanto==24) {
        for(i=1;i<=6;i++) {
        if(compt>=2 && i==3) {
        $("#e" + e + i).attr("src","puntos/2.png");
        compt-=2;
        } else {
        if(compt>=5) {
        $("#e" + e + i).attr("src","puntos/5.png");
        compt-=5;
        } else {
        $("#e" + e + i).attr("src","puntos/"+ compt +".png");
        compt=0;
        }
    }
}
}
}
})