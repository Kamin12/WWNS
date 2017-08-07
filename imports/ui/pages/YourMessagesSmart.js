Template.YourMessages.helpers({
  messageArgs(channel)  {
  return {
  isLoading:  Template.instance().loading.get(),
  isDirect: Template.instance().isDirect.get(),
  username: FlowRouter.getParam( 'channel' ),
    currentChannel( name ) {
   let current = FlowRouter.getParam( 'channel' );
   if ( current ) {
     return current === name || current === `@${ name }` ? 'active' : false;
   }
 },
messages: Messages.find();
}
}
  });
