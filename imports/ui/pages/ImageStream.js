Template.StreamImage.onCreated( function(){
     this.getImageTitle = () => FlowRouter.getParam('imageTitle');
     this.autorun( () => {
     this.subscribe('imageStream', this.getImageTitle());
   });
});


Template.StreamImage.helpers({
  imageContext: function(){
    const instance = Template.instance();
    const imageTitle = instance.getImageTitle();
    return Images.findOne(imageTitle) ? [imageTitle] : [];
  },
  imageArgs: function(imageTitle){
  return Images.findOne(imageTitle);
  }
});
