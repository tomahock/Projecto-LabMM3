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
		this._left = (SpaceInvaders.config.STAGE_WIDTH/2)-(((SpaceInvaders.config.ENEMY_WIDTH+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN)*SpaceInvaders.config.ENEMY_COLUMNS)/2);
		this._top;
		this._width = (SpaceInvaders.config.ENEMY_WIDTH + SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.config.ENEMY_COLUMNS;
		this._height = (SpaceInvaders.config.ENEMY_HEIGHT + SpaceInvaders.config.ENEMY_HORIZONTAL_MARGIN) * SpaceInvaders.config.ENEMY_ROWS
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
	isInside: function(bullet, group, enemie){
		var colide = false;
		if(!group && !enemie){
			return colide;
		}else if(group && !enemie){
			return colide;
		}else if(group && enemie){
			return colide;
		}
	},
	getLength: function(){
		return this._groups.length;
	},
	getLeft : function(){
		return this._left;
	},
	getTop : function(){
		return this._top;
	},
	getWidth : function(){
		return this._width;
	},
	getHeight : function(){
		return this._heigth;
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
                left: this._left,
                width: this._width,
                height: this._height
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

    move: function(direction, amount) {
    	
    	var moveDirection = {
			top : function(amount){
				this._$html.css('top', parseInt(this._$html.css('top'),10) - amount);
				this._top -= amount;
			},
			left : function(amount){
				this._$html.css('left', parseInt(this._$html.css('left'),10) - amount);
				this._left -= amount;
			},
			right : function(amount){
				this._$html.css('left', parseInt(this._$html.css('left'),10) + amount);
				this._left += amount;
			},
			bottom : function(amount){
				this._$html.css('top', parseInt(this._$html.css('top'),10) + amount);
				this._top += amount;
			}
		}
		
		if(!moveDirection){
			return;
		}else{
			moveDirection[direction].call(this, amount);
		}
		
		return this;
    },
    dance: function(nivel){
    	this._interval = window.setInterval($.proxy(function(){
    		var mov = nivel.shift();
    		if(mov){
    			this.move(mov,5);
    		}
  		}, this), 1000);
    },
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
