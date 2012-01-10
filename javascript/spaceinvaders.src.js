/**
 * SpaceInvaders Object with basic methods
 *
 * @author Luís Couto
 * @organization 15minuteslate.net
 * @contact couto@15minuteslate.net
 * @version 0.1
 */

var SpaceInvaders = {
    /**
     * SpaceInvader.config
     * basic onfiguration constants to be used over the game
     *
     * @public
     * @type Object
     */
    config: {
        ENEMY_COLUMNS: 10,
        ENEMY_ROWS : 6,
        ENEMY_TYPES : 3,
        ENEMY_TYPE_NAME : 'alien',
        ENEMY_WIDTH : 36,
        ENEMY_HEIGHT: 41,
        ENEMY_VERTICAL_MARGIN : 10,
        ENEMY_HORIZONTAL_MARGIN : 10,
        STAGE_WIDTH: null,
        STAGE_HEIGHT: null
    },
    /**
     * SpaceInvaders.init
     * Point of Entry 
     * initialize the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    init: function() {
        var enemiesColumns = this.config.ENEMY_COLUMNS,
            enemiesRows = this.config.ENEMY_ROWS,
            typesOfEnemies = this.config.ENEMY_TYPES,
            totalEnemies = enemiesColumns * enemiesRows,
            equalTypes = totalEnemies / typesOfEnemies,
            rowsOfType = enemiesRows / typesOfEnemies,
            enemy, group, i, j, k;

        this._active = [];
        this._active.push(this.enemiesCollection.init());
        this._active.push(this.player.init());
        this._active.push(this.stage.init(this.config.STAGE_WIDTH, this.config.STAGE_HEIGHT));

        i = typesOfEnemies;
        j = enemiesRows - 1;

        while (j >= 0) {
            group = $.beget(SpaceInvaders.enemiesGroupCollection);
            group.init();
            k = enemiesColumns - 1;

            while (k >= 0) {
                enemy = $.beget(SpaceInvaders.enemy);
                enemy.init(SpaceInvaders.spaceshipsModels[this.config.ENEMY_TYPE_NAME + i], this.config.ENEMY_TYPE_NAME + i);
                enemy.render();
                group.add(enemy);
                k -= 1;
            }

            this.enemiesCollection.addGroup(group, true);
            i = (j % 2 === 0) ? i -= 1 : i;
            j -= 1;
        }

        this.stage.render();
        this.stage.append(this.enemiesCollection.render());
        this.enemiesCollection.animationStart();

        return this;
    },
    /**
     * SpaceInvaders.pause
     * pauses the game. To achieve that, it will destroy all timers
     * and remove all events associated with the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    pause: function() {},
    /**
     * SpaceInvaders.resume
     * resume the game. To achieve that, it call all methods needed to re-instate the timers
     * and re-add all events associated with the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    resume: function() {},
    /**
     * SpaceInvaders.restart
     * Destroys the current game and initializes a new one
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    restart: function() {
        this.shutdown();
        this.init();
    },
    /**
     * SpaceInvaders.shutdown
     * Destroys the current game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    shutdown: function() {
        while (this._active) {
            this._active.pop().dispose();
        }
    }
};
SpaceInvaders.stage = {
    init: function(width, height) {
        this._width = width || '100%';
        this._height = height || '100%';
        return this;
    },
    render: function() {
        this._$html = $('<div class="stage"></div>');
        this._$html.css({
            width: this._width,
            height: this._height,
            overflow: 'hidden',
            position: 'relative'
        });

        $('body').append(this._$html);
        return this;
    },

    append: function(el) {
        this._$html.append(el);
        return this._$html;
    },
    html: function() {
        return this._$html;
    },
    dispose: function() {}
};

SpaceInvaders.player = {
    init: function() {
        this._$html;
        this._width;
        this._isFiring;
        this._isMoving;
    },
    move: function() {},
    fire: function() {},
    html: function() {},
    destroy: function() {},
    dispose: function() {}
};
SpaceInvaders.enemy = {
    init: function(model, type) {
        this._model = model;
        this._type = type;
        this._destroyed = false;

    },
    getType: function() {
        return this._type;
    },
    getModel: function() {
        return this._model;
    },
    move: function(direction, amount) {

    },
    isDestroyed: function() {
        return this._destroyed;
    },
    destroy: function() {
        this._$html.remove();
        this._destroyed = true;
    },
    fire: function() {},
    html: function() {
        return this._$html;
    },
    render: function() {
        if (!this._$html) {
            console.log(this);
            var $modelA = $('<div class="modelA ' + this.getType() + '"></div>'),
                $modelB = $('<div class="modelB ' + this.getType() + '"></div>'),
                modelA = this.getModel().a,
                modelB = this.getModel().b,
                createModel = function(model, $modelContainer) {
                    var len = model.length,
                        i = 0,
                        j = 0,
                        color = "",
                        pLen = 0,
                        $p, p;

                    for (i = 0; i < len; i += 1) {
                        $p = $('<p></p>');
                        p = model[i];
                        pLen = p.length;

                        for (j = 0; j < pLen; j += 1) {
                            color = (p[j] === "p") ? "black" : "white";
                            $p.append('<span class="' + color + '">*</span>');
                        }

                        $modelContainer.append($p);
                    }

                    return $modelContainer;
                };

            this._$html = $('<div class="enemy ' + this.getType() + '"></div>').css({
                'position': 'absolute',
                width: SpaceInvaders.config.ENEMY_WIDTH,
                height: SpaceInvaders.config.ENEMY_HEIGHT
            });
            this._$html.append(createModel(modelA, $modelA));
            this._$html.append(createModel(modelB, $modelB));
        }

        return this._$html;
    },
    // o metodo dispose é para apagarmos inimigos da memoria
    dispose: function() {}
};

SpaceInvaders.enemiesGroupCollection = {
    init: function() {
        return this;
    },
    get: function(idx) {
        return this._enemies[idx];
    },
    add: function(enemy) {
        if (!this._enemies) {
            this._enemies = [];
        }
        this._enemies.push(enemy);
        return this;
    },
    render: function() {
        if (!this._$html) {
            var i = this._enemies.length - 1,
                enemy;
            this._$html = $('<div class="group"></div>').css({
                position: 'absolute',
                width: (SpaceInvaders.config.ENEMY_WIDTH + SpaceInvaders.config.ENEMY_HORIZONTAL_MARGIN) * (i + 1),
                height: SpaceInvaders.config.ENEMY_HEIGHT
            });

            for (i; i >= 0; i -= 1) {
                enemy = this.get(i).render();
                enemy.css('left', 46 * i);
                this._$html.append(enemy);
            }
        }

        return this._$html;
    },
    move: function() {},
    remove: function() {},
    dispose: function() {},
    size: function() {
        return this._enemies.length;
    }
};

/**
 * A collection of enemies, that can be organized in groups (rows)
 * this class will be responsable for moving the mob of enemies (this way, we only move one element with javascript!)
 * Altough groups and enemies themselves have the ability to move, this way we save a lot of processing power.
 * This obejct is also responsable for toggling its class from a to b so that all enemies change their appearance,
 * using CSS (it's always better for the browser/css to do the work instead of javascript)
 *
 * Collisions will be checked in phases.
 * After a shot is fired, this object will track that bullet to check if it collides with the enemiesCollection html object
 * if it collides
 * it will check if it's colliding with one of its groups
 * if its colliding with one of its group
 * that group will check if it's colliding with any of it's enemies
 *
 * this way of checking for collisions is way cheaper than to check if it's colliding with every single enemy in game.
 *
 * @author Luís Couto
 * @organization 15minuteslate.net
 * @contact couto@15minuteslate.net
 * @version $Rev$
 * @requires $Rev$
 */
SpaceInvaders.enemiesCollection = {
    /**
     * SpaceInvaders.enemiesCollection.init
     * Initializes the object
     *
     * @public
     * @returns {SpaceInvaders.enemiesCollection} this
     */
    init: function() {
        this._groups = [];
        this._enemies = [];

        return this;
    },

    getGroup: function(idx) {
        return this._groups[idx];
    },

    get: function(idx, group) {
        if (group) {
            return this._group[group].get(idx);
        } else {
            return this._enemies[idx];
        }
    },

    add: function(enemie) {
        this._enemies.push(enemie);
        return this;
    },

    addGroup: function(group, addEnemies) {
        this._groups.push(group);

        if (addEnemies) {
            var i = group.size() - 1;
            for (i; i >= 0; i -= 1) {
                this.add(group.get(i));
            }
        }
        return this;
    },

    render: function() {
        var i = 0,
            group;

        if (!this._$html) {
            this._$html = $('<div class="collection"></div>');
            this._$html.css({
                position: 'absolute',
                width: (SpaceInvaders.config.ENEMY_WIDTH + SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.config.ENEMY_COLUMNS,
                height: (SpaceInvaders.config.ENEMY_HEIGHT + SpaceInvaders.config.ENEMY_HORIZONTAL_MARGIN) * SpaceInvaders.config.ENEMY_ROWS
            });
            if (this._groups.length) {
                i = this._groups.length - 1;
                for (i; i >= 0; i -= 1) {
                    group = this.getGroup(i).render().css('top', (SpaceInvaders.config.ENEMY_HEIGHT + SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * i);
                    this._$html.append(group);
                }
            } else {
                i = this._enemies.length - 1;
                for (i; i >= 0; i -= 1) {
                    this._$html.append(this.get(i).render());
                }
            }
            this._$html.addClass('a');
        }

        return this._$html;
    },

    animationStart: function() {
        var toggleClass = function() {
            if (this._$html.hasClass('a')) {
                this._$html.removeClass('a').addClass('b');
            } else {
                this._$html.removeClass('b').addClass('a');
            }
        };

        if (this._interval) {
            window.clearInterval(this._interval);
        }
        this._interval = window.setInterval($.proxy(toggleClass, this), 1000);

        return this;
    },

    animationStop: function() {
        if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = null;
            delete this._interval;
        }
        return this;
    },

    move: function() {},
    remove: function() {},
    dispose: function() {
        this.animationStop();
        var i = 0;
        if (this._groups.length) {
            for (i; i >= 0; i -= 1) {

            }
        }
    }
};

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
});

// Corre quando se fecha a janela ou se faz refresh
$(window).on('unload', SpaceInvaders.shutdown);

