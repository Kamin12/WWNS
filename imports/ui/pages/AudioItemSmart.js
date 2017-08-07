Template.AudioItemSmart.helpers({
  pathForAudio: function() {
    var audio = this;
    var params = {
        audioTitle: audio.audiotitle
    };
    var routeName = "audio";
    var path = FlowRouter.path(routeName, params);

    return path;
  }
});
