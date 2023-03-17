
function temaBlack(){

    var menuTopo = document.querySelector(".container-menu"); 
    var sobreNos = document.querySelector(".container-sobrenos");
    var conserto = document.querySelector(".container-conserto");
    var rodape = document.querySelector("footer");
    
    // ---------------------------------------------------------------------------------
    
    var bordaSobreNosImg = document.querySelector(".container-sobrenos img");
    var bordaConsertoImg = document.querySelector(".container-conserto img");
    var bordaTextArea = document.querySelector("#mensagem textarea");
    
    // ---------------------------------------------------------------------------------

    menuTopo.style.backgroundColor = "black";
    sobreNos.style.backgroundColor = "#1C1C1C";
    conserto.style.backgroundColor = "#1C1C1C";
    rodape.style.backgroundColor = "black";

    bordaConsertoImg.style.border = "5px solid #363636";
    bordaSobreNosImg.style.border = "5px solid #363636";
    bordaTextArea.style.border = "5px solid #363636";

}

function temaOriginal(){
    var menuTopo = document.querySelector(".container-menu"); 
    var sobreNos = document.querySelector(".container-sobrenos");
    var conserto = document.querySelector(".container-conserto");
    var rodape = document.querySelector("footer");
    
    // ---------------------------------------------------------------------------------
    
    var bordaSobreNosImg = document.querySelector(".container-sobrenos img");
    var bordaConsertoImg = document.querySelector(".container-conserto img");
    var bordaTextArea = document.querySelector("#mensagem textarea");
    
    // ---------------------------------------------------------------------------------
    menuTopo.style.backgroundColor = "#182625";
    sobreNos.style.backgroundColor = "#28403D";
    conserto.style.backgroundColor = "#28403D";
    rodape.style.backgroundColor = "#181f20";

    bordaConsertoImg.style.border = "5px solid #3D5A73";
    bordaSobreNosImg.style.border = "5px solid #3D5A73";
    bordaTextArea.style.border = "5px solid #455559";
}