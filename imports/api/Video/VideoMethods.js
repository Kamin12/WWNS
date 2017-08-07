import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Videos } from './videos.js';

const Videosinsert = new ValidatedMethod({
name: 'Videos.methods.insert',
validate: new SimpleSchema({
   videotitle: {type: String},
   videotext: {type: String},
   videovideo: {type: Object},
   videoimage: {type: Object},
   videodate: {type: Date}
}).validator(),
run({}) {
  Videos.insert({
    titlevideo: videotitle,
    textvideo: videotext,
    videovideotwo: videovideo,
    imagevideo: videoimage,
    datevideo: videodate
  });
}
});
