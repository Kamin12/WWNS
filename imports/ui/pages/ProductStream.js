Template.StreamProductMain.onCreated(function StreamProductOnCreated() {
  this.mainimageconsole = new ReactiveVar('{{product.imageone}}');
  this.leftarrow = new ReactiveVar('slideshowarrowone');
  this.rightarrow = new ReactiveVar('slideshowarrowtwo');
  this.productArgue = new ReactiveDict();
  this.productArgue.setDefault({
    editing: false,
    purchased: false,
    commented: false
  });

  this.getproductTitle = () => FlowRouter.getParam('productTitle');
  this.autorun(() => {
  this.subscribe('productStream', this.getproductTitle());
});
});
