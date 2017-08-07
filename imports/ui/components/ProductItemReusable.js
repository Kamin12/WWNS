import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ProductItemReusable.html';

Template.ProductItem.helpers({
pathforProduct: function (){
  var product = this;
  var params = {
    product : this.producttitle,
  };
  var channel = "products";
  var path = FlowRouter.path(channel, params);
  return path;
}
});

Template.Product.events ({
  'click #buydarkfeed' (event, template) {
   var item = this;
   Session.set('selectedItem', 'this.title');
   Blaze.render(Template.paymentModal, document.body);
   }
});

Template.Lists_show.onCreated(function listShowOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
      list: { type: Function },
      todosReady: { type: Boolean },
      todos: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });
