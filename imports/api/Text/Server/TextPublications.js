import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Texts } from '../Text.js';


Meteor.publish('textStream', function (textTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Texts.findOne({textTitle}, {
    fields: {
      textmember: 1,
      textmembers: 1,
      texttitle: 1,
      textdate: 1,
      texttext: 1
    }
  });
});
