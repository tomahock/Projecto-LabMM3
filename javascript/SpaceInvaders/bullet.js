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
    	return this._left;
    },
    
    html : function(){
    	return this._$html;
    },
    
    getTop:	function(){
    	return this._top;
    },
    
    setTop : function(top){
    	this._top = top;
    	return this;
    },
	move: function(){
		
		this._$html.animate({
			top : 0
		}, {
			duration: 1500,
			step: $.proxy(this.setTop, this),
			complete: $.proxy(function(){
				this._isMoving=false;
				window.clearInterval(this._interval);
			},this)
		});
		
		this._isMoving = true;
		this._interval = window.setInterval($.proxy(this.checkColide, this),10);
	},
	
	checkColide: function(){
		if(this._isMoving){
			var control = SpaceInvaders.enemiesCollection.isInside(this);
			if(control){
				var i = SpaceInvaders.enemiesCollection.getLength();
				for(i ; i >= 0; i--){
					var group = SpaceInvaders.enemiesCollection.getGroup(i);
					if(SpaceInvaders.enemiesCollection.isInside(this,i)){
						var j = group._enemies.length-1;
						for(j; j>= 0; j--){
							if(SpaceInvaders.enemiesCollection.isInside(this, i, j)){
								this.colide();
								return;
							}
						}
					}
				}
			}
		}
	},
	
	addEvent: function(){},
	
	removeEvent: function(){},
	
	colide: function() {
		window.clearInterval(this._interval,this);
		console.warn(this);
        this._$html.remove();
        this._colided = true;
        console.warn('FUCKING COLIDE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
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
