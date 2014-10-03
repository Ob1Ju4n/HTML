/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Variables globales
 */
var auth = false;

function get_selected_opt(selectId){
    
    var select = document.getElementById(selectId);
    var selectedValue = select.options[select.selectedIndex].text;
    return selectedValue;
    
}

function get_selected_radio(radioGroup){
    
    var radio = document.getElementsByName(radioGroup);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
    
}

function filter_by_genre(){
    
    var activeClass = get_selected_radio('genre');
    show('movieAccion');
    show('movieDrama');
    show('movieTerror');
    
    if(activeClass === 'movieTerror'){
        hide('movieDrama');
        hide('movieAccion');
    }else if(activeClass === 'movieDrama'){
        hide('movieTerror');
        hide('movieAccion');
    }else if (activeClass === 'movieAccion'){
        hide('movieDrama');
        hide('movieTerror');
    }
}

function hide(className){
    
    var nodeList = document.getElementsByClassName(className);
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = 'none';
    }
}

function show(className){
    var nodeList = document.getElementsByClassName(className);
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = 'block';
    }
}

function redir(optionName){
    if(auth){
        var url = "";
        if(optionName === 'cine'){
            url = "cine/cine.html";
        }else if(optionName === 'musica'){
            url = "musica/musica.html";
        }else if(optionName === 'teatro'){
            url = "teatro/teatro.html";
        }
        window.open(url, "_blank");
    }else
        alert('Usuario no autenticado');
}

function login(){

    var nombre = document.getElementById('usr').value;
    var pwd = document.getElementById('pass').value;
    if (!(nombre === 'Alopez' && pwd === '123*')) {
        window.open('error.html', "_self");
    }else{
        auth = true;
        window.location.hash = 'close';
        document.body.innerHTML = document.body.innerHTML.replace('anonymo', nombre);
        document.getElementById('autenticar').style.display = 'none';
        document.getElementById('loginMsg').style.display = 'block';
    }

}
