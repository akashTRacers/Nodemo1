var mongoose = require('mongoose');
var Schema = mongoose.Schema;


 // define a schema
 var animalSchema = new Schema({ name: String, type: String });

 console.log(1);
 // assign a function to the "methods" object of our animalSchema
 animalSchema.methods.findSimilarTypes = function(cb) {
    console.log(2);
   return this.model('Animal').find({ type: this.type }, cb);
   console.log('B');
 };
 console.log(3);
 var Animal = mongoose.model('Animal', animalSchema);
 var dog = new Animal({ type: 'dog' });
 console.log(4);
 dog.findSimilarTypes(function(err, dogs) {
    console.log(5);
   console.log(dogs); // woof
 });