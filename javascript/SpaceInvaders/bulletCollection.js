SpaceInvaders.bulletCollection = {
    init: function() {
        this._bullets = [];
        this._addHandler = $.proxy(this.add, this);
        this._removeByIdHandler = $.proxy(this.removeById, this);
        this.addEvent();
        return this;
    },
    
    get: function(idx) {
		return this._bullets[idx];
    },
    
    add: function() {
    	bullet = $.beget(SpaceInvaders.bullet);
    	bullet.init();
    	bullet.render();
    	bullet.move();
        this._bullets.push(bullet);
        return this;
    },
    
    remove: function(idx) {
    	this._bullets.splice(idx, 1)[0].discard();
    	return this;
    },
    
    removeById: function(evt, id){
    	if(this._bullets){
    		var i = this._bullets.length -1;
    		for(i; i>=0; i--){
    			if(this.get(i)._id === id){
    				this.remove(i);
    				return;
    			}
    		}
    	}
    	return this;
    },
    
    removeAll : function(){
        if (this._bullets){
        	var i = this._bullets.length - 1;
        	for(i; i>=0; i-=1){
        		this.get(i).discard();
        	}
        	this._bullets = [];
        }
    	return this;
    },
    
    addEvent : function(){
    	$(window).on("onFire", this._addHandler);
    	$(window).on("collision", this._removeByIdHandler);
    	$(window).on("topStageCollision", this._removeByIdHandler);
    },
    
    removeEvent : function(){
    	$(window).off('onFire', this._addHandler);
    	$(window).off("collision", this._removeByIdHandler);
    	$(window).off("topStageCollision", this._removeByIdHandler);
    },
    discard : function(){
    	this.removeEvent();
    	this.removeAll();
    	this._bullets = null;
    }
};