SpaceInvaders.bullet = {
    init: function() {
    	this._left = SpaceInvaders.player.getLeft();
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
    getLeft: function(){},
    getTop:	function(){
    	return parseInt(this._$html.css('top'),10)
    },
	move: function(){
		this._isMoving = true;
		this.checkColide();
			this._$html.animate({'top' : '0'
			}, '1500');
	},
	checkColide: function(){
		if(SpaceInvaders.enemiesCollection.isInside(this)){
			var i = SpaceInvaders.enemiesCollection.getLength();
			for(i ; i >= 0; i--){
				var group = SpaceInvaders.enemiesCollection.getGroup(i);
				if(group.isInside(this, i)){
					var j = group._enemies.length;
					for(j; j>= 0; j--){
						if(group._enemies[j].isInside(this, i, j)){
							this.colide();
							return;
						}
					}
				}
			}
		}
	},
	addEvent: function(){},
	removeEvent: function(){},
	colide: function() {
        this._$html.remove();
        this._colided = true;
    },
    dispose: function() {}
};
