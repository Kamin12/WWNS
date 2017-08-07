import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './TextStreamReusable.html';

Template.StreamTextReusable.helpers({
  textContext: function(){
    const instance = Template.instance();
    const textTitle = instance.getTextTitle();
    return Texts.findOne(textTitle) ? [textTitle] : [];
  },
  textArgs: function(textTitle){
    return Texts.findOne(textTitle);
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
