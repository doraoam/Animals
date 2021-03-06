var WelcomeLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        var bRet = false;
        if (this._super()) {
            var bgSprite = cc.Sprite.create("res/blue.jpg");
            bgSprite.setPosition(350,340);
            this.addChild(bgSprite);

            var logoSprite = cc.Sprite.create("res/logo.png");
            logoSprite.setPosition(355,320);
            this.addChild(logoSprite);

            var itemStartGame = cc.MenuItemImage.create(
                "res/btn/btnStartGameNor.png",
                "res/btn/btnStartGameDown.png",
                this.menuCallBack,
                this
            );
            itemStartGame.setPosition(355, 160);

            var menu = cc.Menu.create(itemStartGame);
            menu.setPosition(0,0);
            this.addChild(menu);

            bRet = true;
        }
        return bRet;
    },
    menuCallBack:function(sender){
        gSharedEngine.playEffect(EFFECT_BUTTON_CHICK);
        //gGameMode = eGameMode.Challenge;
        gGameMode = eGameMode.Timer;
        var nextScene = cc.Scene.create();
        var nextLayer = new FightLayer;
        nextScene.addChild(nextLayer);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(0.4, nextScene));
    }
});

var MyGameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        gScoreData.initData();

        var spriteFrameCache = cc.SpriteFrameCache.getInstance();
        spriteFrameCache.addSpriteFrames("res/baseResource.plist","res/baseResource.png");
        spriteFrameCache.addSpriteFrames("res/many.plist","res/many.png");

        var layer = new WelcomeLayer;
        this.addChild(layer);

        gSharedEngine.setMusicVolume(1);
        gSharedEngine.setEffectsVolume(0.1);/*
        gSharedEngine.playMusic(MUSIC_BACKGROUND_1,false);
        gSharedEngine.playMusic(MUSIC_BACKGROUND_2,false);
        gSharedEngine.playMusic(MUSIC_BACKGROUND_3,false);*/
    }
});