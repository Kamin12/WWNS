import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Products } from '../Products.js';


Meteor.publish('productStream', function (productTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Products.findOne({productTitle}, {
      fields: {
        productmember: 1,
        productmembers: 1,
        producttitle: 1,
        productdate: 1,
        producttext: 1
      }
    });
 });
}
