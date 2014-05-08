/**
 * Created with IntelliJ IDEA.
 * User: doraoam
 * Date: 9/5/2557
 * Time: 1:10 น.
 * To change this template use File | Settings | File Templates.
 */
var FightLayer = cc.Layer.extend({

    mWordLabel:null,

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

            var foeSprite = cc.Sprite.create("res/mony.png");
            foeSprite.setPosition(355,320);
            this.addChild(foeSprite);

            this.initLabels();

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

    initLabels:function(){
        this.mWordLabel = cc.LabelTTF.create("Hi! I'm mony. Can you defeat me?");
        this.mWordLabel.setPosition(350,590);

        this.addChild(this.mWordLabel);
    },

    menuCallBack:function(sender){
        gSharedEngine.playEffect(EFFECT_BUTTON_CHICK);
        //gGameMode = eGameMode.Challenge;
        gGameMode = eGameMode.Timer;
        var nextScene = cc.Scene.create();
        var nextLayer = new PatternMatrix;
        nextScene.addChild(nextLayer);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(0.4, nextScene));
    }
});

var UnoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new FightLayer;
        this.addChild(layer);
    }
});