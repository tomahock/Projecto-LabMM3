SpaceInvaders.player = {
    init: function(model, groupNumber) {
 		this._model = model;
        this._width = 0;
        this._left = (SpaceInvaders.config.STAGE_WIDTH / 2) - ( SpaceInvaders.config.PLAYER_WIDTH / 2);
        this._top = ((SpaceInvaders.config.ENEMY_HEIGHT+SpaceInvaders.config.ENEMY_VERTICAL_MARGIN) * groupNumber) + 100;
        this._isFiring = false;
        this._isMoving = false;
        this._bullets = [];

		this._keyUpEvent = $.proxy(this._keyUpHandler, this);
		this._keyDownEvent = $.proxy(this._keyDownHandler, this);
    },
    getModel: function() {
        return this._model;
    },
    
    getMoving: function(){
    	return this._isMoving;
    },
    
    getLeft: function(){
    	return this._left;
    },
    getBulletsLength: function(){
    	return this._bullets.length;
    },
    getTop: function(){
    	return this._top;
    },
    
    setMoving: function(moving){
    	this._isMoving = moving;
    },
    render: function(){
    	 if (!this._$html) {
            var $spaceship = $('<div class="spaceship"></div>'),
                createModel = function(model, $modelContainer) {
                    var len = model.length,
                        i = 0,
                        j = 0,
                        color = "",
                        pLen = 0,
                        $p, p;
                        
                    for (i = 0; i < len; i += 1) {
                        $p = $('<p></p>');
                        p = model[i];
                        pLen = p.length;

                        for (j = 0; j < pLen; j += 1) {
                            color = (p[j] === "p") ? "black" : "white";
                            $p.append('<span class="' + color + '">*</span>');
                        }

                        $modelContainer.append($p);
                    }

                    return $modelContainer;
                };

            this._$html = $('<div class="player"></div>').css({
                'position': 'absolute',
                'left' : this._left,
                'top' : this._top,
                width: SpaceInvaders.config.PLAYER_WIDTH,
                height: SpaceInvaders.config.PLAYER_HEIGHT
            });
            this._$html.append(createModel(this._model, $spaceship));
        }

        return this._$html;
    },
    move: function(direction, amount) {
    	/*
    	 * 
    	 * TODO : verificação se sai do stage
    	 * 
    	 */
    	var moveDirection = {
			left : function(amount){
				this._$html.css('left', parseInt(this._$html.css('left'),10) - amount);
				this._left -= amount;
				//this._$html.animate({"left": "-=" +  amount}, "fast");
			},
			right : function(amout){
				this._$html.css('left', parseInt(this._$html.css('left'),10) + amount);
				this._left += amount;
				//this._$html.animate({"left": "+=" +  amount}, "fast");
			}
		}
		
		if(this.getMoving() && moveDirection[direction]){
			moveDirection[direction].call(this, amount);
		}
		
		return this;
    },
    addEvent: function(){
    	$(window).on('keydown', this._keyDownEvent);
    	$(window).on('keyup', this._keyUpEvent);
    	
    	return this;
    },
    removeEvent : function(){
    	$(window).off('keydown', this._keyDownEvent);
    	$(window).off('keyup', this._keyUpEvent);
    
    },
    
    _keyUpHandler : function(evt){
    	var keyID = evt.which;
    	if(keyID == 37 || keyID == 39){
    		this.setMoving(false);
    	}
    },
    
    _keyDownHandler : function(evt){
    	var keyID = evt.which,
    				direction = "";
    				
    	if(keyID == 37){
    		direction = 'left';
    	}else if(keyID == 39){
    		direction = 'right';
    	}else if(keyID == 32){
    		$(window).trigger('onFire');
    		return;
    	}else{
    		return;
    	}
    	this.setMoving(true);
    	this.move(direction, 10);
    },

    fire: function() {},
    html: function() {},
    destroy: function() {},
    dispose: function() {
    	this.removeEvent();
    	this._$html.stop().remove();
    	
    	this._keyUpEvent = null;
    	this._keyDownEvent = null;
    	this._model = null;
    	this._width = null;
    	this._left = null;
    	this._top = null;
    	this._isFiring = null;
    	this._isMoving = null;
    	this._bullets = null;
    
    }
};