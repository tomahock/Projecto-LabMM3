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
				this.remove();
			},this)
		});
		
		this._isMoving = true;
		this._interval = window.setInterval($.proxy(this.checkColide, this),10);
	},
	
	checkColide: function(){
		/***************************
		 * 
		 *
		 * TODO: check if bullet is on the rigth or in left side of stage and start to check colide from enemie on right or left! 
		 *
		 * */
		if(this._isMoving){
			var control = SpaceInvaders.enemiesCollection.isInside(this);
			if(control){
				var i = SpaceInvaders.enemiesCollection.getLength();
				for(i ; i >= 0; i--){ //i == groupID
					var groupID = i,
						groupIDg = i + 'g';
						group = SpaceInvaders.enemiesCollection.getGroup(groupID);
					if(SpaceInvaders.enemiesCollection.isInside(this, groupIDg)){
						for(var j=0; j<=group._enemies.length-1; j++){//j == enemyID
							var enemyID = j,
								enemyIDe = j + 'e';
							if(SpaceInvaders.enemiesCollection.isInside(this, groupIDg, enemyIDe)){
								var enemy = SpaceInvaders.enemiesCollection.get(enemyID,groupID);
								SpaceInvaders.enemiesCollection.remove(enemyID,groupID);
								this.colide(enemy);
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
	
	colide: function(enemy) {
		window.clearInterval(this._interval,this);
		enemy.destroy();
        this._colided = true;
        this._$html.stop(true, false);
        this.remove();
        console.warn('FUCKING COLIDE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    },
    remove : function(){
       	//window.trigger('collision');
    	this.dispose();
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
