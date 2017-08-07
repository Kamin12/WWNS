Template.StreamText.onCreated( function(){
     this.getTextTitle = () => FlowRouter.getParam('textTitle');
     this.autorun( () => {
     this.subscribe('textStream', this.getTextTitle());
   });
});
