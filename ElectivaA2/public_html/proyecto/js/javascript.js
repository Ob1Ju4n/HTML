/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var login = function() {

    var nombre = prompt('Nombre de usuario:');
    var pwd = prompt('Contraseña:');

    if (!(nombre === 'Alopez' && pwd === '123*')) {
        location.href = 'error.html';
    }

}



