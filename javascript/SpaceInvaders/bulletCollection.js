SpaceInvaders.bulletCollection = {
    init: function() {
        this._bullets = [];
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
    remove: function() {},
    addEvent : function(){
    	$(window).on("onFire", $.proxy(function(){
    		this.add();
    	}, this));
    }
};

