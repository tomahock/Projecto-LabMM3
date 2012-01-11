/**
 * @depends SpaceInvaders/base.js
 * @depends SpaceInvaders/stage.js
 * @depends SpaceInvaders/player.js
 * @depends SpaceInvaders/enemy.js
 * @depends SpaceInvaders/enemiesGroupCollection.js
 * @depends SpaceInvaders/enemiesCollection.js
 */

// Equivalente ao $(document).ready()
$(function() {

    // O jQuery falha em arquitectura de código
    // Esta simples funcao, permite de alguma forma
    // colmatar uma falha simples na herança em js.
    // é necessário verificar se o browser ja tem
    // a Object.create (ES5), pois essa é a função correcta
    // para fazer isto.
    $.beget = function(o) {
        function F() {} //jslint warning...
        if (Object.create) {
            return Object.create(o);
        } else {
            F.prototype = o;
            return new F();
        }
    };

    // Vamos carregar as naves e guarda-las
    $.getJSON('assets/spaceships.json', function(data) {
        SpaceInvaders.spaceshipsModels = data;
        SpaceInvaders.init();
    });
    
    // Corre quando se fecha a janela ou se faz refresh
	$(window).on('unload', SpaceInvaders.shutdown);
});
