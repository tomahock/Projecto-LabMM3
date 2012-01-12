/**
 * SpaceInvaders Object with basic methods
 *
 */

var SpaceInvaders = {
    /**
     * SpaceInvader.config
     * basic onfiguration constants to be used over the game
     *
     * @public
     * @type Object
     */
    config: {
        ENEMY_COLUMNS: 10,
        ENEMY_ROWS : 6,
        ENEMY_TYPES : 3,
        ENEMY_TYPE_NAME : 'alien',
        PLAYER_TYPE_NAME : 'player',
        PLAYER_WIDTH : 36,
        PLAYER_HEIGHT : 41,
        ENEMY_WIDTH : 36,
        ENEMY_HEIGHT: 41,
        ENEMY_VERTICAL_MARGIN : 10,
        ENEMY_HORIZONTAL_MARGIN : 10,
        STAGE_WIDTH: 930,
        STAGE_HEIGHT: null
    },
    /**
     * SpaceInvaders.init
     * Point of Entry 
     * initialize the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    init: function() {
        var enemiesColumns = this.config.ENEMY_COLUMNS,
            enemiesRows = this.config.ENEMY_ROWS,
            typesOfEnemies = this.config.ENEMY_TYPES,
            totalEnemies = enemiesColumns * enemiesRows,
            equalTypes = totalEnemies / typesOfEnemies,
            rowsOfType = enemiesRows / typesOfEnemies,
            enemy, group, player, shootColl, bulletCollection,
            i, j, k;

        this._active = [];
        this._active.push(this.enemiesCollection.init());
        this._active.push(this.stage.init(this.config.STAGE_WIDTH, this.config.STAGE_HEIGHT));

        i = typesOfEnemies;
        j = enemiesRows - 1;

        while (j >= 0) {
            group = $.beget(SpaceInvaders.enemiesGroupCollection);
            group.init();
            k = enemiesColumns - 1;

            while (k >= 0) {
                enemy = $.beget(SpaceInvaders.enemy);
                enemy.init(SpaceInvaders.spaceshipsModels[this.config.ENEMY_TYPE_NAME + i], this.config.ENEMY_TYPE_NAME + i);
                enemy.render();
                group.add(enemy);
                k -= 1;
            }

            this.enemiesCollection.addGroup(group, true);
            i = (j % 2 === 0) ? i -= 1 : i;
            j -= 1;
            
        }
		this.bulletCollection.init();
		//Player init
		this.player.init(SpaceInvaders.spaceshipsModels.player, this.enemiesCollection.getLength());
		this.player.addEvent();			
		console.warn(SpaceInvaders.enemiesCollection._groups);
        this.stage.render();
        this.stage.append(this.enemiesCollection.render());
        this.stage.append(this.player.render());
        this.enemiesCollection.animationStart();
		this.enemiesCollection.dance(SpaceInvaders.spaceshipsModels.nivel1);
		
        return this;
    },
    /**
     * SpaceInvaders.pause
     * pauses the game. To achieve that, it will destroy all timers
     * and remove all events associated with the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    pause: function() {},
    /**
     * SpaceInvaders.resume
     * resume the game. To achieve that, it call all methods needed to re-instate the timers
     * and re-add all events associated with the game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    resume: function() {},
    /**
     * SpaceInvaders.restart
     * Destroys the current game and initializes a new one
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    restart: function() {
        this.shutdown();
        this.init();
    },
    /**
     * SpaceInvaders.shutdown
     * Destroys the current game
     *
     * @public
     * @returns {SpaceInvaders} this
     */
    shutdown: function() {
        while (this._active) {
            this._active.pop().dispose();
        }
    }
};