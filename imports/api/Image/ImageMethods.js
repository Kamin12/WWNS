import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Images } from './images.js';

const Imagesinsert = new ValidatedMethod({
name: 'Images.methods.insert',
validate: new SimpleSchema ({
  imagetext: {type: String},
  imagetitle: {type: String},
  imageimage: {type: Object},
  imagedate: {type: Date}
}).validator(),
run({imagetext, imagetitle, imageimage,imagedate}) {
Images.insert({
  textimage: imagetext,
  titleimage: imagetitle,
  imageimagetwo: imageimage,
  dateimage: imagedate
});
}
});
