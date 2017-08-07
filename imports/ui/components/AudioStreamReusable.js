import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './AudioStreamReusable.html';

Template.StreamAudioReusable.onCreated(function(){
  this.autorun(() => {
    new SimpleSchema({
      audioaudioblz: {type: [Object]},
      audiomediablz: {type: [Object]},
      audiotitleblz: {type: String},
      audiotextblz: {type: String},

  }).validate(Template.currentData());
});
