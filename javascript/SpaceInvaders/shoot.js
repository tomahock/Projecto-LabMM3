SpaceInvaders.shoot = {
    init: function(shootLeft) {
    	this._left = shootLeft;
    	this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * SpaceInvaders.enemiesCollection.getGroupNumber()) + 100;;
    	this._isMoving;
    	this._shootSpeed = 1;
    	this._colided = false;
    	return this;
    },
    render: function(){
    	console.warn('init render');
    	console.warn(this);
    	if (!this._$html) {
    		console.warn('shootTop' + this._left);
    		this._$html = $('<div class="shoot"><p><span class="yellow">I</span></p></div>').css({
                'position': 'absolute',
                'left' : this._left,
                'top' : this._top,
            });
    	}
    	return this._$html;
    },
    getLeft: function(){},
    getTop:	function(){},
	move: function(){
			console.warn(this);
			var shootTop = parseInt(this._$html.css('top'),10);
			shootTop -= this._shootSpeed;
			this._$html.animate({'top' : '0'
			}, '300');

		//this._interval = window.setInterval($.proxy(shootMove, this),100);
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
