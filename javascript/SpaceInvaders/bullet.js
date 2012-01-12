SpaceInvaders.bullet = {
	
    init: function() {
    	this._left = SpaceInvaders.player.getLeft()+(SpaceInvaders.config.PLAYER_WIDTH/2);
    	this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.enemiesCollection.getLength()) + 100;
    	this._isMoving = false;
    	this._bulletSpeed = 1;
    	this._colided = false;
    	return this;
    },
    
    render: function(){
    	if (!this._$html) {
    		this._$html = $('<div class="bullet"><p><span class="yellow">I</span></p></div>').css({
                'position': 'absolute',
                'left' : this._left,
                'top' : this._top,
            });
    	}
		SpaceInvaders.stage.append(this._$html);
    	this._$html;
    },
    
    getLeft: function(){
    	return this._left
    },
    
    getTop:	function(){
    	return parseInt(this._$html.css('top'),10)
    },
    
	move: function(){
		this._isMoving = true;
		this._interval = window.setInterval($.proxy(this.checkColide, this),0);
		this._$html.animate({
			top : 0
		}, {
			duration: 1500,
			sucess: function(){
				this._isMoving=false;
				window.clearInterval(this._interval);
				}
		});
	},
	
	checkColide: function(){
		if(this._isMoving){
			var control = SpaceInvaders.enemiesCollection.isInside(this);
			if(control){
				var i = SpaceInvaders.enemiesCollection.getLength();
				for(i ; i >= 0; i--){
					var group = SpaceInvaders.enemiesCollection.getGroup(i);
					if(SpaceInvaders.enemiesCollection.isInside(this,i)){
						var j = group._enemies.length;
						console.warn('inside');
						for(j; j>= 0; j--){
							if(group._enemies[j].isInside(this, i, j)){
								this.colide();
								return;
							}
						}
					}
				}
			}else{
				window.clearInterval(this._interval,this);
			}
		}
	},
	
	addEvent: function(){},
	
	removeEvent: function(){},
	
	colide: function() {
        this._$html.remove();
        this._colided = true;
    },
    
    dispose: function() {
    	if (this._interval) { window.clearInterval(this._interval); }
        this.removeEvent();
        this._$html.remove();
        this._$html = null;
        this._left = null;
        this._top = null;
        this._isMoving = null;
        this._bulletSpeed = null;
        this._colided = null;
    }
};
