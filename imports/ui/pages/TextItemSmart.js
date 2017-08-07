Template.TextItemSmart.helpers({
  pathForTextItem: function() {
    var text = this;
    var params = {
        textTitle: text.texttitle
    };
    var routeName = "texts";
    var path = FlowRouter.path(routeName, params );

    return path;
  }
});
