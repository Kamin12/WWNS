import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ProductStreamReusable.html';


  Template.StreamProduct1.events({
    'click .slideshowarrowone' (event) {
      Template.instance().mainimageconsole.set('productimagethree');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowtwo' (event) {
      Template.instance().mainimageconsole.set('productimagetwo');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowthree' (event) {
      Template.instance().mainimageconsole.set('productimageone');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click .slideshowarrowfour' (event) {
      Template.instance().mainimageconsole.set('productimagethree');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowfive' (event) {
      Template.instance().mainimageconsole.set('productimagetwo');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('productimageone');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click #buybuttonnavigatorstream' (event) {
      Session.set('selectedItem', 'Title');
      Blaze.render(Template.paymentModal, document.body);
    },
    'click #mediatab' (event) {
      $("#aboutcontainer").hide();
      $('#payment-form').hide();
      $("#mediacontainer").show();
    },
    'click #abouttab' (event) {
      $("#aboutcontainer").show();
      $("#mediacontainer").hide();
    }
  });

  Template.StreamProduct1.onRendered(function StreamProductonRendered1() {
    $("#aboutcontainer").hide();
    $('#payment-form').hide();
  });

    Template.StreamProduct1.helpers({
      mainimagehref: function() {
        return Template.instance().mainimageconsole.get();
      },
      leftarrowhelper: function() {
        return Template.instance().leftarrow.get();
      },
      rightarrowhelper: function() {
        return Template.instance().rightarrow.get();
      },
      selectedchoice: function() {
        return Template.instance().selectedchoice.get();
      }
    });

    Template.StreamProductMain.onCreated(function listShowOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
    producttext: {type: String},
    producttitle: {type: String},
    productmedia: {type: Object},
    productmember: {type: String},
    productdate: {type: Date},
    productprice: {type: String},
    productshipprice: {type: String},
    productshiptime: {type: String},
    }).validate(Template.currentData());
  });
