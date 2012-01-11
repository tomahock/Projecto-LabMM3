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
    move: function(direction, amount) {
    	var moveDirection = {
			top : function(amount){
				this._$html.css('top', this._$html.css('top') - amount);
			},
			left : function(amount){
				this._$html.css('left', this._$html.css('left') - amount);
			},
			right : function(amout){
				this._$html.css('left', this._$html.css('left') + amount);
			},
			bottom : function(amout){
				this._$html.css('top', this._$html.css('top') + amount);
			}
		}
		
		if(!moveDirection){
			return;
		}else{
			moveDirection[direction].call(this, direction, amount);
		}
		
		return this;
    },
     dance: function(nivel){
    	window.setInterval($.proxy(function(){
    		var mov = nivel.shift();
    		if(mov){
    			this.move(mov,5);
    		}
  		}, this), 1000)
    },
    remove: function() {},
    dispose: function() {},
    size: function() {
        return this._enemies.length;
    }
};
