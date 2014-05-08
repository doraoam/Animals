var gNotification = cc.NotificationCenter.getInstance();
var gSpriteFrameCache = cc.SpriteFrameCache.getInstance();

var gSharedEngine = cc.AudioEngine.getInstance();

var MUSIC_BACKGROUND_1  = "audio/quizas.m4a";
var MUSIC_BACKGROUND_2  = "audio/entertainer.m4a";
var MUSIC_BACKGROUND_3  = "audio/canonandguitar.m4a";

var EFFECT_BUTTON_CHICK  = "audio/effect_buttonClick.ogg";

var g_ressources = [
    {src:"res/blue.jpg"},
    {src:"res/logo.png"},

    {src:"res/btn/btnStartGameDown.png"},
    {src:"res/btn/btnStartGameNor.png"},

    {src:"res/ProgressBarFront.png"},
    {src:"res/ProgressBarBack.png"},

    {src:"res/many.png"} ,
    {src:"res/many.plist"},
    {src:"res/baseResource.png"} ,
    {src:"res/baseResource.plist"},
    {src:"res/PatternBg.png"},

    {src:"resultLayer/star.png"},
    {src:"resultLayer/btnResultRestart.png"},
    {src:"resultLayer/btnResultRestartDown.png"},

    {src:EFFECT_BUTTON_CHICK},

    {src:MUSIC_BACKGROUND_1},
    {src:MUSIC_BACKGROUND_2},
    {src:MUSIC_BACKGROUND_3}
];

var gScoreData = {lastScore:0,bestScore:0};

var eGameMode = {
    Invalid : -1,
    Challenge:0,
    Timer:1,
    Count:2
};
var gGameMode = eGameMode.Challenge;

gScoreData.setLastScore = function(score){
    this.lastScore = score;

    if (score > this.bestScore)
    {
        this.bestScore = score;
        sys.localStorage.setItem('bestScore',this.bestScore);
    }
    sys.localStorage.setItem('lastScore',this.lastScore);
};

gScoreData.initData = function(){
    if( sys.localStorage.getItem('gameData') == null){
        sys.localStorage.setItem('bestScore','0');
        sys.localStorage.setItem('lastScore','0');

        sys.localStorage.setItem('gameData',33) ;
        return;
    }

    this.bestScore = parseInt(sys.localStorage.getItem('bestScore'));
};

