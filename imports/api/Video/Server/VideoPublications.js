import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Videos } from '../Video.js';



Meteor.publish('videoStream', function (videoTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Video.findOne({videoTitle}, {
      fields: {
        videomember: 1,
        videomembers: 1,
        videotitle: 1,
        videodate: 1,
        videotext: 1
     }
    });
});
