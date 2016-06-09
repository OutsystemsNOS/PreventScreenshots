/*global cordova, module*/

module.exports = {
    enableScreenshots: function(){
        cordova.exec(function(data){
             console.info(data);
        }, function(err){
            console.error(err);
        }, "OurCodeWorldpreventscreenshots", "enable", [_settings]);
    },
    disableScreenshots: function(){
        cordova.exec(function(data){
             console.info(data);
        }, function(err){
            console.error(err);
        }, "OurCodeWorldpreventscreenshots", "disable", [_settings]);
    }
};
