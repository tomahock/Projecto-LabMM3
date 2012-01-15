SpaceInvaders.bullet = {
	
    init: function() {
    	this._left = SpaceInvaders.player.getLeft()+(SpaceInvaders.config.PLAYER_WIDTH/2);
    	this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.enemiesCollection.getLength()) + 150;
    	this._isMoving = false;
    	this._bulletSpeed = 1;
    	this._colided = false;
    	this._id = new Date().getTime(); // UNIX timestamp
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
				$(window).trigger('topStageCollision', [this._id]);
			},this)
		});
		
		this._isMoving = true;
		this._interval = window.setInterval($.proxy(this.checkColide, this),0);
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
						group = SpaceInvaders.enemiesCollection.getGroup(groupIDg);
					if(SpaceInvaders.enemiesCollection.isInside(this, groupIDg)){
						for(var j=0; j<=group._enemies.length-1; j++){//j == enemyID
							var enemyID = j,
								enemyIDe = j + 'e';
							if(SpaceInvaders.enemiesCollection.isInside(this, groupIDg, enemyIDe)){
								var enemy = SpaceInvaders.enemiesCollection.get(enemyID,groupIDg);
								//SpaceInvaders.enemiesCollection.remove(enemyID,groupIDg);
								this.colide([enemyID, groupIDg]);
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
		window.clearInterval(this._interval);
        this._colided = true;
        this._$html.stop(true, false);
        this.remove(enemy);
    },
    remove : function(enemy){
    	$(window).trigger('collision', [this._id, enemy]);
   	},
    dispose: function() {
    	if (this._interval) { window.clearInterval(this._interval); }
    	this._interval = null;
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
