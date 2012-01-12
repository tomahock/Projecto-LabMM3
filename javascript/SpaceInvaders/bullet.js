SpaceInvaders.bullet = {
    init: function(bulletLeft) {
    	this._left = bulletLeft;
    	this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.enemiesCollection.getGroupNumber()) + 100;
    	this._isMoving;
    	this._bulletSpeed = 1;
    	this._colided = false;
    	return this;
    },
    render: function(){
    	console.warn('init render');
    	console.warn(this);
    	if (!this._$html) {
    		console.warn('bulletTop' + this._left);
    		this._$html = $('<div class="bullet"><p><span class="yellow">I</span></p></div>').css({
                'position': 'absolute',
                'left' : this._left,
                'top' : this._top,
            });
    	}
    	this._$html;
    },
    getLeft: function(){},
    getTop:	function(){},
	move: function(){
			console.warn(this);
			this._$html.animate({'top' : '0'
			}, '1000');
	},
	checkColide: function(){},
	addEvent: function(){},
	removeEvent: function(){},
	colide: function() {
        this._$html.remove();
        this._colided = true;
    },
    dispose: function() {}
};
