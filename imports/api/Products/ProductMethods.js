import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Products } from './products.js';

const Productsinsert = new ValidatedMethod({
  name : 'Products.methods.insert',
  validate: new SimpleSchema({
    productmedia: {type: Object},
    producttitle: {type: String},
    producttext: {type: String},
    productdate: {type: Date},
    productshiptime: {type: String},
    productshipprice: {type: String}
  }).validator(),
  run({productmedia, producttitle, producttext, productdate, productshiptime, productshipprice }) {
Products.insert({
mediaproduct: productmedia,
titleproduct: producttitle,
textproduct: producttext,
dateproduct: productdate,
shiptimeproduct: productshiptime,
shippriceproduct : productshipprice
});
  }
});
