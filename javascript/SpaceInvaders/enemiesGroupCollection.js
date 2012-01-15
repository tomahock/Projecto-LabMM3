SpaceInvaders.enemiesGroupCollection = {
    init: function() {
        return this;
    },
    
    get: function(idx) {
        return this._enemies[idx];
    },
    
    getTop : function(){
    	return this._$html.css('top');
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
		
		if(moveDirection[direction]){
			moveDirection[direction].call(this, direction, amount);
		}
		
		return this;
    },
    
    dance: function(nivel){
    	this._danceInterval = window.setInterval($.proxy(function(){
    		var mov = nivel.shift();
    		if(mov){
    			this.move(mov,5);
    		}
    		else{
    			this.stopDance();
    		}
  		}, this), 1000);
    },
    
    stopDance : function(){
    	if(this._danceInterval){
    		window.clearInterval(this._danceInterval);
    	}
    	
    	return this;
    },
    
    remove: function(idx) {
    	var enemy = this.get(idx);
    	enemy.destroy();
		$(window).trigger('enemyDown');
    	this._enemies.splice(idx,1);
    	
    },
    
    removeAll : function(){
    	var i = this._enemies.length - 1;
    	for(i; i>=0;i-=1){
    		this.get(i).dispose();
    	}
    	this.enemies = [];
    	return this;
    },
    
    dispose: function() {
    	this.stopDance().removeAll();
    	
    	this._$html.remove();
    	this.enemies = null;
    	this._$html = null;
    },
    
    size: function() {
        return this._enemies.length;
    }
};
