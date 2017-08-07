import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Audio } from './audio.js';

const Audioinsert = new ValidatedMethod({
  name: 'Audio.methods.insert',
  validate:new SimpleSchema({
      audiotitle: { type: String },
      audiotext: { type: String }
    }).validator(),
    run({audiotitle, audiotext}) {
	Audio.insert({
    titleaudio: audiotitle,
    textaudio: audiotext
	});
}
});
