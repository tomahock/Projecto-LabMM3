SpaceInvaders.enemiesGroupCollection = {
    init: function() {
        return this;
    },
    get: function(idx) {
        return this._enemies[idx];
    },
    add: function(enemy) {
        if (!this._enemies) {
            this._enemies = [];
        }
        this._enemies.push(enemy);
        return this;
    },
    render: function() {
        if (!this._$html) {
            var i = this._enemies.length - 1,
                enemy;
            this._$html = $('<div class="group"></div>').css({
                position: 'absolute',
                width: (SpaceInvaders.config.ENEMY_WIDTH + SpaceInvaders.config.ENEMY_HORIZONTAL_MARGIN) * (i + 1),
                height: SpaceInvaders.config.ENEMY_HEIGHT
            });

            for (i; i >= 0; i -= 1) {
                enemy = this.get(i).render();
                enemy.css('left', 46 * i);
                this._$html.append(enemy);
            }
        }

        return this._$html;
    },
    move: function() {},
    remove: function() {},
    dispose: function() {},
    size: function() {
        return this._enemies.length;
    }
};
