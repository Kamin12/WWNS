import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Audio.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Audio.schema = new SimpleSchema({
audioaudioblz: {type: [Object]},
audiomediablz: {type: [Object]},
audiotitleblz: {type: String},
audiotextblz: {type: String}
});

Audio.attachSchema(Audio.schema);
