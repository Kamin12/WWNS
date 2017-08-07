Products.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Products.schema = new SimpleSchema({
  producttext: {type: String},
  producttitle: {type: String},
  productmedia: {type: Object},
  productmember: {type: String},
  productdate: {type: Date},
  productprice: {type: String},
  productshipprice: {type: String},
  productshiptime: {type: String}
});

Products.attachSchema(Products.schema);
