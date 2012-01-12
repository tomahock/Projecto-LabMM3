SpaceInvaders.bulletCollection = {
    init: function() {
        this._bullets = [];
        this._addHandler = $.proxy(this.add, this);
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
    	this._bullets.splice(idx, 1).dispose();
    	return this;
    },
    
    removeAll : function(){
    	var i = this._bullets.length - 1;
    	for(i; i>=0; i-=1){
    		this.get(i).dispose();
    	}
    	this._bullets = [];
    	return this;
    },
    
    addEvent : function(){
    	$(window).on("onFire", this._addHandler);
    },
    
    removeEvent : function(){
    	$(window).off('onFire', this._addHandler)
    },
    dispose : function(){
    	this.removeEvent();
    	this.removeAll();
    	this._bullets = null;
    }
};

