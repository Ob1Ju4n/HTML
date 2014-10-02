/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function process_cine_request(nombre){
    
    var rdioValue = get_selected_radio('genre');
    crear_cookie_cine(nombre, rdioValue, 7);

    var opt = get_selected_opt('citySel');
    crear_cookie_cine(nombre, opt, 7);

    window.open('cine/cine.html', '_blank');
    
}

function crear_cookie_cine(nombre, valor, tiempo, dominio){
   
    var nombre_dominio = dominio ? ("; domain=" + dominio) : '' ;
    document.cookie =  nombre +
                       "=" + encodeURIComponent( valor ) +
                       "; max-age=" + 60 * 60 *24 * tiempo +
                       "; path=/" + nombre_dominio ;
}

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

function setValues(varName, fieldId){
    
    var inputValue = leer_cookie_cine(varName);
    var input = document.getElementById(fieldId);
    input.value = inputValue;
    
}

function leer_cookie_cine ( varName ){
    
    var cookie_string = document.cookie;
    if (cookie_string.length !== 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +varName +'=([^;]*)' 
                        );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}

function login(){

    var nombre = prompt('Nombre de usuario:');
    var pwd = prompt('Contraseña:');

    if (!(nombre === 'Alopez' && pwd === '123*')) {
        location.href = 'error.html';
    }

}


